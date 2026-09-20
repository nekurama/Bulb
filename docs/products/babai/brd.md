---
status: partial
owner: BABAI Product / BRD
last-reviewed: 2026-09-20
sources:
  - nekurama.raw.chat.json
  - nekurama.chatgpt.md
  - nekurama.babai.research.md
---

# BABAI Product BRD

This is the product/BRD index for current durable truth. It reconciles the founder discussion with field research without turning suggestions, historical experiments or assistant recommendations into decisions. Product history remains in the source exports and issue records.

## Status vocabulary

- **confirmed** — explicit founder direction is stable enough to guide the current product boundary.
- **partial** — the direction is clear, but operational detail, thresholds or evidence are incomplete.
- **unknown** — the dimension is named but no reliable decision is present.
- **challenge-required** — existing direction needs a deliberate battle or external validation before it becomes durable truth.

## Confirmed product truth

### Identity, buyer and wedge — confirmed

BABAI is a business operating platform built around WhatsApp. It helps businesses run customer and operational workflows through AI and automation. The current promise is **“Run your business without leaving WhatsApp,”** and the supporting thesis is **“Turn customer conversations into business operations.”** “Without leaving WhatsApp” is a promise about the primary operating surface, not a prohibition on web. [Evidence: `nekurama.raw.chat.json:L13591-L13630`, `nekurama.raw.chat.json:L47145-L47170`, `nekurama.raw.chat.json:L49709-L49730`; corroboration: `nekurama.chatgpt.md:L40716-L40825`, `nekurama.chatgpt.md:L42026-L42050`]

BABAI is B2B SaaS: the restaurant/business is the customer and economic buyer; owner/operator is the primary buyer, managers are likely champions, staff are daily operators, and the end customer participates in the workflow. Restaurants are the first wedge, not a permanent category boundary. The initial ICP is small-to-medium, WhatsApp-heavy, direct-relationship restaurants with enough operational pain that manual conversation handling is costly. [Evidence: `nekurama.chatgpt.md:L40500-L40520`, `nekurama.chatgpt.md:L42146-L42232`; corroboration: `nekurama.babai.research.md:L91-L102`, `nekurama.babai.research.md:L178-L186`]

The business normally retains its own WhatsApp identity and customer relationship. BABAI is the operating layer, not a consumer marketplace, POS/ERP replacement, generic API wrapper or merely an AI chatbot. [Evidence: `nekurama.raw.chat.json:L21506-L21540`, `nekurama.raw.chat.json:L48598-L48630`; corroboration: `nekurama.babai.research.md:L42-L63`, `nekurama.chatgpt.md:L38650-L38994`]

### MVP / pilot boundary — confirmed, with validation detail partial

The smallest real pilot flow is:

`Connect business WhatsApp → upload/review/publish menu → customer asks questions → pickup order → business accepts/rejects → payment recorded/confirmed → staff completes order → customer receives status`

The initial operational boundary is one business, one WhatsApp number, one branch, pickup-first, manual human takeover and no delivery dependency. AI may assist with extraction, understanding and suggestions; publication and controlled business state require review/validated transitions. [Evidence: `nekurama.babai.research.md:L118-L143`; corroboration: `nekurama.chatgpt.md:L6233-L6446`, `nekurama.chatgpt.md:L27072-L27263`]

The broad validation gate is the first 10 restaurants. The immediate conversion proof is narrower: select three businesses from the 19 interviews, achieve three active pilots and at least one paying customer. The 10-restaurant gate should not be read as proof that all ten must be live before learning or iteration begins. [Evidence: `nekurama.raw.chat.json:L79770-L79820`; `nekurama.babai.research.md:L118-L163`, `nekurama.babai.research.md:L178-L186`]

### Money, payment and fulfillment boundaries — confirmed

Customer money should flow directly to the business; BABAI subscription billing is separate. BABAI should not hold or settle customer funds in the initial product. Payment state is separate from order state, and payment completion does not automatically mean the restaurant accepted the order. Pickup is first; fulfillment remains provider-agnostic so delivery can be added later without making it a pilot dependency. [Evidence: `nekurama.raw.chat.json:L192-L205`, `nekurama.babai.research.md:L56-L63`, `nekurama.chatgpt.md:L8195-L8315`]

### Channel and human boundaries — confirmed

WhatsApp is the primary conversational/action surface for customer and staff attention. Web is for dense setup, menu correction, many-order visibility, comparison, bulk actions, analytics, recovery and multi-branch administration. Onboarding may use either channel and should be progressive, resumable and recoverable; it should not create a separate identity or make the restaurant restart after an integration failure. Human takeover is first-class and pauses conversational automation without stopping order/payment/fulfillment processing. [Evidence: `nekurama.raw.chat.json:L47145-L47170`, `nekurama.raw.chat.json:L79770-L79820`; corroboration: `nekurama.chatgpt.md:L23631-L23656`, `nekurama.chatgpt.md:L27963-L28378`]

