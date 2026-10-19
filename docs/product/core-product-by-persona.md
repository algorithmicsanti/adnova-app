# Adray Core — Product by Persona

> Snapshot of the Claude Doc [https://claude.ai/artifact/Amau3ENvgwT61PxRA4xLMe](https://claude.ai/artifact/Amau3ENvgwT61PxRA4xLMe), taken 2026-10-19. The doc is the source of truth; refresh this copy if it changes. Content about other Adray product lines is intentionally left out of this repo.

2026-10-06 · @Jess

> **Internal.** Adray Core only. This doc defines the product's approach, benefits and value for each persona, to guide SaaS product changes and copy.

Adray Core serves two personas: the **Owner / Executive** (owner, CFO, CRO, ecommerce manager), who sees where to push the team, and the **Team Member** (ad buyer, developer, digital sales, inventory and similar roles), who sees exactly what to do and what their last change achieved.

## The approach

Adray Core is built for two groups with two jobs: executives decide where to push, team members do the pushing, and every move is measured so both can see what worked.

**Five principles:**

1. **One source of truth.** Every number is checked against real orders or closed deals, so managers and teams never argue about which figure is right.
2. **Executives decide, team members act.** Executives get decisions and assignments; team members get specific tasks.
3. **Every move is measured.** Each task ends with a before-vs-after result, even when the answer is "no change."
4. **Show each person only what they need.** A few things on each home screen; everything else one click away.
5. **Meet people where they work.** The daily story and task alerts arrive by email, Slack or WhatsApp; the work happens in each team's own tools.

_(Diagram in the source doc; not reproduced here.)_

The loop is what makes Core more than a dashboard: without the assignment and the measured result, executives see data but can't push, and team members get tasks but never see whether they mattered.

## The two personas

Two personas, two jobs: the Owner / Executive decides where to push, and the Team Member does the pushing; the Team Member's screen adapts to their function.

|  | **Owner / Executive** | **Team Member** |
| --- | --- | --- |
| **Who** | Owner, CFO, CRO, ecommerce manager | Ad buyer, developer, digital sales, inventory, and similar roles |
| **Job when opening Core** | See where things are and aren't working, and assign tasks to the team to improve them | See my tasks, how to make the improvement, and what changed from my previous improvements |
| **Question in their head** | "Where do I push my team today?" | "What do I do today, and did my last change work?" |
| **Top benefit** | Five moves, ranked by pesos, ready to assign | Clear tasks with the evidence, and proof of what each change earned |
| **Value they measure** | Target hit; moves done with measured results | Their area's numbers improving after each task |
| **Their line** | *Know where to push your team.* | *Know what to do today, and see what your work changed.* |

## Owner / Executive

**Who:** the owner, CFO, CRO and ecommerce manager. They share one dashboard; what changes between them is permission (finance can be read-only), not layout.

**Job:** see where things are and aren't working, and assign tasks to the team to improve them.

**Context:** owns a revenue target and manages people. Reads summaries more than dashboards. Trusts the books, distrusts what ad platforms report. The ecommerce manager is usually the person who buys Core.

**What they see first:** the daily story; three health checks (Business, Marketing, Technology); five moves with suggested owners.

**Benefits:**

- Clear priorities every morning, ranked by money at stake.
- Numbers that match the books, so budget conversations start from agreement.
- Assigning a move takes one click, and a team board shows who's doing what.
- Early warning when the month is off track, while there's time to act.

**Value:** target hit; moves done on time with measured results; spend moved away from what doesn't really sell.

**Differences inside the persona:**

| Role | Cares most about | Product setting |
| --- | --- | --- |
| Owner | Growing profitably | Full access |
| CFO | Forecast, margin, whether spend pays back | Read-only by default |
| CRO | Revenue across channels and teams; for lead gen, cost per closed deal | Sees every team's board |
| Ecommerce manager | Today's store target and the team's moves | Full access; assigns most moves |

**What we've learned:** a client said, "I don't need to see all the data, I need to know how to push my team and where." Finance cares about the forecast; in lead gen the pain is "340 leads, 12 deals."

## Team Member

**Who:** the ad buyer, developer, digital sales (store merchandising and promotions), inventory, and similar roles.

**Job:** see my tasks, how to make the improvement, and what changed from my previous improvements.

**Context:** works in their own tools and judges Core by one thing: does it tell me exactly what to do, why it matters, and whether my last change worked?

**Benefits:**

- Tasks arrive with the reason, the evidence and the pesos at stake.
- An action button where Core can apply the change.
- Proof of what each change earned, visible to their manager automatically.

**How the screen adapts by function:**

| Function | Works in | Typical tasks | What changed, measured as |
| --- | --- | --- | --- |
| Ad buyer | Meta Ads Manager, Google Ads, TikTok Ads | Shift budget; pause campaigns with no real sales; scale what sells | Real return after each shift |
| Developer | Code, Tag Manager, store admin | Fix tracking, checkout errors, slow high-traffic pages | Errors cleared; conversion on fixed pages |
| Digital Sales | Store admin, promotions, cart recovery | Fix pages where shoppers get stuck; adjust promotions | Conversion and order value on changed pages |
| Inventory | ERP, inventory sheets | Reorder bestsellers at risk; flag low stock | Stock-outs avoided; revenue protected |

**What we've learned:** QA found the Campaign Manager could only be used through the assistant, which blocks the ad buyer. The rule for every Team Member: never make the assistant the only way to act.

## Navigation and sitemap

Today's sidebar lists ten tools side by side, so demos bounce between them; the new navigation is organized by job — Today, Moves, Insights — with Insights grouped by funnel stage so buyers recognize it at once.

**What's not working in today's sidebar:**

- Ten flat items named after tools (Mark IA, Cortex, Paneles), not jobs.
- Setup comes first: Connections is item one, with an alert dot.
- No place for tasks or the team, so the loop has nowhere to live.
- Summary pages (Resumen ejecutivo, Proyecciones) sit among data pages, with nothing saying where to start.
- Every user sees the same ten items.

**Naming:** the home screen is **Today**, not "dashboard". One app, one navigation; what changes by persona is the home screen and which pages show by default. Settings means company settings; each person's profile sits behind their avatar.

_(Diagram in the source doc; not reproduced here.)_

| Area | What's inside | Owner / Executive | Team Member | From today's sidebar |
| --- | --- | --- | --- | --- |
| **Today** | Home by persona; setup checklist for new accounts; share and export | Executive home | Team home | Resumen ejecutivo |
| **Moves** | Suggested moves, team board, my tasks, results | All moves and the team board | "My tasks" and my results | New |
| **Insights** | Six funnel groups (below) | All groups | Only their function's pages | Atribución, Proyecciones, Recupera Ingresos, Búsquedas, Paneles |
| **History** | Timeline, what worked | Whole business | Their area | Cortex |
| **Campaigns** | Create, manage, lead forms, audiences, landing pages | Manage and audiences | Ad buyer, Digital Sales | Campaign Manager; audiences from Recupera Ingresos |
| **Settings** | Connections, data health, team and roles, Mark access, AI connectors (Adray in ChatGPT and Claude), billing | Everything | Developer: connections and data health | Conexiones, Operaciones de datos |
| **Top bar** | Workspace switcher, search (⌘K), "Checked against real sales", alerts, profile | Yes | Yes | New |
| **Bottom of sidebar** | Ask Mark, Your Adray team, Help | Yes | Yes | Mark IA |

**Insights groups and their flyouts:**

| Group | Pages, in order | Question it answers |
| --- | --- | --- |
| **Revenue** | Overview · Forecast · Revenue by source | How much did we make, where is it heading, and where did it really come from? |
| **Acquisition** | Ads performance · Creative · Customer journeys | Which ads and paths bring buyers? |
| **Conversion** | Site behaviour · Lost revenue | Where do visitors get stuck, and what does it cost? |
| **Retention** | Customer segments · Lifetime value (if available) | Who comes back, and what are they worth? |
| **Discovery** | SEO and search · Social · Competitors | How do people find us, and how do we compare? |
| **Products** | Inventory | What's selling, and what's running out? |

**Rules for Insights:** each page lives in one group only; Revenue comes first because verified revenue is Adray's lead; each flyout item carries a one-line description; for lead-gen clients, "Revenue by source" becomes "Deals by source". Overview assumes the revenue, orders and margin figures from today's Attribution page can stand as their own page; if not yet, Revenue starts with Forecast.

**Wireframes, light:**

_(Diagram in the source doc; not reproduced here.)_

**Search and Mark:** search (⌘K) finds pages, campaigns, products and tasks instantly; when what you type reads like a question, the first result is "Ask Mark". Mark itself is a button at the bottom of the sidebar that opens a side panel on any screen.

### Cross-reference: Triple Whale

Shogun, an Adray client, also uses Triple Whale; these screenshots are from their account.

| Borrow | Avoid |
| --- | --- |
| Funnel group names: Acquisition, Conversion, Retention, Discovery | An empty chat box as home; Today answers before anyone asks |
| A short sidebar with hover flyouts | AI taking the top four items; Mark is one button |
| Help at the bottom of the sidebar | Duplicate pages across groups ("Meta Social Monitor" appears twice) |
| Store switcher at the top | Showing the AI model name to users |
| Pinned metrics, limited: executives can swap one key number on Today | A "Custom" layer; role views come built in |

**Evidence for personas:** Shogun built its own "CRO Management" and "Stock Intelligence" workspaces inside Triple Whale — role views that Adray provides by default.

**Other competitors, briefly:** Polar groups its product by business function, with inventory under Merchandising and audiences under Data Activation. Northbeam splits a CEO-level Overview from a Sales page for media buyers, and keeps the attribution model visible in the top bar. None of the three has assigned tasks with measured results; Moves is Adray's clearest navigation difference.

**Features by persona:**

| Owner / Executive | Team Member |
| --- | --- |
| Daily story and three health checks | My area's health in one line |
| Five moves, ranked by pesos, with a suggested owner | My tasks, by due date and pesos at stake |
| One-click assign | Steps, evidence, and Apply or Done |
| Team board: open, late, done | Alerts when a task is assigned or measured |
| Results scoreboard and Monday team brief | What changed: before vs after on my tasks |
| Forecast and Revenue overview; read-only option for finance | Only my function's pages in Insights |

**A demo that follows the navigation (about 5 minutes):** the executive's Today → assign a move in Moves → switch to the team member's Today → the measured result → Insights → Revenue → Revenue by source as proof → History to show what worked.

## The two dashboards

Both dashboards share four zones and at most three key numbers; anything that doesn't lead to a decision or an action stays one click away.

**Rules for both:**

1. **Four zones, always in the same order:** status, key numbers, actions, results.
2. **No more than three key numbers.**
3. **Every number has a comparison:** in pesos, against a target, or against last period.
4. **Every card leads to a decision or an action.** If nothing can be done about it, it isn't on the dashboard.
5. **Color only for status:** on track, watch, act.
6. **Empty is good:** "Nothing needs you today" is a valid dashboard.
7. **Every action works with a plain click,** not only through the AI chat.

| Zone | **Owner / Executive** | **Team Member** |
| --- | --- | --- |
| **Status** | Daily story, plus health checks: Business, Marketing, Technology | My area's health in one line (by function) |
| **Key numbers (max 3)** | Sales vs target, with month forecast · real return on ad spend vs platform-reported · biggest leak this week, in pesos | The numbers for my function (below) |
| **Actions** | Five moves ranked by pesos, each with a suggested owner and one-click Assign | My tasks, by due date and pesos at stake, with steps, evidence and an action button |
| **Results** | Team board, and last week's results in pesos | What changed from my previous tasks, before vs after |
| **Left off on purpose** | Raw attribution tables, campaign and page detail, social, data health detail | Other functions' numbers, finance views, full dashboards |

**Team Member key numbers, by function:**

| Function | Status line | Key numbers |
| --- | --- | --- |
| Ad buyer | Real return across campaigns vs platform-reported | Top campaigns by spend, real vs platform return · low-stock alerts on advertised products (only when present) |
| Developer | Site and tracking health: speed, tracking, connections, checkout errors | Open issues · pesos at risk |
| Digital Sales | Conversion rate and order value vs last period | Top three friction points, with pesos lost |
| Inventory | Stock risk summary | Bestsellers at risk (days left) · revenue at risk |

**Why this matters:** the client asked for direction, not data. A dashboard that shows everything makes people hunt for what matters; one that shows only their decisions makes Core feel built for them.

## The Core offering, by persona

Core already has most of the pieces each persona needs; the job is to show each person the right few on their home screen and keep the rest one click away.

**What Core includes today** (status from project notes, Sep 2026):

| Module | What it does, in plain words | Status |
| --- | --- | --- |
| Signal | Daily read of performance; data inside ChatGPT and Claude | Live |
| Attribution and Truth Table | Follows each visit to a verified order; compares platform-reported, last-click and Adray return | Live |
| Lead-gen attribution | Traces ads to leads and closed deals in the CRM | Live |
| Revenue Recovery and Audiences | Finds lost sales and buyer groups, with "how to fix" suggestions | Live |
| Behaviour Intelligence | Analyzes site sessions to find where people get stuck | Live |
| Search Intelligence | Search insights with AI recommendations | Live |
| Landing pages | Creative-matched pages for campaigns | Live |
| Paid dashboards | Meta, Google and LinkedIn performance | Live; issues with expired connections |
| Organic and competitor intelligence | Social performance, competitor tracking, creative analysis | Live; compliance risk flagged |
| Campaign Manager | Builds Meta campaigns and lead forms from a brief, created paused | In QA |
| Mark | AI chat that reads every source and makes Meta and Google changes with confirmation | Live; rename in progress |
| Pixel, connections, data health | Tracking, data quality and source connections | Live |
| Forecast and month close | Projects how the month will close | To confirm |
| Inventory connection | Stock levels and product risk | To confirm |
| Cortex | Memory of changes and their impact | In development |
| Roles, assignment, task cards, team board | Turns suggestions into owned tasks with measured results | Not built |

**Where each module shows up:**

**Key:** ★ home screen · ● inside their tasks · ○ one click away · — hidden by default

| Module | Owner / Executive | Team Member |
| --- | --- | --- |
| Daily story (Signal) | ★ | ○ |
| Five moves and task cards | ★ | ★ |
| Forecast and month close | ★ | ○ (Inventory, Digital Sales) |
| Attribution and Truth Table | ★ | ★ Ad buyer · ○ others |
| Lead-gen attribution | ★ (lead-gen clients) | ● Ad buyer |
| Revenue Recovery and Audiences | ○ | ● Digital Sales |
| Behaviour Intelligence | ○ | ★ Digital Sales · ● Developer |
| Search Intelligence | ○ | ○ |
| Landing pages | ○ | ● Developer, Digital Sales |
| Paid dashboards | ○ | ★ Ad buyer |
| Organic and competitor intelligence | ○ | ○ |
| Campaign Manager | ○ | ● Ad buyer |
| Mark | ○ | ● |
| Pixel, connections, data health | ○ | ★ Developer |
| Inventory | ○ | ★ Inventory · ● Ad buyer |
| Cortex (what worked before) | ○ | ● |

**Display principles:**

- **Owner / Executive:** summary first, in pesos against the target; exceptions, not everything; every number leads to an assign button.
- **Team:** tasks first; one specific action per card; always before vs after; only their area's numbers on the home screen.
- **Both:** the same numbers everywhere, checked against real sales.

**How it arrives outside the app:** executives get the daily story by email, Slack or WhatsApp and a Monday team brief; team members get a message when a task is assigned and another when its result is measured.

## The task card

The task card is the one object every persona shares: the executive sees it as a decision, the team member as a job, and Core closes it with a measured result.

| Field | Example | Who it's for |
| --- | --- | --- |
| **The move** | Move 20% of Campaign B's budget to Campaign A | Both |
| **Why** | Campaign B has had no real sales in 14 days; Meta reports 9 | Both |
| **Pesos at stake** | About 18,000 MXN this week | Executive decides; team member prioritizes |
| **Owner and due date** | Ad buyer · Wednesday | Set by the executive |
| **How to do it** | Steps, evidence, and an action button where Core can apply it | Team |
| **Status** | Suggested → assigned → in progress → done → measured | Both |
| **Result** | Real return up from 1.4 to 2.1 the following week | Both; feeds the next suggestions |

Numbers in the example are illustrative.

**Rules for every card:**

1. One owner, one action. If it needs two people, it's two cards.
2. Always a reason and a peso value, so the team knows why it matters.
3. Every card ends with a measured result, even when the result is "no change."
4. Cards can be sent to the tools teams already use (Slack, WhatsApp, a task tool), not only kept in Core.

## What Core needs to build, and what's still assumed

The biggest gap isn't data, it's the layer that connects managers to their team: roles, assignment and measured results.

| Build | Unblocks |
| --- | --- |
| Roles and permissions per user (executive, team member by function, read-only) | Every persona's home screen |
| Assignment, task cards and a team board | The whole loop; the Owner / Executive above all |
| Before-vs-after measurement per task | Team Members' "what changed"; executives' results |
| Technology health view, from the pixel auditor and data operations | Developer |
| Inventory connection | Inventory; stock-risk moves for the Ad buyer |
| Forecast and month close | Owner / Executive |
| Notifications by role | Everyone, outside the app |
| A plain-click path for every action, not only through Mark | Every Team Member, the Ad buyer first |

**Changes beyond the product:**

- **Onboarding:** map the client's people to personas in week one, invite the whole team, and make "five moves assigned to named owners" an onboarding milestone.
- **Messaging:** executives hear *"Know where to push your team"*; team members hear *"Know what to do today, and see what your work changed."*
- **Pricing:** unlimited users is essential, because the loop breaks if the team can't log in.
- **Demo:** show both homes, with the manager assigning a move, then the team member's view of that same card and its result.

**Learned:** executives want direction, not data (one client, in their own words); the buyer owns the revenue number; finance cares about the forecast; ad buyers leave tools that slow them down.

**Assumed, to validate:**

- [ ] The two-persona split, with two executives and two team members at a current client.
- [ ] Whether "Digital Sales" is the store's merchandising and promotions role (assumed here) or lead-gen sales reps.
- [ ] Whether team members will open Core daily, or only respond to messages.
- [ ] For lead-gen clients: whether sales reps are the team persona and the CRO the manager.
- [ ] When an agency runs the ads, whether its ad buyer gets a login in the client's Core.
- [ ] Whether tasks live in Core or are pushed to Slack, Asana or Jira.
- [ ] Whether forecast and the inventory connection are built or still planned.
