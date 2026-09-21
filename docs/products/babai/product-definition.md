---
status: partial
owner: BABAI
last-reviewed: 2026-09-21
sources:
  - nekurama/Bulb#1
  - nekurama/Bulb#3
  - nekurama.babai.research.md
  - historical ManojVysyaraju/bulb#1
  - nekurama.raw.chat.json (ordered turns 71, 278, 290; mappings `4bbdb489-0a0d-45d5-af27-70535c5d4acc`, `04cc446b-3a6d-4c19-adc7-4d94ab17d21b`, `4702681b-d611-4408-af5f-9001d04b6cfa`)
  - Founder decision packet (2026-09-21; current task input)
  - Tier scope decision (2026-09-21; current task input)
---

# Product Definition

## Current answer

**BABAI is a business operating platform built around WhatsApp.** For the initial product, it is a restaurant-first operating layer that turns customer conversations into orders and coordinated restaurant work while keeping the customer relationship with the business.

Core product flow:

`Business WhatsApp → Customer Conversation → Catalog/Menu → Order → Payment → Restaurant Operations → Fulfillment → Completion → Feedback / Repeat`

The product is **WhatsApp-first, not WhatsApp-only**:

- **WhatsApp** is the primary conversational/action surface for customers and staff.
- **Web** is the surface for dense configuration, high-density operations, comparison, bulk actions, analytics, recovery and multi-branch administration.
- Context and identity should move between WhatsApp and web without creating a second account or losing context.

This follows the operating principle:

> **Web = see everything. WhatsApp = know what needs attention and act immediately.**

## MVP boundary

The initial MVP is intentionally thin and narrower than the long-term business operating platform: restaurant-first, pickup-first and WhatsApp-native, with delivery and additional verticals kept as extensible later boundaries rather than pilot dependencies.

### In scope

1. **Business / channel setup**
   - Connect the restaurant's business-owned WhatsApp identity.
   - Use the planned Meta-native connection path; a BSP/provider adapter may be used where required, but onboarding/coexistence reliability is still a pilot validation item.
   - Establish one restaurant/tenant, one branch and one WhatsApp channel per participating restaurant for the initial pilot.

2. **Catalog / menu**
   - Upload, review and publish a restaurant menu/catalog.
   - Maintain explicit published menu state and availability.
   - Preserve the menu context used by an order.

3. **Customer conversation**
   - Receive customer conversations on the business's WhatsApp.
   - Answer routine customer questions using the catalog/menu context.
   - Recognize the customer/business relationship where available.
   - Allow human takeover when automation cannot or should not complete the interaction.

4. **Ordering**
   - Convert conversational intent into a structured cart/order.
   - Confirm the order with the customer.
   - Support restaurant accept/reject and operational order states.
   - Keep order state authoritative and deterministic rather than AI-controlled.

5. **Payment**
   - Support payment initiation/recording through supported flows.
   - Customer funds go directly to the restaurant/business; BABAI does not hold or settle customer funds in the initial product.
   - Payment remains a separate state machine from the order.

6. **Restaurant operations**
   - Surface actionable incoming orders to staff.
   - Support accept/reject, preparation/ready/completion progression and relevant exceptions.
   - Support staff roles/permissions and scoped actions.
   - Allow staff to take over a conversation without stopping the underlying order/payment/fulfillment processing.

7. **Initial fulfillment**
   - **Pickup-first** is the first validated workflow.
   - Provider-agnostic fulfillment remains the product abstraction so delivery can be added where useful.
   - The initial pilot should not depend on a delivery integration.

8. **Customer communication**
   - Send transactional/order-status communication through the business's WhatsApp where supported.
   - Keep transactional/support/marketing messaging conceptually separate.

## LITE / BASE / PRO capability matrix — provisional

This matrix is a tier-scope experiment for the paid pilot. It is not a final
entitlement contract or public price decision. AI remains advisory and bounded
in every tier; deterministic services and authorized humans own payment,
order, availability, fulfillment, permissions and other controlled state.

| Capability | LITE | BASE | PRO |
|---|---|---|---|
| Product promise | Menu display and ordering only; limited AI/conversational assistance | Select, order, pay and delivery where the provider flow is enabled | Full bounded access across menu, order, payment, delivery and allowed conversational tasks |
| AI/conversational scope | Limited menu assistance and order capture; does not imply operations automation | AI limited to menu, order, payment and delivery tasks | Broader bounded conversational tasks plus advanced API integrations; never unrestricted AI authority |
| Payment | **Out of scope** | Included where direct restaurant settlement is validated | Included where direct restaurant settlement is validated |
| Delivery | **Out of scope** | Included where a validated provider flow exists; pickup remains valid | Included where validated, with advanced integration options |
| Availability | **Out of scope**; no daily availability automation | Enable/disable item availability through menu/cart controls | Full BASE availability controls plus approved integrations |
| Promotions and combos | **Out of scope** | Basic promotions/combos: maximum 3 requests/day, each active for one day or a limited time | Advanced bounded promotion/combination workflows subject to policy and entitlement limits |
| Menu updates | Maximum 3 menu updates/month | Higher limits require measurement and entitlement approval | Higher limits and advanced API-assisted updates require measurement and approval |
| Operations automation | **Do not imply operations automation** | Limited workflow automation within the listed domains | Broader workflow support, still policy-controlled and human-overridable |
| Human takeover | Available and first-class | Available and first-class | Available and first-class; required for ambiguity and controlled actions |

LITE must not be marketed as a business-operations automation tier. BASE
payment/delivery and PRO integrations remain provider-validation items. No tier
grants AI authority over payment, order state, refunds, permissions, consent
or other deterministic business state.

