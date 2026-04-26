'use strict';

const Anthropic = require('@anthropic-ai/sdk');

const APP_URL = (process.env.APP_URL || 'https://adray.ai').replace(/\/$/, '');
const MCP_URL = `${APP_URL}/mcp`;

let _client = null;
function getClient() {
  if (!_client) {
    if (!process.env.ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY is not set');
    _client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  }
  return _client;
}

/**
 * Creates a new Vault in Claude Managed Agents and stores an Adray MCP
 * access token in it.  The vault is single-use per session because Managed
 * Agents matches vault credentials to MCP servers by URL.
 *
 * @param {string} accessToken  - Valid Adray MCP OAuth access token for the user
 * @param {string} expiresAt    - ISO 8601 expiry timestamp
 * @returns {Promise<string>}   - vault ID (vlt_...)
 */
async function createVault(accessToken, expiresAt) {
  const client = getClient();
  const vault = await client.beta.vaults.create({ name: 'adray-mcp-vault' });

  await client.beta.vaults.credentials.create(vault.id, {
    display_name: 'Adray MCP token',
    auth: {
      type: 'mcp_oauth',
      mcp_server_url: MCP_URL,
      access_token: accessToken,
      // No refresh — Adray tokens last 1 h; create a new vault+session per turn
      ...(expiresAt ? { expires_at: expiresAt } : {}),
    },
  });

  return vault.id;
}

/**
 * Creates a one-time Managed Agent + Environment that connects to Adray's
 * own MCP server.  Callers should store the returned IDs in env vars or DB
 * and reuse them across sessions.
 *
 * @returns {Promise<{agentId: string, environmentId: string}>}
 */
async function setupAgentOnce() {
  const client = getClient();

  const environment = await client.beta.environments.create({
    name: 'adray-agent-env',
    config: { type: 'cloud', networking: { type: 'unrestricted' } },
  });

  const agent = await client.beta.agents.create({
    name: 'Adray Marketing Analyst',
    model: 'claude-opus-4-7',
    system: [
      'You are a marketing performance analyst for an ecommerce brand.',
      `You have access to Adray's attribution platform via MCP tools at ${MCP_URL}.`,
      'Use the available tools to answer questions about ad performance, revenue,',
      'channel attribution, and product metrics. Always cite the data source and',
      'date range used in your analysis.',
    ].join(' '),
    mcp_servers: [{ type: 'url', name: 'adray', url: MCP_URL }],
    tools: [
      { type: 'agent_toolset_20260401', default_config: { enabled: true } },
      { type: 'mcp_toolset', mcp_server_name: 'adray' },
    ],
  });

  return { agentId: agent.id, environmentId: environment.id };
}

/**
 * Starts a new Managed Agent session for a user.
 *
 * @param {object} opts
 * @param {string} opts.agentId        - Pre-created agent ID (from setupAgentOnce)
 * @param {string} opts.environmentId  - Pre-created environment ID
 * @param {string} opts.accessToken    - Adray MCP OAuth access token for the user
 * @param {string} [opts.expiresAt]    - Token expiry (ISO 8601)
 * @param {string} [opts.title]        - Human-readable session title
 * @returns {Promise<{sessionId: string, vaultId: string}>}
 */
async function createSession({ agentId, environmentId, accessToken, expiresAt, title }) {
  const client = getClient();
  const vaultId = await createVault(accessToken, expiresAt);

  const session = await client.beta.sessions.create({
    agent: agentId,
    environment_id: environmentId,
    title: title || 'Adray analysis session',
    vault_ids: [vaultId],
  });

  return { sessionId: session.id, vaultId };
}

/**
 * Sends a user message to an existing session.
 *
 * @param {string} sessionId
 * @param {string} text
 */
async function sendMessage(sessionId, text) {
  const client = getClient();
  await client.beta.sessions.events.send(sessionId, {
    events: [{ type: 'user.message', content: [{ type: 'text', text }] }],
  });
}

/**
 * Streams events from a session and calls handlers for each event type.
 * Opens the stream before sending the kickoff message (stream-first pattern).
 *
 * @param {object} opts
 * @param {string}   opts.sessionId
 * @param {string}   opts.prompt          - Initial user message
 * @param {Function} opts.onText          - Called with each text chunk: (text: string) => void
 * @param {Function} opts.onThinking      - Called with thinking chunks (may be empty on Opus 4.7)
 * @param {Function} opts.onToolUse       - Called when MCP tool is invoked: (toolName: string) => void
 * @param {Function} opts.onDone          - Called when session goes idle (terminal)
 * @param {Function} opts.onError         - Called on stream error: (err: Error) => void
 */
async function streamSession({ sessionId, prompt, onText, onThinking, onToolUse, onDone, onError }) {
  const client = getClient();

  try {
    // Open stream first so we don't miss early events
    const stream = await client.beta.sessions.events.stream(sessionId);

    // Send the kickoff message concurrently
    await sendMessage(sessionId, prompt);

    for await (const event of stream) {
      switch (event.type) {
        case 'agent.message':
          for (const block of event.content || []) {
            if (block.type === 'text' && onText) onText(block.text);
            if (block.type === 'thinking' && onThinking) onThinking(block.thinking);
          }
          break;

        case 'agent.mcp_tool_use':
          if (onToolUse) onToolUse(event.tool_name || event.name);
          break;

        case 'session.status_idle':
          // Terminal when stop_reason is not requires_action
          if (event.stop_reason?.type !== 'requires_action') {
            if (onDone) onDone();
            return;
          }
          break;

        case 'session.status_terminated':
          if (onDone) onDone();
          return;

        case 'session.error':
          if (onError) onError(new Error(event.error?.message || 'session error'));
          return;

        default:
          break;
      }
    }
  } catch (err) {
    if (onError) onError(err);
  }
}

/**
 * Lists events for a session (polling fallback, no streaming required).
 *
 * @param {string} sessionId
 * @returns {Promise<Array>}
 */
async function listEvents(sessionId) {
  const client = getClient();
  const result = await client.beta.sessions.events.list(sessionId);
  return result.data || [];
}

/**
 * Archives a session (cleanup after use).
 *
 * @param {string} sessionId
 */
async function archiveSession(sessionId) {
  const client = getClient();
  await client.beta.sessions.archive(sessionId);
}

module.exports = {
  setupAgentOnce,
  createSession,
  sendMessage,
  streamSession,
  listEvents,
  archiveSession,
};
