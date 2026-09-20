---
status: partial
owner: BABAI
last-reviewed: 2026-09-20
sources:
  - nekurama.raw.chat.json
  - nekurama.chatgpt.md
  - nekurama.babai.research.md
---

# Product Definition

## Current answer — confirmed

**BABAI is a business operating platform built around WhatsApp.** For the initial product, it is a restaurant-first operating layer that turns customer conversations into orders and coordinated restaurant work while keeping the customer relationship with the business. [Evidence: `nekurama.raw.chat.json:L13591-L13630`, `nekurama.raw.chat.json:L21506-L21540`; corroboration: `nekurama.babai.research.md:L42-L63`]

Core flow:

`Business WhatsApp → customer conversation → catalog/menu → order → payment → restaurant operations → fulfillment → completion → feedback/repeat`

WhatsApp is primary, not exclusive. Web is the dense configuration, operations and recovery surface. [Evidence: `nekurama.raw.chat.json:L47145-L47170`; corroboration: `nekurama.chatgpt.md:L23631-L23656`]

## MVP boundary — confirmed, production cut partial

### In scope for the narrow pilot

1. Connect one participating restaurant's business-owned WhatsApp identity.
2. Upload, review and explicitly publish a menu/catalog.
3. Answer routine customer questions using menu context, with human takeover available.
4. Convert conversational intent into a structured pickup cart/order.
5. Let the business accept/reject and progress the order through preparation, ready and completion.
6. Record or confirm payment without making BABAI the customer-funds custodian.
7. Surface actionable orders to staff through WhatsApp and a deliberately small web surface where density requires it.
8. Send supported transactional/order-status communication.

The narrow pilot starts with one business, one WhatsApp number, one branch, pickup-first, manual takeover and no delivery dependency. [Evidence: `nekurama.babai.research.md:L118-L143`; corroboration: `nekurama.chatgpt.md:L27072-L27263`]

### Explicitly outside the first proof

- Consumer marketplace/discovery network
- Customer native app
- POS/ERP replacement
- Full inventory suite
- Fleet ownership or delivery-network operation
- Advanced loyalty/marketing/BI
- ONDC as an MVP workstream
- General-purpose AI outside the business workflow

These exclusions preserve the restaurant/pickup proof; they do not permanently prohibit later capabilities. [Evidence: `nekurama.raw.chat.json:L79770-L79820`; corroboration: `nekurama.babai.research.md:L178-L186`]

## Pilot sequence — partial, explicitly staged

The founder source frames the product work as a constrained MVP/pilot battle: define the smallest real product, then measure activation, orders, successful fulfillment, repeat use, staff adoption, economics, retention and willingness to pay. [Evidence: `nekurama.raw.chat.json:L66495-L66540`, `nekurama.raw.chat.json:L79721-L79820`]

The reconciled operating sequence is:

1. **Stage 0 — one-business operational pilot:** run the narrow pickup-first flow with one business, one WhatsApp number and one branch, with manual takeover and no delivery dependency.
2. **Stage 1 — fixed 90-day paid pilot:** after the signed agreement and receipt of the agreed payment or deposit, run the term under signed minimum-paying terms; it is not a free trial.
3. **Stage 2 — readiness decision:** close the pilot at the day-90 decision point when the team-defined evidence gate supports materially larger onboarding volumes; hold expansion if it does not.

The stages are sequential learning gates. Stage 0 is confirmed as the initial
operating boundary; the readiness evidence, support model, numeric success/kill
thresholds and post-pilot plan remain partial or proposed. [Evidence:
`nekurama.raw.chat.json:L79721-L79820`; corroboration:
`nekurama.babai.research.md:L118-L163`,
`nekurama.babai.research.md:L176-L186`; current decision source:
`2026-09-21 FOUNDER DECISION PACKET`]

The final production feature cut, launch blockers, post-pilot roadmap and expansion criteria remain open. [Evidence: `nekurama.raw.chat.json:L66495-L66540`; corroboration: `nekurama.chatgpt.md:L27050-L27263`]

## Product boundaries — confirmed

### Business relationship

The customer normally interacts with the business's own WhatsApp identity. BABAI supplies the operating layer; it does not become the marketplace intermediary. [Evidence: `nekurama.raw.chat.json:L21506-L21540`, `nekurama.raw.chat.json:L48598-L48630`]

### AI and human control

AI may assist with understanding, extraction, recommendations, summarization and suggested actions. It is not authoritative for payment, permissions, order state, refunds, consent or other controlled business state. Menu extraction follows `candidate revision → validation → human review → explicit publish`. Human takeover is a first-class path. [Evidence: `nekurama.chatgpt.md:L6233-L6446`, `nekurama.chatgpt.md:L7207-L7450`; corroboration: `nekurama.babai.research.md:L44-L53`]

### Payment and fulfillment

Customer-to-business payment is preferred; BABAI subscription billing is separate. Payment and order are separate state machines, and pickup is the first fulfillment mode. Delivery remains provider-agnostic and later. [Evidence: `nekurama.raw.chat.json:L192-L205`; `nekurama.babai.research.md:L56-L63`, `nekurama.babai.research.md:L116-L116`]

## Current open questions

- Exact production feature cut and launch blockers
- End-to-end customer and owner/staff journeys, including cancellations, refunds and exceptions
- Minimal web screens, bulk operations and tier entitlements
- Meta onboarding/coexistence reliability and recovery
- Payment verification, reconciliation and refund behavior
- Notification/template matrix
- Pilot instrumentation, baseline and numeric success/kill thresholds
- Paid-pilot terms, pricing and post-beta continuation
- Post-pilot roadmap and vertical-expansion gates

These are deliberately retained as partial/challenge-required items, not inferred decisions. [Evidence: `nekurama.babai.research.md:L104-L116`, `nekurama.babai.research.md:L145-L163`; corroboration: `nekurama.chatgpt.md:L27963-L28378`]
