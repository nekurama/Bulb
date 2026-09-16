---
status: partial
owner: BABAI
last-reviewed: 2026-09-17
sources:
  - nekurama/Bulb#1
  - nekurama/Bulb#3
  - nekurama.babai.research.md
  - historical ManojVysyaraju/bulb#1
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

The initial MVP is intentionally narrower than the long-term business operating platform.

### In scope

1. **Business / channel setup**
   - Connect the restaurant's business-owned WhatsApp identity.
   - Support the planned Meta-native connection path, with BSP fallback/adapter where required.
   - Establish one restaurant/tenant, one branch and one WhatsApp channel for the narrow pilot.

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
   - The first pilot should not depend on a delivery integration.

8. **Customer communication**
   - Send transactional/order-status communication through the business's WhatsApp where supported.
   - Keep transactional/support/marketing messaging conceptually separate.

## First pilot workflow

The first real-world pilot is deliberately narrow:

`Connect business WhatsApp`
`→ upload/review/publish menu`
`→ customer asks questions`
`→ customer places pickup order`
`→ business accepts/rejects`
`→ payment is recorded/confirmed`
`→ staff completes order`
`→ customer receives status`

Pilot operating boundary:

- one business
- one WhatsApp number/channel
- one branch
- pickup-first
- manual human takeover available
- no delivery dependency
- founder-led onboarding

The field research recommends selecting three businesses from the 19 interviewed businesses for the next validation stage, beginning with one business. The strongest proof target is three active pilots and at least one paying customer.

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

The research supports the problem and initial workflow, but explicitly does **not** yet prove willingness to pay, sustained usage, operational trust, Meta onboarding reliability, payment verification, refunds, delivery or multilingual staff workflows. Therefore the product definition should be treated as **partial/committed for the MVP boundary, with validation still required before broadening scope**.

## Current questions

- [ ] Exact production feature cut after pilot instrumentation
- [ ] Detailed customer journey and edge cases
- [ ] Detailed owner/manager/staff journey and dashboard information architecture
- [ ] Notification/template matrix
- [ ] Detailed onboarding flow
- [ ] Post-pilot roadmap and vertical expansion gates
- [ ] Final pilot success/kill thresholds

## Related durable truth

- `docs/products/babai/thesis-and-positioning.md` — thesis, ICP, buyer, differentiation and positioning
- `docs/products/babai/domain-model.md` — entity and state principles
- `docs/products/babai/architecture.md` — architecture constraints
- `docs/products/babai/experience-and-channels.md` — channel principles
- `docs/products/babai/validation.md` — validation gate and metrics
- `nekurama.babai.research.md` — September 2026 field research
- `nekurama/Bulb#1` — detailed decision history and evidence
