#!/usr/bin/env node
'use strict';

/**
 * One-time setup script — run once, store the printed IDs in your .env.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-ant-... node backend/scripts/setupManagedAgent.js
 *
 * It creates:
 *   1. A cloud Environment in Claude Managed Agents
 *   2. A Managed Agent configured to use Adray's MCP server
 *
 * After it prints the IDs, add them to your .env / Render secrets:
 *   MANAGED_AGENT_ID=agent_...
 *   MANAGED_AGENT_ENV_ID=env_...
 *
 * Do NOT run this on every deploy — agents are persistent resources.
 * To update the agent's config after the initial setup, call
 * `client.beta.agents.update(agentId, {...})` or use the `ant` CLI:
 *   ant beta:agents update --agent-id "$MANAGED_AGENT_ID" --version N < agent.yaml
 */

require('dotenv').config({ path: require('path').join(__dirname, '../../.env') });

const { setupAgentOnce } = require('../services/managedAgentService');

(async () => {
  console.log('Setting up Claude Managed Agent for Adray…');
  console.log(`MCP server: ${process.env.APP_URL || 'https://adray.ai'}/mcp\n`);

  const { agentId, environmentId } = await setupAgentOnce();

  console.log('✅ Done! Add these to your .env / Render environment:\n');
  console.log(`MANAGED_AGENT_ID=${agentId}`);
  console.log(`MANAGED_AGENT_ENV_ID=${environmentId}`);
  console.log('\nDo not run this script again — agents are persistent.');
})().catch((err) => {
  console.error('Setup failed:', err.message);
  process.exit(1);
});
