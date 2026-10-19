# CLAUDE.md

Working rules: [Agent-instructions.md](Agent-instructions.md). Technical source of truth: [README.md](README.md).

## Product context

This repo builds **Adray Core**, Adray's performance marketing SaaS. Full product and business context lives in [docs/product/](docs/product/README.md). These docs are not loaded automatically: before starting a task that matches a trigger below, read the listed doc first (only the sections you need). Pure backend, infra or bug-fix work with no user-facing change needs none of them.

| Trigger (task or files touched) | Read first |
| --- | --- |
| New feature, screen, navigation or dashboard change; roles, permissions, tasks/Moves, team board; `dashboard-src/`, `public/dashboard/`, `public/onboarding*.html` | [core-product-by-persona.md](docs/product/core-product-by-persona.md) |
| Deciding what to build next, or a module's status (Signal, Attribution, Mark, Cortex, Campaign Manager, forecast, inventory) | [core-product-by-persona.md](docs/product/core-product-by-persona.md) → "The Core offering" and "What Core needs to build" |
| Any user-facing text: headlines, landing pages, emails, notifications, empty states, the daily story, Mark replies; `saas-landing/`, `public/landing/`, `public/plans/` | [company-vision-and-value.md](docs/product/company-vision-and-value.md) → banner, language guide, daily story rules |
| Pricing, plans, signup, onboarding flow, demo or sales material; `plan-src/`, `bookcall-src/`, `public/agendar.html` | [stakeholders-and-customers.md](docs/product/stakeholders-and-customers.md) |
| Comparison pages, "vs" copy, or a feature justified by a competitor (Triple Whale, Polar, Northbeam…) | [competitor-analysis.md](docs/product/competitor-analysis.md) |
| Meta permissions, scraping, organic/competitor intelligence, token storage, consent or data deletion | [archive/stakeholder-map-draft-1.md](docs/product/archive/stakeholder-map-draft-1.md) → gatekeepers and external stakeholders (security and compliance findings) |

Key facts to keep in mind on every task:

- **Naming:** "Adray" = the company; "Adray Core" = this product. Mark, Signal and Cortex are Core feature names; "AFL" is retired.
- **Banner:** *Know where to push your team.* Three promises: what's working, what's making money, what to do next. Always "you + Adray", never "instead of" your team or agency.
- **Two personas:** Owner / Executive (owner, CFO, CRO, ecommerce manager) decides where to push; Team Member (ad buyer, developer, digital sales, inventory) acts and sees what each change achieved.
- **Navigation target:** Today · Moves · Insights (Revenue, Acquisition, Conversion, Retention, Discovery, Products) · History · Campaigns · Settings.
- **Product rules:** every number checked against real orders or CRM deals; every action must work with a plain click, never only through the Mark chat; dashboards show at most three key numbers and every card leads to an action.
- **Biggest build gap:** roles and permissions, task assignment, team board, and before-vs-after measurement per task.
- **ICP:** Head of Ecommerce / Growth at a brand doing ~$1M–$20M/yr online, at least $5k/mo ad spend. Growth tier 15,000 MXN/mo up to 200k GA4 sessions; above that is Core Enterprise.
- **Internal only:** Latin America is the focus market (Spanish-first, MXN, VTEX, WhatsApp). Never mention a region in user-facing copy.
