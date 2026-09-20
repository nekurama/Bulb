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

## Raw conversation anchor convention

The primary founder source is `nekurama.raw.chat.json`, whose conversation title
is **Startup Benefits Recheck**. Line ranges in the files are useful export
locations, but the more durable discussion anchors are the chronological
message index, the stable mapping node ID and the nearest explicit section
heading. Key anchors for this BRD are:

| Product intent | Conversation section and message/node anchor |
|---|---|
| Identity and buyer | `Battle 1.2 — BABAI in one sentence`, messages 647–652; buyer correction node `bbb21914-7687-4f6e-848a-30e1e7e850f8`, accepted wording node `bbb21eb2-e878-4ef3-a499-f81e1cdc2d83` |
| Promise and thesis | `Battle 1.3 — BABAI's Core Promise`, messages 654–658; final promise node `d76bcb18-7149-4225-b3d5-cb4d3c03d4f0` |
| Restaurant wedge / marketplace boundary | messages 552–557; founder direction node `bbb219ab-0e1e-4617-bbd9-b6b930e06e93` |
| ICP and problem | `Battle 1.4 — Target Customer`, messages 674–678; ICP node `80d3b357-07bb-46da-87a8-1171a7744a5f` |
| Personas and channel surfaces | `Battle 1.5 — Primary Users & Personas`, messages 682–684; persona model node `44d1fcec-99bf-4882-9f0f-bfa7acda49d7` |
| Pilot/flow inventory | flow inventory message 335; pilot and threshold evidence is also recorded in `nekurama/Bulb#3` and `nekurama.babai.research.md` |
| Pricing direction | pricing battle message 445, node `26a13805-2db3-4536-9d60-49cd653654ef` |

Assistant recommendations in the raw conversation are not treated as founder
decisions unless the current issue sources, later explicit direction or field
evidence supports them.

## Confirmed product truth

### Identity, buyer and wedge — confirmed

BABAI is a business operating platform built around WhatsApp. It helps businesses run customer and operational workflows through AI and automation. The current promise is **“Run your business without leaving WhatsApp,”** and the supporting thesis is **“Turn customer conversations into business operations.”** “Without leaving WhatsApp” is a promise about the primary operating surface, not a prohibition on web. [Evidence: `nekurama.raw.chat.json:L13591-L13630`, `nekurama.raw.chat.json:L47145-L47170`, `nekurama.raw.chat.json:L49709-L49730`; corroboration: `nekurama.chatgpt.md:L40716-L40825`, `nekurama.chatgpt.md:L42026-L42050`]

BABAI is B2B SaaS: the restaurant/business is the customer and economic buyer; owner/operator is the primary buyer, managers are likely champions, staff are daily operators, and the end customer participates in the workflow. Restaurants are the first wedge, not a permanent category boundary. The initial ICP is small-to-medium, WhatsApp-heavy, direct-relationship restaurants with enough operational pain that manual conversation handling is costly. [Evidence: `nekurama.chatgpt.md:L40500-L40520`, `nekurama.chatgpt.md:L42146-L42232`; corroboration: `nekurama.babai.research.md:L91-L102`, `nekurama.babai.research.md:L178-L186`]

The business normally retains its own WhatsApp identity and customer relationship. BABAI is the operating layer, not a consumer marketplace, POS/ERP replacement, generic API wrapper or merely an AI chatbot. [Evidence: `nekurama.raw.chat.json:L21506-L21540`, `nekurama.raw.chat.json:L48598-L48630`; corroboration: `nekurama.babai.research.md:L42-L63`, `nekurama.chatgpt.md:L38650-L38994`]

### MVP / pilot boundary — confirmed, with validation detail partial

The smallest real pilot flow is:

`Connect business WhatsApp → upload/review/publish menu → customer asks questions → pickup order → business accepts/rejects → payment recorded/confirmed → staff completes order → customer receives status`

The initial operational boundary is one business, one WhatsApp number, one branch, pickup-first, manual human takeover and no delivery dependency. AI may assist with extraction, understanding and suggestions; publication and controlled business state require review/validated transitions. [Evidence: `nekurama.babai.research.md:L118-L143`; corroboration: `nekurama.chatgpt.md:L6233-L6446`, `nekurama.chatgpt.md:L27072-L27263`]

#### Reconciled pilot sequence — partial

The pilot is a staged operating and evidence sequence, not one simultaneous launch target:

1. **Stage 0 — one-business operational pilot:** prove the narrow pickup-first flow with one business, one WhatsApp number, one branch, manual takeover and no delivery dependency.
2. **Stage 1 — up to three pilots and at least one payer:** expand only after the Stage 0 flow is operational, using the interviewed businesses to test repeatability and willingness to pay.
3. **Stage 2 — controlled 10-restaurant beta:** use a bounded ten-restaurant cohort to test whether the validated operating model can be repeated with controlled support and instrumentation.