## Reconciled product decisions

| Dimension | Current status | Durable answer |
|---|---|---|
| Product identity | **confirmed** | Business operating platform built around WhatsApp; AI/automation are enabling mechanisms. |
| Buyer / ICP | **confirmed** | B2B restaurant/business buyer; initial fit is WhatsApp-heavy direct-relationship restaurants with operational pain. |
| First workflow | **confirmed** | Menu/catalog → conversation → pickup order → restaurant decision → payment record/confirmation → completion → status. |
| Pilot cohort | **partial** | 10 restaurants is the broad gate; three active pilots plus one payer is the immediate proof target. |
| Dashboard boundary | **partial** | WhatsApp remains first-class; web handles density and recovery. Exact MVP screens and entitlements remain open. |
| Onboarding | **partial** | Progressive and resumable; exact Meta handoff, Admin tooling, retention and web information architecture remain open. |
| Pricing / packaging | **challenge-required** | ₹999 / ₹2,499 / ₹4,999 + GST is a starting hypothesis only; final plans, limits and paid-pilot terms require evidence. |
| Payment verification | **challenge-required** | Direct merchant payment is preferred; gateway/webhook and manual confirmation behavior require pilot testing. |
| Delivery | **unknown for MVP** | Provider-agnostic delivery is a later capability; no delivery integration is required to prove pickup-first MVP. |
| ROI / success thresholds | **partial** | Measure activation, orders, successful fulfillment, staff adoption, repeat use, economics and willingness to pay; numeric thresholds are not set. |
| Competitive moat | **challenge-required** | Operating layer around the business-owned relationship is the differentiation thesis, not a proven moat. |
| Post-pilot roadmap | **unknown** | Expand only from pilot evidence; no permanent vertical, delivery or broad platform roadmap is locked here. |

The distinction between **confirmed** and **partial** reconciles stale/thin placeholders in the dimension files: the principles are not being reopened, but the implementation cut and evidence thresholds are not being promoted to decisions without proof. [Evidence: `nekurama.chatgpt.md:L27963-L28378`, `nekurama.chatgpt.md:L27598-L27598`, `nekurama.babai.research.md:L104-L116`]

## Product knowledge-gap inventory

| Gap | Status | Required evidence before closure |
|---|---|---|
| Exact pilot feature cut and launch blockers | **partial** | Run the narrow flow with real restaurants; document what must be production-safe versus manual. |
| Customer and staff journeys, including exceptions | **partial** | Observe real order, correction, cancellation, refund, missed-message and takeover cases. |
| Dashboard MVP and tier entitlements | **partial** | Test whether density, bulk operations and recovery justify web scope; do not infer from feature lists. |
| Meta onboarding/coexistence reliability | **challenge-required** | Real approved-channel onboarding and recovery tests; no current export proves reliability. |
| Payment verification, refunds and reconciliation | **challenge-required** | Test gateway webhook and manual-payment paths with a pilot merchant; screenshots/claims are not authoritative payment proof. |
| Pricing, onboarding fee and paid continuation | **challenge-required** | Paid pilot or deposit evidence; research explicitly says interest is not willingness to pay. |
| Pilot instrumentation and numeric success/kill thresholds | **partial** | Baselines plus event instrumentation for activation, conversion, staff time, errors, repeat use, support and gross contribution. |
| Delivery and multilingual staff workflows | **unknown/challenge-required** | Defer delivery dependency; test only when evidence requires it, including language and provider failure cases. |
| Competitive proof / moat | **challenge-required** | Workflow-level competitor comparison and evidence of retention/switching value, not feature-count comparison. |
| Expansion gates beyond restaurants | **unknown** | Define quantitative evidence after the restaurant/pickup workflow is proven. |

The field research is intentionally not upgraded: it reports strong interest and a real problem, but explicitly does not prove payment, continued use, automated trust, Meta onboarding, refunds, delivery or multilingual workflows. [Evidence: `nekurama.babai.research.md:L104-L116`, `nekurama.babai.research.md:L145-L163`]

## Historical context retained

Early discussions used Dawat and proposed Tadka/Thali/Dawat tiers, low pilot pricing and broader delivery ambitions. Those are preserved as history in the exports; they are not current product truth. Current pricing is only the ₹999 / ₹2,499 / ₹4,999 + GST hypothesis, and current MVP proof is pickup-first. [Evidence: `nekurama.raw.chat.json:L192-L205`; corroboration: `nekurama.chatgpt.md:L2432-L2685`, `nekurama.chatgpt.md:L27598-L27598`]

## Related files

- `thesis-and-positioning.md` — identity, buyer, positioning and differentiation thesis
- `product-definition.md` — MVP boundary and initial pilot workflow
- `customer-market.md` — ICP and market evidence
- `experience-and-channels.md` — WhatsApp/web and onboarding principles
- `business-model.md` — subscription and unit-economics hypotheses
- `validation.md` — pilot evidence and measurement
