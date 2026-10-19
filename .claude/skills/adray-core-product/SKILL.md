---
name: adray-core-product
description: Adray Core product, positioning and customer context (personas, navigation, dashboards, task cards, module status, copy rules, ICP, pricing, competitors, Meta compliance risks). Use before any work that changes what a user sees or does in Adray Core — a new feature, screen, dashboard, navigation, roles/permissions, tasks or "Moves", onboarding, pricing or plans, signup, landing pages, emails, notifications, empty states, the daily story or Mark's replies, comparison ("vs") pages — or when deciding what to build next, or touching Meta permissions, scraping, organic/competitor intelligence, token storage, consent or data deletion. Also use when editing dashboard-src/, saas-landing/, plan-src/, bookcall-src/, public/dashboard/, public/landing/, public/plans/ or public/onboarding*.html. Skip for pure backend, infra or bug fixes with no user-facing change.
---

# Adray Core product context

The full context lives in `docs/product/` (snapshots of the team's Claude Docs). Read only the doc and sections the task needs, then apply them; don't load everything.

## Which doc to read

| Task | Read | Sections to start with |
| --- | --- | --- |
| New feature, screen, navigation or dashboard; roles, permissions, tasks/Moves, team board | `docs/product/core-product-by-persona.md` | The two personas · Navigation and sitemap · The two dashboards · The task card |
| Deciding what to build, or a module's status (Signal, Attribution, Mark, Cortex, Campaign Manager, forecast, inventory) | `docs/product/core-product-by-persona.md` | The Core offering, by persona · What Core needs to build |
| Any user-facing text (landing, emails, notifications, empty states, daily story, Mark replies) | `docs/product/company-vision-and-value.md` | Position and banner · The daily story · Language guide |
| Pricing, plans, signup, onboarding flow, demo or sales material | `docs/product/stakeholders-and-customers.md` | Who buys · Sales approach · Sales toolkit |
| Comparison pages, "vs" copy, or a feature justified by a competitor | `docs/product/competitor-analysis.md` | Competitor by competitor · Where Adray overlaps · Inline or different? |
| Meta permissions, scraping, organic/competitor intelligence, token storage, consent, data deletion | `docs/product/archive/stakeholder-map-draft-1.md` | Administrators and gatekeepers · External and ecosystem stakeholders |

`docs/product/archive/` holds superseded drafts: use them only for the security and compliance findings above, never for messaging or pricing.

## Rules that always apply

- **Naming:** "Adray" = the company; "Adray Core" = the product. Mark, Signal and Cortex are feature names; "AFL" is retired.
- **Banner:** *Know where to push your team.* Three promises: what's working, what's making money, what to do next. Always "you + Adray", never "instead of" the team or agency.
- **Personas:** Owner / Executive decides where to push; Team Member acts and sees what each change achieved. Same app, different home screen.
- **Product:** numbers checked against real orders or CRM deals; every action works with a plain click, never only through Mark; at most three key numbers per dashboard; every card leads to a decision or action; "Nothing needs you today" is a valid state.
- **Copy:** customer words over technical ones ("real sales", not "reconciled attribution"; "in ChatGPT or Claude", not "MCP"); pesos and plain language in the user's language.
- **Internal only:** Latin America is the focus market. Never mention a region in user-facing copy.

If a doc conflicts with the code or with something the user says, the user wins; point out the conflict in one line.
