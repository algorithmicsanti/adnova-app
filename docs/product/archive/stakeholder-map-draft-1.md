# Adray — Stakeholder Map

> Snapshot of the Claude Doc [https://claude.ai/artifact/UP6BeimKJde3PF6QZ2DdvF](https://claude.ai/artifact/UP6BeimKJde3PF6QZ2DdvF), taken 2026-10-19. The doc is the source of truth; refresh this copy if it changes. Content about other Adray product lines is intentionally left out of this repo.

2026-09-30 · @Jess

> **Superseded (6 Oct 2026).** This is the first draft, kept for reference on admin, internal and external stakeholders. Its messaging and pricing recommendations are out of date; see [Stakeholders & Customers](../stakeholders-and-customers.md) and the separate doc *Adray — Strategy One-Pager* (not in this repo).

## How to read this map

Adray has 24 distinct stakeholders across five groups, and the buyer is usually not the person who uses the product day to day. That gap is the root of the focus problem: features are built for operators, while pricing and the website sell to executives and agencies.

Each stakeholder gets three things: the **job** they hire Adray to do, the **context** they work in, and what **success** looks like to them. Every row carries a confidence tag:

- **Observed** — stated on adray.ai or measured in the project docs (audits, handoffs, QA).
- **Inferred** — a reasonable read of the evidence, not yet confirmed with a real customer.
- **Assumed** — a gap filled so the map is complete; validate first.

This is a working hypothesis to test in interviews, not a finished persona set. Section 11 lists what to validate.

## What Adray is today

The website sells a reconciled attribution data layer delivered into AI tools; the product being built is much wider, including a full Meta campaign and lead-form creator that the site never mentions.

**How the site positions it.** A marketing attribution platform that ties each ad click to a verified order or lead, reconciles what Meta, Google and GA4 claim against store records, and delivers the result to Claude, ChatGPT or a dashboard. It offers two paths: Adray Core for ecommerce and Adray Core for lead generation, plus an agency page. Logos shown are LatAm brands (LG Mexico, Milwaukee, Juguetrón, LEGO, UVM, Harris & Frank, Shogun) and demo revenue is in MXN.

**Pricing.** One public plan at $625/mo billed annually or $750/mo monthly, up to 200,000 sessions. The service layer is bundled into that price: onboarding, a dedicated WhatsApp or Slack line, one custom AI workflow built every month, and a monthly 30-minute expert review. Enterprise is custom (200k+ sessions, VTEX/Magento/custom stacks, SSO, SLA, Net 30). Agencies are priced by client portfolio with unlimited seats.

**Product surface, as the project docs describe it.**

| Area | What it does | Primary user |
| --- | --- | --- |
| Attribution + Truth Table | Multi-touch journeys, reconciled ROAS and CAC | Growth lead, analyst |
| Adray pixel / first-party proxy | Server-side events, identity, CAPI | Web dev, marketing ops |
| Signal (daily PDF) + MCP / Custom GPT | Reconciled data inside Claude, ChatGPT, Gemini | Executive, agency AM, analyst |
| Mark (formerly Signal Console) | Chat that reads all sources and executes Meta/Google changes with confirmation | Media buyer |
| Campaign Manager | Brief-to-campaign builder, Meta lead-form replica | Media buyer, trafficker |
| Revenue Recovery, Audiences, CRO agent | Find lost sales, build audiences, fix funnels | Ecommerce/CRO manager |
| Landing pages, CRM + WhatsApp attribution | Ad-to-deal tracking for lead-gen | Lead-gen marketing + sales |
| Paid + organic dashboards, competitor intel | Meta, Google, LinkedIn, TikTok, IG/FB competitors | Social and paid teams |

**Contradictions already visible on the site** (Observed):

- The FAQ says Adray means no new dashboard and no new interface to log into; the product is a large dashboard with an execution tool inside it.
- The home page says "built for enterprise marketing teams" with scoped onboarding and "Talk to Sales"; the same page promises account creation in 30 seconds and a Signal within the hour.
- The lead-gen page caps the plan at 8 seats; the agency page promises no per-seat fees ever.
- The home summary lists VTEX and Magento as supported; the pricing page moves them to Enterprise.
- Campaign Manager, the largest current engineering investment, does not appear in any public copy.

## Stakeholder landscape

Five stakeholders drive the purchase and renewal decision (B1–B4, A1); most engineering effort currently serves U1 and U2, who rarely sign.

"Fit today" is how well the current product and messaging serve that stakeholder's job: Strong, Partial, Weak, or Conflict (the product works against their interest).

| ID | Stakeholder | Group | Decision power | Fit today | Confidence |
| --- | --- | --- | --- | --- | --- |
| B1 | Head of Growth / CMO, mid-market or enterprise brand | Buyer | Signs, renews | Partial | Inferred |
| B2 | Founder / owner, SMB ecommerce brand | Buyer + user | Signs, uses | Partial | Inferred |
| B3 | Agency owner / partner | Buyer + reseller | Signs for many clients | Partial | Observed |
| B4 | Commercial director, lead-gen business (education, B2B, services) | Buyer | Signs | Partial | Observed |
| B5 | Finance / procurement | Approver | Blocks or approves | Partial | Observed |
| U1 | Performance marketer / media buyer / trafficker | End user | Champions or kills | Partial | Observed |
| U2 | Agency account manager | End user | Champions | Strong | Observed |
| U3 | Marketing analyst / BI | End user | Influences | Strong | Inferred |
| U4 | Ecommerce / CRO manager | End user | Influences | Partial | Inferred |
| U5 | Social / community manager | End user | Low | Partial | Observed |
| U6 | Sales team / SDRs in lead-gen | End user | Influences B4 | Weak | Inferred |
| U7 | Executive reader of the Signal | Consumer | Influences renewal | Strong | Inferred |
| A1 | Workspace owner / admin | Administrator | Controls access | Partial | Observed |
| A2 | Web developer / IT | Gatekeeper | Can stall onboarding | Partial | Inferred |
| A3 | Security, legal, privacy | Gatekeeper | Can veto | Weak | Observed |
| A4 | Client's Meta Business / ad account admin | Gatekeeper | Grants permissions | Partial | Observed |
| E1 | Ad and commerce platforms (Meta, Google, Shopify, Mercado Libre) | External | Can switch Adray off | Conflict | Observed |
| E2 | AI platforms (Anthropic, OpenAI, Google) | External | Distribution channel | Strong | Observed |
| E3 | Clients' own customers and leads | External, affected | None, but reputational | Weak | Observed |
| E4 | Tracked competitors and creators | External, affected | None, but legal | Conflict | Observed |
| I1 | Leadership and product (founders, product owner) | Internal | Sets direction | — | Observed |
| I2 | Engineering (human devs + parallel AI agents) | Internal | Shapes what ships | — | Observed |
| I3 | Customer success / service team | Internal | Delivers the paid service | — | Inferred |
| I4 | Sales and marketing | Internal | Owns message and pipeline | — | Inferred |

## Buyers and economic decision-makers

Buyers pay for certainty and for a team, not for features; every buyer below measures success in a number they can defend to someone above them.

| Stakeholder | Job to be done | Context | Success looks like |
| --- | --- | --- | --- |
| **B1 Head of Growth / CMO** (mid-market, enterprise) | Decide where the next peso of budget goes, and defend that decision to the CEO and CFO | Runs $50k+/mo across Meta, Google, TikTok; Meta, Google and GA4 each report a different ROAS; an agency or in-house team does execution; LatAm, Spanish-first | One reconciled number the board accepts; budget moved away from channels that only look good in-platform; fewer arguments with finance |
| **B2 Founder / owner** (SMB ecommerce) | Know which ads actually make money without hiring an analyst | Shopify or WooCommerce, founder buys the ads or oversees one freelancer; price-sensitive; wants value in the first session | Blended CAC and net ROAS they trust; self-setup in under an hour; $625/mo pays back in a month |
| **B3 Agency owner / partner** | Retain clients by proving results, and serve more clients per head | 10–50 client accounts, each with its own stack; margins depend on reporting time; clients question platform-reported numbers | Less reporting labor per client; renewals; a differentiator in pitches ("we show you truth, not Meta's version"); margin on reselling Adray |
| **B4 Commercial director, lead-gen** (e.g. universities, B2B, services) | Stop paying for leads that never close; connect marketing volume to sales revenue | Leads arrive via Meta instant forms, landing pages and WhatsApp; the CRM is patchy; marketing and sales blame each other ("340 leads, 12 deals") | Cost per closed deal by campaign; sales accepts marketing's leads as real; faster lead response |
| **B5 Finance / procurement** | Approve spend with low risk and clear terms | Enterprise needs Net 30, invoices, DPA, SSO; USD pricing vs MXN budgets | Predictable cost, a contract that passes review, no surprise overage (30% growth buffer helps) |

**What the buyers do not care about** (Inferred): how the campaign builder mimics Meta's UI, or which LLM routes a request. They buy the reconciled number, the team behind it, and the reduction in risk.

## End users

Operators judge Adray against the native tool they already know (Meta Ads Manager, GA4, the CRM); anything slower, blocked or less trustworthy than native is abandoned, whatever the buyer paid.

| Stakeholder | Job to be done | Context | Success looks like |
| --- | --- | --- | --- |
| **U1 Performance marketer / media buyer / trafficker** | Launch and optimize campaigns fast, with fewer mistakes, and know which ones to scale or kill | Lives in Meta Ads Manager daily; fluent in its UI; juggles several accounts; will not accept a tool that blocks them | Campaign live faster than in Ads Manager; zero rejected creations; confidence in the scale/kill decision |
| **U2 Agency account manager** | Walk into every client call already knowing what changed and why | Many clients, little prep time; answers "why did ROAS drop?" live | Daily Signal per client ready without effort; answers pulled from Claude/ChatGPT in seconds; no manual exports |
| **U3 Marketing analyst / BI** | Produce a trusted, reproducible view of performance | Already has Looker/Sheets/BigQuery habits; distrusts black boxes | Clean, documented, queryable data (MCP, exports); reconciliation logic they can explain; numbers that match finance |
| **U4 Ecommerce / CRO manager** | Find where the store loses money and fix it | Owns the site, checkout, promotions; measured on conversion rate and revenue | Revenue Recovery shows specific leaks with a size in pesos; fixes confirmed by the next week's data |
| **U5 Social / community manager** | Show organic performance and benchmark against competitors | Reports to marketing lead monthly; organic is undervalued internally | Accurate engagement data with history kept; competitor benchmarks in one place; a report the boss reads |
| **U6 Sales team / SDRs** (lead-gen) | Contact the right leads first, fast, with context | Works in CRM and WhatsApp; ignores marketing tools | Hot-lead alerts; lead source visible in the CRM without opening Adray; qualified leads instead of volume |
| **U7 Executive reader of the Signal** | Know in two minutes whether marketing is working | Reads on phone, inside ChatGPT or email; never logs in | A short, correct daily or weekly Signal; clear alerts; one number that did not change meaning since last week |

**Frictions the project docs have measured for U1** (Observed), the stakeholder the Campaign Manager targets:

- On the start screen, manual selection never enables "Continue": the chat is the only way forward (QA finding CM-42). A trafficker who ignores the assistant cannot create anything.
- The first chat message after load is lost every time (CM-46), in the one step that is mandatory.
- The assistant reported lead-form fields as filled when 5 of 8 were not applied (CM-26).
- Chosen destinations were dropped before reaching Meta; the fix prompt was written but not yet run as of 24 Sep.
- Forms default to English even for Mexican brands (CM-27), so the lead sees English copy.

This matters because U1's success criterion is "faster and safer than Ads Manager"; each of these breaks that promise in the first minute.

## Administrators and gatekeepers

Gatekeepers do not create value, but each can stall onboarding or end the account; self-serve only works if every one of them can say yes without a meeting.

| Stakeholder | Job to be done | Context | Success looks like |
| --- | --- | --- | --- |
| **A1 Workspace owner / admin** | Connect sources once, give the right people the right access, and keep it working | Often the buyer or a marketing ops person; handles Meta, Google, GA4, Shopify OAuth; manages execution levels (none/basic/advanced) | Connections stay healthy; an expired token says "expired", not "not connected"; roles are clear; disconnecting one workspace does not affect others |
| **A2 Web developer / IT** | Install tracking without breaking the site or slowing it | Owns GTM, Shopify theme, VTEX/Magento; skeptical of third-party scripts | Pixel installed in two clicks or one script; no performance hit; documentation for the server-side proxy |
| **A3 Security, legal, privacy** | Ensure the vendor does not create legal or platform risk | Enterprise buyers ask for DPA, SSO, data residency, consent handling (LFPDPPP in Mexico, GDPR for global brands) | A signed DPA, encrypted credentials, consent support, clear data deletion; no scraping of third-party personal data |
| **A4 Client's Meta Business / ad account admin** | Grant Adray exactly the access needed, no more | Controls Business Manager roles, Pages, pixels; may sit at the agency or the brand | A clean permission request; nothing published without approval; everything created in PAUSED |

**Where the product currently fails gatekeepers** (Observed, from the 31 Aug risk audit):

- Meta tokens stored in plain text, and a connections endpoint without authentication (SEC-01; still open in the 23 Sep map).
- Scraping via BrightData and yt-dlp to obtain data Meta did not grant; profiling of influencers and their audiences (SCR-01 to SCR-05).
- No consent or data-deletion propagation to Custom Audiences (CAPI-04, CAPI-05).

Any enterprise security review (A3) that finds these ends the deal, and the site's "Multi-Layer Security" claim raises the stakes if it does.

## External and ecosystem stakeholders

Meta is the most powerful stakeholder Adray has: it never pays, but it can switch off the product for every customer at once.

| Stakeholder | What they want from Adray | Context | Success, from their side |
| --- | --- | --- | --- |
| **E1a Meta** | Apps that use granted permissions only, respect rate limits, and pass App Review | Adray's app is in Development mode; `pages_manage_posts` and cover-photo upload need Advanced Access; `pages_read_user_content` was rejected | Compliant use; no scraping to route around denied permissions (audit verdict: suspension risk HIGH) |
| **E1b Google, Shopify, WooCommerce, VTEX** | Stable, well-behaved integrations; for Shopify, a listed app | Shopify is the main native connector; VTEX/Magento are enterprise-only | Low support load; app store compliance |
| **E1c Mercado Libre** | A KYC-validated integrator | Blocked since 31 Jul 2026: Adray, Inc. has no Mexican RFC | A validated entity; until then clients like Juguetrón cannot connect their marketplace sales |
| **E2 AI platforms** (Anthropic, OpenAI, Google) | Good MCP and GPT integrations that make their assistants more useful | Adray's "portable everywhere" pitch rides on them | Adray becomes a go-to marketing data source inside their assistants |
| **E3 Clients' customers and leads** | A form in their language; their data handled lawfully | Mexican leads currently see English defaults; lead forms are "Open" sharing by default in Adray versus "Restricted" in Meta | Correct language, privacy respected, consent honored |
| **E4 Tracked competitors and creators** | Not to be profiled without consent | Competitor intelligence scores people and their audiences; Meta Platform Terms 3.a prohibit this | Public, aggregate benchmarks only |

E1a and E4 are the two "Conflict" rows in the landscape table. Both come from the same feature family (social and competitor intelligence), which is also the least connected to the core attribution promise.

## Internal teams

The service layer is already what customers pay for, but internally it has no named owner, no capacity model and no separate price, so it is the most exposed internal stakeholder.

| Team | Job to be done | Context | Success looks like |
| --- | --- | --- | --- |
| **I1 Leadership and product** (founders, product owner) | Pick a market Adray can win and point the roadmap at it | Many parallel threads: attribution, Campaign Manager, organic dashboards, Mark rename, Mercado Libre, compliance | A clear ICP; roadmap items traceable to that ICP's job; fewer open fronts at once |
| **I2 Engineering** (human developers + several AI coding agents in parallel) | Ship reliably without collisions | Parallel branches on the same files (e.g. two competing Mark renames, 72 files); staging-only fixes; no runnable test suite on the lead's machine | Fewer concurrent scopes; clear ownership per module; features that reach production, not only staging |
| **I3 Customer success / service team** | Deliver onboarding, a WhatsApp/Slack line, one custom AI workflow per client per month, and a monthly review | Every Core customer gets all four; cost scales linearly with customers | Repeatable playbooks; workflows reused across clients; time per client known and priced |
| **I4 Sales and marketing** | Generate pipeline with a message that matches the product | Site mixes "enterprise, talk to sales" with "30-second self-serve"; separate stories for ecommerce, lead-gen, agencies; Spanish and English | One lead story per segment; demo shows the thing the segment buys; pricing that does not need a call to explain |

**The service math** (Assumed, to verify): if one custom workflow plus one review plus chat support costs about 6 hours per client per month, 50 clients need roughly 1.9 full-time people just to keep the promise. At $625/mo, that is a large share of revenue going to delivery that is not visible as a line item.

## Where the value lands

Reconciled attribution delivered as a Signal is the only capability that every buyer values; Campaign Manager and organic dashboards serve users who do not sign, and carry the most platform risk.

Rating per cell: **High** = core to that stakeholder's job, **Med** = useful, blank = little or no value. Last two columns say whether the capability works self-serve and whether it needs the service team.

| Capability | B1 Growth lead | B2 Founder | B3 Agency | B4 Lead-gen | U1 Media buyer | U7 Exec | Self-serve? | Needs service? |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Reconciled attribution (net ROAS, blended CAC) | High | High | High | Med | Med | High | Yes, after connect | Interpretation |
| Daily Signal + MCP / GPT | High | Med | High | Med |  | High | Yes | No |
| Adray pixel / server-side CAPI | Med | Med | Med | Med | Med |  | Partly (GTM) | Enterprise stacks |
| Revenue Recovery / CRO agent | Med | High | Med |  |  | Med | Partly | Yes, to act on it |
| Ad-to-CRM + WhatsApp attribution |  |  | Med | High |  | Med | No | Yes, setup |
| Creative-matched landing pages |  | Med | Med | High | Med |  | No | Yes |
| Mark (chat that reads and executes) | Med | Med | Med |  | High |  | Yes | No |
| Campaign Manager + lead-form creator |  | Med | Med | Med | High |  | Yes, if unblocked | No |
| Paid dashboards | Med | Med | Med | Med | Med |  | Yes | No |
| Organic + competitor intelligence |  |  | Med |  |  |  | Yes | No |
| Monthly custom AI workflow + expert review | High | Med | Med | High |  | Med | No | It is the service |

**Reading the matrix:**

1. The self-serve core is small and clear: connect, reconcile, get a Signal in your AI. It needs no humans and is valued by every buyer.
2. The service layer is what makes lead-gen and enterprise work: CRM, WhatsApp, landing pages, and acting on Revenue Recovery all need setup or interpretation.
3. Campaign Manager and Mark are an execution product for U1. That is a different buyer conversation ("replace my Ads Manager workflow") than the one the site sells ("trust your numbers").
4. Organic and competitor intelligence scores lowest on buyer value and highest on platform risk (E1a, E4).

## Implications: focus, UX, messaging, pricing

Recommendation: make the primary buyer the **marketing lead at a mid-market LatAm brand or lead-gen business (B1/B4)**, sell them reconciled truth plus a team, and treat agencies (B3) as the scaled self-serve channel.

**Why this audience** (Inferred): every current logo fits it; the bundled service layer only pays off at their spend level; they feel the Meta-vs-Google-vs-store disagreement most; and the lead-gen page already tells the sharpest story ("340 leads, 12 deals"). B2 founders are a weaker fit: they want pure self-serve at a lower price, and $625/mo plus human service is hard to justify below roughly $15–20k/mo of ad spend (Assumed).

### Focus

- Name one job as the product's spine: *"Know which campaigns make money, in the AI you already use."* Everything else is either an input to that answer or an action taken on it.
- Treat Campaign Manager and Mark execution as the action layer for U1, sold later as an add-on or advanced tier, not as the headline. Decide explicitly whether it stays core; today it absorbs most engineering while being invisible in public copy.
- Pause or restrict organic competitor profiling until it is compliant; it is low buyer value and high platform risk.
- Close the gatekeeper blockers (token encryption, auth on connections, scraping) before scaling sales; one failed security review or Meta action costs more than any feature.

### UX

- Design two front doors: a **self-serve** path (connect, first reconciled number, Signal in Claude/ChatGPT within the hour) and a **managed** path (onboarding call, CRM/WhatsApp setup, monthly review) visible as the service in-product.
- Never make the assistant the only road: manual selection must work (CM-42). U1 abandons tools that force a chat.
- Build the admin experience for A1: honest connection states, role clarity, workspace isolation.
- Make the Signal the home screen for U7 and B1, not the dashboard; the dashboard is for U3 and U4.

### Messaging

| Segment | Lead message | Proof point |
| --- | --- | --- |
| B1 mid-market / enterprise ecommerce | One number your CFO accepts: ROAS on net revenue, reconciled across Meta, Google and your store | Truth Table vs platform-reported ROAS |
| B4 lead-gen | Pay for deals, not leads: every click traced to the CRM and WhatsApp | Cost per closed deal by campaign |
| B3 agencies | Every client's reconciled numbers in your AI, before the call | Signal per client, unlimited workspaces |

Resolve the contradictions listed in section 2: "no new dashboard" vs a large dashboard; "enterprise, talk to sales" vs "30 seconds"; 8 seats vs unlimited seats; VTEX/Magento supported vs Enterprise-only.

### Pricing

- **Unbundle the service from the software** so each can be sold to the stakeholder who values it: a self-serve software tier (connect, reconcile, Signal, MCP, dashboards) and a managed tier that adds the WhatsApp/Slack line, monthly workflow and review.
- Illustrative shape, to be tested (Assumed): Self-serve ~ $250–350/mo; Core managed at today's $625/$750; Enterprise custom; Agency priced per client workspace with a portfolio discount.
- Keep sessions as the value metric for software; price service by hours or deliverables so I3's cost is covered as customers grow.
- Offer execution (Campaign Manager, Mark with write access) as a paid add-on once it is stable and compliant with Meta access tiers.

## Open questions and how to validate

The fastest way to confirm or kill this map is 12–15 interviews across four roles plus usage data you already have.

**Interviews** (30 minutes each):

- [ ] 4 buyers from current clients (B1/B4: e.g. LG, UVM, Juguetrón, Harris & Frank). Ask: why did you buy, what would make you cancel, which part would you pay for alone.
- [ ] 3 hands-on users at those clients (U1, U3). Ask: what do you open weekly, what do you still do in Ads Manager or GA4, what do you not trust.
- [ ] 3 agency owners (B3), including one lost prospect. Ask: how you'd resell it, what per-client price works.
- [ ] 2 lost deals or churned accounts. Ask: what was missing, who said no.
- [ ] 1–2 security/procurement contacts at enterprise prospects (A3, B5). Ask: what your review requires.

**Data to pull:**

- [ ] Weekly active users by module (Attribution, Signal/MCP, Mark, Campaign Manager, organic) and by role.
- [ ] Share of accounts where the Signal or MCP is opened weekly vs the dashboard.
- [ ] Service hours per client per month (onboarding, workflows, reviews, chat).
- [ ] Ad spend and sessions per current client, to size the ICP threshold.
- [ ] Win/loss reasons and sales-cycle length by segment.

**Questions only leadership can answer:**

1. Is Campaign Manager a core product or an add-on? It decides where U1 sits in the map.
2. Is the service layer the moat, or a cost to shrink through automation?
3. Is Adray a LatAm-first company, or is the US market a near-term target? It changes messaging language and pricing currency.
4. Who owns customer success today, and how many clients can they carry?

**Sources**

- [adray.ai home page](https://adray.ai/), [Adray for agencies](https://adray.ai/agencies/), [Adray Core for lead generation](https://adray.ai/core/leads/), read 30 Sep 2026.
- Project docs: Meta risk audit (31 Aug), Signal Console map (8 Sep), Campaign Manager handoff (24 Sep), QA handoff CM-26 to CM-47 (25 Sep), organic/paid dashboards map (23 Sep), Mercado Libre handoff (21 Sep), Mark rename map (24 Sep).