## Initial pilot workflow

The initial real-world validation is a **fixed 90-day paid pilot**, not a free
trial. It begins with one business and may expand gradually toward up to 10
restaurants only when evidence supports the next increment. Cancellation,
refund and minimum-paying terms must be tied to a signed agreement template;
legal wording and exact terms remain open. The pilot closes at the 90-day
readiness review when team-defined evidence shows BABAI is operationally ready
for materially larger onboarding volumes. Readiness evidence is defined in
`validation.md`; there is no automatic extension or pricing increase decision.

`Connect business WhatsApp`
`→ upload/review/publish menu`
`→ customer asks questions`
`→ customer places pickup order`
`→ business accepts/rejects`
`→ payment is recorded/confirmed`
`→ staff completes order`
`→ customer receives status`

Immediate pilot operating boundary:

- one selected business at a time, beginning with the research cohort
- one WhatsApp number/channel per restaurant
- one branch per restaurant for the initial pilot
- pickup-first
- manual human takeover available
- no delivery dependency
- founder-led onboarding
- paid pilot terms
- fixed 90-day term
- signed-agreement cancellation/refund and minimum-paying-term placeholders

Controlled-beta boundary after the first pilot:

- grow gradually toward up to 10 restaurants only after operational evidence supports the next increment
- retain one branch and pickup-first constraints unless evidence requires a change
- continue founder-led observation and progressive onboarding

The fixed 90-day paid pilot and readiness-gated gradual onboarding toward up to
10 restaurants are current validation decisions. They are not fixed product
limits. Additional branches, delivery, stores or other verticals require
evidence from real-world usage.

## Explicit pilot out of scope

The following are not required to prove the initial product thesis and should not expand the first pilot unnecessarily:

- Consumer marketplace/discovery network
- Customer native app
- POS replacement
- Full ERP
- Full restaurant inventory-management suite
- Fleet management / owning a delivery network
- Advanced loyalty programme
- Sophisticated marketing automation
- Advanced BI/data warehouse product
- Broad multi-country complexity
- ONDC integration as an MVP workstream
- General-purpose AI assistant outside the business workflow

This does not permanently prohibit these capabilities. It keeps the first validation focused on the core workflow and business value.

## Product boundaries / non-negotiables

### Business relationship

The customer normally interacts with the **business's own WhatsApp identity**. The business owns the customer relationship; BABAI supplies the operating layer.

### AI boundary

AI may assist with understanding, answering, extraction, recommendations, summarization and suggested actions. AI is not authoritative for payment state, permissions, order state, refunds, consent or other controlled business state.

### Human boundary

Automation is not intended to eliminate staff. Human takeover is a first-class path. The conversation can move between automated and human handling while order/payment/fulfillment state continues independently.

### Payment boundary

Customer-to-business money flow is preferred. BABAI subscription billing is separate from customer order payment. BABAI should not become the merchant-of-record or customer-funds custodian for the initial product.

### Integration boundary

BABAI should integrate with existing business infrastructure where appropriate rather than define itself as a POS/ERP replacement.

## What the field research changes

The September 2026 field research covers 19 businesses: 15 restaurants and 4 stores. It reports strong interest in direct customer relationships, dissatisfaction with aggregator economics, existing WhatsApp ordering behavior and difficulty managing conversations. It also reports positive reaction to a proposition centered on the business's own WhatsApp, direct payment, no marketplace commission and no customer app installation.

The research supports the problem and initial workflow, but explicitly does **not** yet prove willingness to pay, sustained usage, operational trust, Meta onboarding reliability, payment verification, refunds, delivery or multilingual staff workflows. Therefore the product definition is **committed for the narrow MVP boundary but partial for production breadth and commercial proof**.

## Evidence and decision status

- **Confirmed:** restaurant-first, one branch/number for the first pilot, pickup-first, human takeover, no delivery dependency, direct customer-to-business payment, no customer app requirement, and a fixed 90-day paid pilot with a readiness-gated exit (founder packet; `nekurama.babai.research.md`; raw turns 71 and 290).
- **Partial:** Meta embedded onboarding/coexistence, payment confirmation/refunds, multilingual staff workflows, and exact web information architecture.
- **Unknown:** cancellation/refund wording, minimum-paying terms, readiness evidence finalization, final feature cut, operational thresholds, paid conversion, retention and when to broaden beyond restaurants.

## Current questions

- [ ] Exact production feature cut after pilot instrumentation
- [ ] Detailed customer journey and edge cases
- [ ] Detailed owner/manager/staff journey and dashboard information architecture
- [ ] Notification/template matrix
- [ ] Detailed onboarding flow
- [ ] Post-pilot roadmap and vertical expansion gates
- [ ] Final pilot success/kill thresholds
- [ ] Pilot fee/deposit, refund treatment and end date

## Related durable truth

- `docs/products/babai/thesis-and-positioning.md` — thesis, ICP, buyer, differentiation and positioning
- `docs/products/babai/domain-model.md` — entity and state principles
- `docs/products/babai/architecture.md` — architecture constraints
- `docs/products/babai/experience-and-channels.md` — channel principles
- `docs/products/babai/validation.md` — validation gate and metrics
- `docs/products/babai/tier-feasibility.md` — tier feasibility, entitlement boundaries and rollout sequence
- `docs/products/babai/flow-inventory.md` — source-linked product flow requirements and acceptance boundaries
- `nekurama.babai.research.md` — September 2026 field research
- `nekurama/Bulb#1` — detailed decision history and evidence
