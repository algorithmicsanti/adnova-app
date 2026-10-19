# Adray Core — Roles in the Product

> Snapshot of the Claude Doc [https://claude.ai/artifact/UP6BeimKJde3PF6QZ2DdvF](https://claude.ai/artifact/UP6BeimKJde3PF6QZ2DdvF), taken 2026-10-19. The doc is the source of truth; refresh this copy if it changes. Content about other Adray product lines is intentionally left out of this repo.

> **Moved (6 Oct 2026).** This tab now lives as its own product doc, organized by persona: [Adray Core — Product by Persona](../core-product-by-persona.md). Kept here for reference only.

2026-10-06 · @Jess

Adray Core serves two kinds of people with two different jobs: managers open it to see what's working and decide who on their team should fix what; team members open it to see their tasks and whether their last changes worked.

> **Scope:** Adray Core only. These are SaaS product changes.

## The Adray Core offering today

Core already has most of the pieces each role needs; what's missing is the layer that turns them into assignments, tasks and measured results.

| Module | What it does, in plain words | Status (from project notes, Sep 2026) | Promise it serves |
| --- | --- | --- | --- |
| **Signal** (daily summary, PDF, ChatGPT/Claude connection) | Sends a daily read of performance and puts the data inside AI tools | Live | What's working |
| **Attribution and Truth Table** | Follows each visit to a verified order; compares platform-reported, last-click and Adray return side by side | Live | What's working, making money |
| **Lead-gen attribution** | Traces ads to leads and closed deals in the CRM | Live | What's working, making money |
| **Revenue Recovery and Audiences** | Finds lost sales and buyer groups, with "how to fix" suggestions | Live | Making money |
| **Behaviour Intelligence** | Analyzes site sessions to find where people get stuck | Live | What's working |
| **Search Intelligence** | Search insights with AI recommendations | Live | What to do next |
| **Landing pages** | Creative-matched pages for campaigns | Live | What's working |
| **Paid dashboards** | Meta, Google and LinkedIn performance (TikTok Ads login only) | Live; known issues with expired connections | What's working |
| **Organic and competitor intelligence** | Instagram, Facebook and TikTok performance; competitor tracking and creative analysis | Live; compliance risk flagged | What's working |
| **Campaign Manager** | Builds Meta campaigns and lead forms from a brief; everything created paused | In QA | What to do next (acting on it) |
| **Mark** | AI chat that reads every source and makes Meta and Google changes with confirmation; keeps memory and a change log | Live; rename in progress | What to do next |
| **Pixel, pixel auditor, connections, data operations** | Tracking, data health and source connections | Live | Foundation |
| **Forecast and month close** | Projects how the month will close | To confirm (in the CEO pitch) | What to do next |
| **Inventory connection** | Stock levels and product risk | To confirm (in the CEO pitch) | Making money |
| **Cortex** | Memory of changes and their impact over time | In development | What to do next |
| **Roles, assignment, task cards, team board** | Turns suggestions into owned tasks with measured results | **Not built** | The loop |

## The split: managers and team

Two groups, two jobs: managers decide where to push, team members do the pushing, and Adray Core connects the two by turning every suggestion into a task with a measured result.

|  | Manager roles | Team roles |
| --- | --- | --- |
| **Who** | CFO, CRO, Ecommerce Manager | Developer, Inventory, Digital Sales, Ad buyer |
| **Job when opening Adray** | See where things are and aren't working, and assign tasks to the team to improve them | See my tasks, how to make the improvement, and what changed from my previous improvements |
| **Question in their head** | "Where do I push my team today?" | "What do I do today, and did my last change work?" |
| **Unit they think in** | Pesos against a target | Tasks and results in their own area |
| **How often** | Daily line, weekly team brief, monthly review | Daily, when tasks arrive |
| **Where they'd rather get it** | Email, Slack or WhatsApp; the home screen for detail | Slack or WhatsApp task alerts; their own tools to do the work |

_(Diagram in the source doc; not reproduced here.)_

The loop is what makes Adray more than a dashboard: without the assignment and the measured result, managers see data but can't push, and team members get tasks but never see whether they mattered.

## Manager roles

All three managers want the same shape of answer — what's working, what isn't, and who should fix it — but each measures it differently: the CFO in margin and forecast, the CRO in revenue across teams, the Ecommerce Manager in today's store target.

|  | **CFO** | **CRO** | **Ecommerce Manager** |
| --- | --- | --- | --- |
| **Job when opening Adray** | Know if we'll hit the month, and whether marketing spend is earning its keep | See where revenue comes from and where it leaks, across channels and teams | Decide what the team should do today to hit the number |
| **Context** | Rarely logs in; reads summaries; trusts the books, distrusts platform reports; approves budget moves | Owns the revenue target across ecommerce, marketing and sales; manages other managers | Owns the store's daily target; directly manages the ad buyer, developer, inventory and digital sales |
| **First thing they need to see** | Month forecast vs target; revenue and margin by channel checked against real sales; cost per real sale | Revenue vs target by channel; where the funnel leaks (ads → site → checkout, or lead → deal); which teams' tasks are open or late | The daily story; the three health checks (business, marketing, technology); five moves with suggested owners |
| **What they assign, to whom** | Budget and margin issues to the CRO or Ecommerce Manager | Cross-team priorities to the Ecommerce Manager and sales leads | Each move to the ad buyer, developer, inventory or digital sales, with a due date |
| **Success looks like** | The forecast lands close to the month's close; marketing numbers match the books; no month-end surprises | Target hit; leaks closed; every team working on the highest-peso moves | Moves done on time, each with a measured result; the month's target hit |
| **What we've learned** | Finance is a second buyer: "how much will we sell this month?" is a finance question | In lead gen the pain is "340 leads, 12 deals"; the buyer directs people, not data | A client said: "I need to know how to push my team and where"; this role is Core's primary buyer |
| **Tailor the product by** | A finance view in pesos and margin; month-close forecast; read-only by default; export to their reporting | A cross-team scoreboard rolling up every team's moves; drill-down by channel | One-click assignment; a team progress board; a Monday team brief |

## Team roles

Each team member works in their own tools and judges Adray by one thing: does it tell me exactly what to do, why it matters, and whether my last change worked?

|  | **Developer** | **Inventory** | **Digital Sales** | **Ad buyer** |
| --- | --- | --- | --- | --- |
| **Job when opening Adray** | Fix what's breaking the site or tracking before it costs sales | Keep the products that sell in stock, and avoid money stuck in slow stock | Turn more visits into orders | Put the budget where it actually sells |
| **Where they work** | Code, Tag Manager, Shopify or VTEX admin | ERP, inventory sheets, supplier orders | Store admin, promotions, email and cart recovery tools | Meta Ads Manager, Google Ads, TikTok Ads |
| **Typical tasks from Adray** | Tracking broken; checkout errors; slow pages with high traffic; broken connections | Reorder bestsellers at risk; flag low-stock products so ads stop pushing them; clear slow movers | Fix product pages with high traffic and low conversion; adjust a promotion; recover abandoned carts | Shift budget; pause campaigns with no real sales; scale the ones that sell; launch new campaigns |
| **How Adray helps them improve** | The issue, where it happens, sessions affected and the error, ready to paste into their ticket | The product, days of stock left, revenue at risk, and a suggested reorder | The page, the friction seen in real sessions, and its size in pesos | The campaign, real vs platform-reported return, and the suggested shift, which they can apply with the campaign builder |
| **What changed since last time** | Conversion and load time on fixed pages, before vs after; errors cleared | Stock-outs avoided; revenue protected | Conversion rate and order value on changed pages, before vs after | Real return on last week's budget shifts |
| **Data Adray needs** | Technology health: site speed, tracking, connections, checkout errors | Inventory connection and sales velocity | Session behavior analysis, Revenue Recovery | Ad accounts, attribution against real sales |
| **What we've learned** | Site and tracking issues are one of the three health checks in the welcome screen | Stock-outs on bestsellers are one of the biggest revenue risks in the daily story | Behavior analysis competes with free tools; tying it to pesos and a task is the difference | Must be faster and safer than Ads Manager; QA found the assistant was the only way through the campaign builder, which blocks this role |

**One rule from the ad buyer findings that applies to every team role:** never make the assistant the only way to act. Every task must also work with a plain click, because team members abandon tools that slow them down.

## What each role sees when they open Adray Core

Two home screens built from the same data: the manager home is about decisions and people, the team home is about tasks and results.

| Order on screen | **Manager home** | **Team home** |
| --- | --- | --- |
| 1 | **The daily story:** one line on how the business did | **My tasks today:** what's assigned to me, by due date and pesos at stake |
| 2 | **Three health checks:** business, marketing, technology | **Why each one matters:** the reason and the expected impact in pesos |
| 3 | **Five moves,** each with a suggested owner and an assign button | **How to do it:** the steps, the evidence, and an action button where Adray can do it for them |
| 4 | **Team board:** who's working on what, what's late, what's done | **What changed:** results of my last tasks, before vs after |
| 5 | **Results:** last week's moves and what they produced | **My area's health:** the few numbers for my role (site health, stock risk, page conversion, real ad return) |
| Below | All the data: attribution, behavior, forecast, dashboards | Only the data behind my tasks |

**Role-specific defaults:**

- **CFO:** opens on forecast and margin instead of the five moves; read-only.
- **CRO:** sees every team's board rolled up, not one team.
- **Ecommerce Manager:** the full manager home, with assignment.
- **Each team role:** sees only their own tasks and area health by default, with the rest a click away.

**How it arrives outside the app:** managers get the daily story by email, Slack or WhatsApp and a Monday team brief; team members get a message when a task is assigned and another when its result is measured.

## Module by role: where each piece shows up

Every module stays available to everyone, but each role sees only a few on their home screen; the rest sit one click down or arrive inside a task.

**Key:** ★ home screen · ● inside their tasks · ○ one click away · — hidden by default

| Module | CFO | CRO | Ecom. Manager | Developer | Inventory | Digital Sales | Ad buyer |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Daily story (Signal) | ★ | ★ | ★ | ○ | ○ | ○ | ○ |
| Five moves and task cards | ○ | ★ | ★ | ★ | ★ | ★ | ★ |
| Forecast and month close | ★ | ★ | ★ | — | ○ | ○ | — |
| Attribution and Truth Table | ○ | ★ | ○ | — | — | ○ | ● |
| Lead-gen attribution | ○ | ★ | ○ | — | — | — | ● |
| Revenue Recovery and Audiences | ○ | ○ | ○ | — | — | ● | ○ |
| Behaviour Intelligence | — | ○ | ○ | ● | — | ★ | — |
| Search Intelligence | — | ○ | ○ | — | — | ○ | ○ |
| Landing pages | — | — | ○ | ● | — | ● | ○ |
| Paid dashboards | — | ○ | ○ | — | — | — | ★ |
| Organic and competitor intelligence | — | ○ | ○ | — | — | ○ | ○ |
| Campaign Manager | — | — | ○ | — | — | — | ● |
| Mark | ○ | ○ | ○ | ○ | ○ | ○ | ● |
| Pixel, connections, data health | — | — | ○ | ★ | — | — | — |
| Inventory | ○ | ○ | ○ | — | ★ | ○ | ● |
| Cortex (what worked before) | ○ | ○ | ○ | ● | ● | ● | ● |

**Display principles:**

- **For managers:** summary first, in pesos against the target; show exceptions, not everything; every number leads to an assign button.
- **For the team:** tasks first; one specific action per card; always show before vs after; only their area's numbers on the home screen.
- **For both:** the same numbers everywhere, checked against real sales, so a manager and a team member never argue about which figure is right.

**What Core needs to build, and which roles it unblocks:**

| Build | Unblocks |
| --- | --- |
| Roles and permissions per user (manager, team role, read-only) | Everyone; the role-based home screens |
| Assignment, task cards and a team board | The whole loop; Ecommerce Manager and CRO above all |
| Before-vs-after measurement per task | Team roles' "what changed"; managers' results |
| A technology health view (site speed, tracking, checkout errors) built from the pixel auditor and data operations | Developer |
| Inventory connection | Inventory, and stock-risk moves for the Ad buyer |
| Forecast and month close | CFO, CRO |
| Notifications by role (daily story, task assigned, result measured) | Everyone, outside the app |

## The task card

The task card is the one object both groups share: the manager sees it as a decision, the team member as a job, and Adray closes it with a measured result.

| Field | Example | Who it's for |
| --- | --- | --- |
| **The move** | Move 20% of Campaign B's budget to Campaign A | Both |
| **Why** | Campaign B has had no real sales in 14 days; Meta reports 9 | Both |
| **Pesos at stake** | About 18,000 MXN this week | Manager decides; team prioritizes |
| **Owner and due date** | Ad buyer · Wednesday | Set by the manager |
| **How to do it** | Steps, evidence, and an action button where Adray can apply it | Team |
| **Status** | Suggested → assigned → in progress → done → measured | Both |
| **Result** | Real return up from 1.4 to 2.1 the following week | Both; feeds the next suggestions |

Numbers in the example are illustrative.

**Rules for every card:**

1. One owner, one action. If it needs two people, it's two cards.
2. Always a reason and a peso value, so the team knows why it matters.
3. Every card ends with a measured result, even when the result is "no change"; that's what teaches the system and builds trust.
4. Cards can be sent to the tools teams already use (Slack, WhatsApp, a task tool) rather than living only in Adray.

## What this changes

Designing for two roles touches more than the home screen: it changes onboarding, the message for each group, and why unlimited users matters.

| Area | Change |
| --- | --- |
| **Product** | Role-based home screens; one-click assignment; task cards with measured results; a team board for managers; role permissions (CFO read-only, team members see their area first); sending tasks to Slack, WhatsApp or task tools |
| **Onboarding** | Map the client's people to roles in week one; invite the whole team; the day-21 milestone becomes "five moves assigned to named owners" |
| **Messaging** | Managers: *Know where to push your team.* Team: *Know what to do today, and see what your work changed.* |
| **Pricing** | Unlimited users is essential, not a perk: the loop breaks if the team can't log in |
| **Sales and demo** | Show both homes: the manager assigns a move, then switch to the team member's view of that same card and its result |
| **Data** | Each team role needs its own source connected: inventory for Inventory, technology health for the Developer, session behavior for Digital Sales, ad accounts for the Ad buyer |

## Learned vs assumed, and open questions

**Learned (from clients and our own work):** managers want direction, not data (one client, in their own words); the buyer is the manager who owns the revenue number; finance cares about the forecast; ad buyers judge the product against Ads Manager and leave when the assistant is the only way forward.

**Assumed (to validate):** the exact role list; that team members will open Adray daily rather than only respond to messages; that measured results are what keep team members engaged.

- [ ] Is "Digital Sales" the online store's merchandising and promotions role, or lead-gen sales reps? This doc assumes the first.
- [ ] For lead-gen clients, do the same roles apply, with sales reps as the team role and the CRO as manager?
- [ ] When an agency runs the ads, is the ad buyer a team member inside the client's Adray, with their own login?
- [ ] Do tasks live inside Adray, or get pushed to the tools teams already use (Slack, Asana, Jira)?
- [ ] Which modules can already generate task cards today, and which need new data first (inventory, forecast, technology health)?
- [ ] Validate both home screens with two manager and two team users at a current client.