Stage 0 is a confirmed operating boundary. Stage 1 and Stage 2 are the current sequencing decision, while entry/exit criteria, support capacity, numeric success/kill thresholds and post-beta continuation remain partial or unknown. The 10-restaurant beta is not a requirement to wait before learning in Stage 0 or Stage 1. [Evidence: `nekurama.raw.chat.json:L79721-L79820`; corroboration: `nekurama.babai.research.md:L118-L163`, `nekurama.babai.research.md:L176-L186`]

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
| Pilot sequence | **partial** | Stage 0 is one business; Stage 1 is up to three pilots and at least one payer; Stage 2 is a controlled 10-restaurant beta. Exact stage gates and numeric success/kill thresholds remain open. |
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
| Exact pilot feature cut and launch blockers | **partial** | Run Stage 0, then Stage 1, and document what must be production-safe versus manual before Stage 2. |
| Customer and staff journeys, including exceptions | **partial** | Observe real order, correction, cancellation, refund, missed-message and takeover cases. |
| Dashboard MVP and tier entitlements | **partial** | Test whether density, bulk operations and recovery justify web scope; do not infer from feature lists. |
| Meta onboarding/coexistence reliability | **challenge-required** | Real approved-channel onboarding and recovery tests; no current export proves reliability. |
| Payment verification, refunds and reconciliation | **challenge-required** | Test gateway webhook and manual-payment paths with a pilot merchant; screenshots/claims are not authoritative payment proof. |
| Pricing, onboarding fee and paid continuation | **challenge-required** | Paid pilot or deposit evidence; research explicitly says interest is not willingness to pay. |
| Pilot instrumentation and numeric success/kill thresholds | **partial** | Instrument Stage 0 before expanding; compare activation, conversion, staff time, errors, repeat use, support and gross contribution across stages. Numeric thresholds are not set. |
| Delivery and multilingual staff workflows | **unknown/challenge-required** | Defer delivery dependency; test only when evidence requires it, including language and provider failure cases. |
| Competitive proof / moat | **challenge-required** | Workflow-level competitor comparison and evidence of retention/switching value, not feature-count comparison. |
| Expansion gates beyond restaurants | **unknown** | Define quantitative evidence after the restaurant/pickup workflow is proven. |

The field research is intentionally not upgraded: it reports strong interest and a real problem, but explicitly does not prove payment, continued use, automated trust, Meta onboarding, refunds, delivery or multilingual workflows. [Evidence: `nekurama.babai.research.md:L104-L116`, `nekurama.babai.research.md:L145-L163`]

## Thin/placeholder file disposition

| File | Status and disposition |
|---|---|
| `customer-market.md` | Previously question-heavy; now retains an evidence-backed ICP and market answer, with segmentation, switching and expansion gates still partial/unknown. |
| `experience-and-channels.md` | Previously thin; now records the confirmed WhatsApp/web principle, onboarding and takeover direction, with detailed UX still partial. |
| `business-model.md` | Retained as a partial subscription/pricing hypothesis; no unsupported unit economics were promoted. |
| `validation.md` | Retained as a partial pilot gate and measurement file; numeric success/kill and paid-continuation thresholds remain open. |
| `product-definition.md` | Retained as the current MVP boundary; production cut, edge cases and post-pilot scope remain partial. |
| `thesis-and-positioning.md` | Retained as current positioning; differentiation is explicitly a thesis, not a proven moat, and legal clearance remains separate. |
| `domain-model.md` | Reviewed but not changed in this pass; it is a substantial domain artifact with its own remaining battles. |
| `architecture.md` and `architecture-lld.md` | Reviewed but not changed; architecture work is outside this product-intent pass and existing working-tree changes were left untouched. |
| `README.md` | Retained as the product index; this BRD is the evidence/status register it points to. |

Company docs, landing-page material, secrets, deployment state and unrelated
working-tree files were not part of this pass.

## Historical context retained

Early discussions used Dawat and proposed Tadka/Thali/Dawat tiers, low pilot pricing and broader delivery ambitions. Those are preserved as history in the exports; they are not current product truth. Current pricing is only the ₹999 / ₹2,499 / ₹4,999 + GST hypothesis, and current MVP proof is the staged, pickup-first sequence above. [Evidence: `nekurama.raw.chat.json:L192-L205`; corroboration: `nekurama.chatgpt.md:L2432-L2685`, `nekurama.chatgpt.md:L27598-L27598`]

## Related files

- `thesis-and-positioning.md` — identity, buyer, positioning and differentiation thesis
- `product-definition.md` — MVP boundary and initial pilot workflow
- `customer-market.md` — ICP and market evidence
- `experience-and-channels.md` — WhatsApp/web and onboarding principles
- `business-model.md` — subscription and unit-economics hypotheses
- `validation.md` — pilot evidence and measurement
