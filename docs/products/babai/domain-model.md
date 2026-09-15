---
status: confirmed
owner: BABAI
last-reviewed: 2026-09-15
sources:
  - nekurama/Bulb#1
  - historical ManojVysyaraju/bulb#1
---

# Domain Model

## Core hierarchy

`PLATFORM → BILLING ACCOUNT → BUSINESS/RESTAURANT GROUP (TENANT) → BRANCH → CHANNEL`

Tenant = business group. Branch = operating scope. WhatsApp number = channel. Subscription belongs to billing account.

## Core domain

`Business/Tenant → Branch → Catalog/Menu → Customer → Conversation → Order → Payment → Fulfillment → Staff`

## Resolved principles

- Customer identity is global; customer relationship is tenant-scoped.
- Owner identity is not inherently 1:1 with a restaurant.
- Menu revisions are immutable; one active revision per Menu ID.
- Publishing is explicit and authorized; old revisions remain available.
- Carts/orders capture the relevant menu revision.
- Availability is separate from content revision and supports temporary/scheduled overrides.
- Order and payment are separate state machines.
- Restaurant customer payments do not pass through BABAI custody by default.
- Delivery is provider-agnostic.
- Staff authorization is scoped: `Identity + Membership + Role + Permissions + Scope + Resource + Policy → Decision`.
- Human takeover is conversation-wide and pauses conversational automation only.

## Questions

- [ ] Final canonical entity/schema vocabulary
- [ ] Inventory depth beyond menu availability
- [ ] Multi-branch edge cases
- [ ] Customer merge/identity resolution rules
