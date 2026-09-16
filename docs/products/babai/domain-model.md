---
status: partial
owner: BABAI
last-reviewed: 2026-09-17
sources:
  - nekurama/Bulb#1
  - historical ManojVysyaraju/bulb#1
---

# Domain Model

## Core hierarchy

`PLATFORM → BILLING ACCOUNT → TENANT / BUSINESS → BRANCH → CHANNEL`

- `Tenant` = business/business group, not a branch.
- `Branch` = operational and authorization/data scope.
- `Channel` = business communication endpoint; model as generic 1:N per branch even when the MVP uses one WhatsApp channel.
- Subscription belongs to `BillingAccount` and is independent of a channel.
- Owner identity is not inherently 1:1 with a tenant.

## Core domain

`Tenant → Branch → Catalog → Menu → Customer → TenantCustomer → Conversation → Cart → Order → Payment / Fulfillment`

The model is intentionally generic enough for future local-business verticals while keeping restaurant behavior as the MVP specialization.

## Resolved principles

### Customer and relationship

- Customer identity is global.
- Customer relationship is tenant-level through `TenantCustomer`.
- `TenantCustomer` is an aggregate root for tenant-scoped relationship state.
- A branch supplies operating/interactions context but does not own the canonical customer relationship.
- Customer identity must never be silently merged.
- Possible identity matches may be detected, but any merge requires explicit business/human confirmation and an auditable operation.
- Customer has its own canonical ID; phone number is an identity attribute/resolution key, not the immutable global identity.

### Conversation

- `Conversation` is a first-class domain entity and aggregate boundary.
- Human takeover is conversation-wide and pauses conversational automation only; order/payment/fulfillment processing continues independently.

### Cart and order

- `Cart` is a first-class persistent aggregate.
- Cart represents mutable conversational intent and can be changed before checkout.
- `CartItem` is distinct from `OrderItem`.
- `Order` is a separate aggregate representing the committed commercial transaction.
- Cart and Order therefore have separate lifecycles and consistency boundaries.
- Orders capture a full immutable commercial snapshot at commitment: line items, item/variant selections, prices, discounts, taxes, totals and other applicable commercial terms.
- The relevant `menuRevisionId` is also retained for provenance; later menu changes must not rewrite historical order truth.

### Catalog and menu

- `Catalog` is the branch-level container/collection for menus rather than one large transactional aggregate.
- `Menu` is the aggregate root.
- A branch may have multiple menus.
- `MenuRevision` is immutable; publishing is explicit and authorized; historical revisions remain available.
- Catalog vocabulary is structured as `Menu → Section → Item → Variant / OptionGroup → Modifier`.
- `Item` represents the conceptual sellable offering; `Variant` represents a sellable variation such as size/format; `OptionGroup` defines a selection group/rule; `Modifier` represents a selectable addition/change.
- Variant-level pricing is the MVP pricing model. Items without meaningful variants may use a single/default sellable variant rather than special pricing semantics.
- Availability is separate from content revision and supports temporary/scheduled overrides.
- Availability should be modeled generically enough to apply to sellable levels where required, including variants/modifiers, without building a full inventory engine.
- MVP inventory depth is limited to menu/item availability; do not build a generic warehouse/inventory suite yet.

### Addresses and fulfillment

- Address is not inherently a Customer-owned aggregate concept.
- Address is modeled as a reusable value/object within the fulfillment context when required.
- Pickup fulfillment does not require a customer address.
- `Fulfillment` remains provider-agnostic and separate from Order.

### Payment and fulfillment

- `Payment` is a separate aggregate/state machine from `Order`.
- Customer payment flows directly to the business; BABAI does not custody customer funds by default.
- Payment completion does not automatically imply order acceptance.
- `Fulfillment` is a separate aggregate/state machine from Order and is provider-agnostic; MVP is pickup-first.

### Staff and authorization

- Identity is distinct from tenant membership.
- "Staff" is a product/UI concept; authorization is modeled through `Identity + Membership + Role + Permissions + Scope + Resource + Policy → Decision`.

### Aggregate references and infrastructure

- Aggregates do not embed authoritative state from other aggregates.
- Cross-aggregate relationships use stable IDs/references rather than owning another aggregate's lifecycle.
- Authoritative business/domain state is separate from events, audit, workflow and telemetry infrastructure.
- Domain entities and their validated state transitions remain authoritative.
- Events coordinate side effects and integration; audit records history; workflow infrastructure executes/retries processes; telemetry observes the system. None replaces authoritative domain state.

## Current aggregate map

Proposed aggregate roots:

- `Tenant`
- `Branch`
- `Channel`
- `TenantCustomer`
- `Menu`
- `Conversation`
- `Cart`
- `Order`
- `Payment`
- `Fulfillment`

`Catalog` is a branch-level organizational/container concept, not the primary transactional aggregate.

## Domain shape

```text
PLATFORM
  └── BILLING ACCOUNT
        └── TENANT / BUSINESS
              ├── MEMBERSHIPS / AUTHORIZATION
              ├── BRANCH
              │    ├── CHANNEL (1:N)
              │    └── CATALOG
              │         ├── MENU
              │         │    ├── SECTION
              │         │    └── MENU REVISION*
              │         │         └── ITEM → VARIANT → OPTION GROUP → MODIFIER
              │         └── ...
              │
              └── TENANT CUSTOMER
                    └── CONVERSATION
                          └── CART
                                └── ORDER
                                      ├── PAYMENT
                                      └── FULFILLMENT
```

Events, audit, workflow and telemetry surround these domain boundaries rather than becoming one combined domain hierarchy.

## Remaining domain battles

- [ ] Pricing, discounts, taxes and their ownership beyond the MVP commercial snapshot
- [ ] Exact aggregate contents and cross-aggregate invariants
- [ ] Multi-branch edge cases
- [ ] Customer identity and assisted merge mechanics beyond the no-auto-merge rule
- [ ] Inventory depth beyond MVP availability
- [ ] Remaining domain invariants and state-transition rules
