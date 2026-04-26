'use strict';

/**
 * /api/managed-agents  — Claude Managed Agents endpoints for Adray
 *
 * All routes require an authenticated Adray session (passport / req.user).
 *
 * Flow per request:
 *  1. POST /sessions          → create an MCP token for the user, spin up a
 *                               Claude Managed Agent session, return session ID
 *  2. GET  /sessions/:id/stream → open SSE stream and forward agent events
 *  3. POST /sessions/:id/message → send a follow-up message mid-session
 *  4. DELETE /sessions/:id    → archive the session when done
 */

const express = require('express');
const crypto = require('crypto');
const router = express.Router();

const OAuthToken = require('../mcp/auth/models/OAuthToken');
const {
  createSession,
  sendMessage,
  streamSession,
  archiveSession,
} = require('../services/managedAgentService');

const MANAGED_AGENTS_CLIENT_ID = 'adray-internal-managed-agent';
const ACCESS_TOKEN_LIFETIME_MS = 60 * 60 * 1000; // 1 hour

/** Generates an Adray MCP OAuth token for the authenticated user. */
async function mintMcpToken(userId) {
  const accessToken = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + ACCESS_TOKEN_LIFETIME_MS);

  await OAuthToken.create({
    accessToken,
    userId,
    clientId: MANAGED_AGENTS_CLIENT_ID,
    scopes: ['read'],
    accessTokenExpiresAt: expiresAt,
    revoked: false,
  });

  return { accessToken, expiresAt: expiresAt.toISOString() };
}

/**
 * POST /api/managed-agents/sessions
 * Body: { prompt: string, title?: string }
 *
 * Creates a new Claude Managed Agent session connected to Adray's MCP server.
 * Requires MANAGED_AGENT_ID and MANAGED_AGENT_ENV_ID env vars (set once via
 * the setup script: node backend/scripts/setupManagedAgent.js).
 */
router.post('/sessions', async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const agentId = process.env.MANAGED_AGENT_ID;
    const environmentId = process.env.MANAGED_AGENT_ENV_ID;
    if (!agentId || !environmentId) {
      return res.status(503).json({
        error: 'Managed Agent not configured. Run scripts/setupManagedAgent.js first.',
      });
    }

    const { prompt = '', title } = req.body;
    const { accessToken, expiresAt } = await mintMcpToken(userId);

    const { sessionId } = await createSession({
      agentId,
      environmentId,
      accessToken,
      expiresAt,
      title: title || `Adray analysis — ${new Date().toLocaleDateString()}`,
    });

    res.json({ sessionId, prompt });
  } catch (err) {
    console.error('[managed-agents] createSession error:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/managed-agents/sessions/:id/stream?prompt=...
 *
 * SSE endpoint.  Opens the Managed Agent event stream and forwards events
 * to the browser as Server-Sent Events.
 *
 * Event types emitted to the client:
 *   - "text"     → { text: string }          (agent response text)
 *   - "thinking" → { text: string }          (agent reasoning, may be empty)
 *   - "tool"     → { name: string }          (MCP tool invocation)
 *   - "done"     → {}                        (session went idle / terminated)
 *   - "error"    → { message: string }
 */
router.get('/sessions/:id/stream', async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const sessionId = req.params.id;
    const prompt = req.query.prompt || '';

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    function send(eventName, data) {
      res.write(`event: ${eventName}\ndata: ${JSON.stringify(data)}\n\n`);
    }

    await streamSession({
      sessionId,
      prompt,
      onText: (text) => send('text', { text }),
      onThinking: (text) => { if (text) send('thinking', { text }); },
      onToolUse: (name) => send('tool', { name }),
      onDone: () => { send('done', {}); res.end(); },
      onError: (err) => { send('error', { message: err.message }); res.end(); },
    });
  } catch (err) {
    console.error('[managed-agents] stream error:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: err.message });
    } else {
      res.write(`event: error\ndata: ${JSON.stringify({ message: err.message })}\n\n`);
      res.end();
    }
  }
});

/**
 * POST /api/managed-agents/sessions/:id/message
 * Body: { text: string }
 *
 * Sends a follow-up user message to an existing session.
 */
router.post('/sessions/:id/message', async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'text is required' });

    await sendMessage(req.params.id, text);
    res.json({ ok: true });
  } catch (err) {
    console.error('[managed-agents] sendMessage error:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * DELETE /api/managed-agents/sessions/:id
 *
 * Archives the session when the user is done.
 */
router.delete('/sessions/:id', async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    await archiveSession(req.params.id);
    res.json({ ok: true });
  } catch (err) {
    console.error('[managed-agents] archiveSession error:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
