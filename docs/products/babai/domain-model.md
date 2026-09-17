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

### Commercial engines and calculation boundaries

BABAI uses **individual, composable domain capabilities/engines** rather than a monolithic commercial-rule capsule. The components can evolve independently while transaction boundaries preserve the evaluated result for reproducibility.

Conceptual commercial flow:

`Catalog/Menu → Cart Engine → Price Engine → Promotion Engine → Tax/GST Engine → Order Engine`

Operational flow then continues through payment and fulfillment capabilities.

- **Cart Engine** owns mutable customer purchase intent: item/variant/modifier selection, quantity, cart changes, validation and cart lifecycle. It does not own authoritative commercial prices.
- **Price Engine** determines the base/commercial price of the cart. This includes ordinary item/variant/modifier pricing and pricing constructs such as bundles/combos. A combo can therefore be modeled as a special sellable/pricing construct rather than as a promotion.
- **Promotion Engine** evaluates restaurant-defined offers against the priced cart/order context. It applies commercial benefits such as discounts and can support benefits that alter the resulting purchase composition, such as a free item, rather than being limited to a simple discount percentage.
- **Tax/GST Engine** separately determines applicable taxes from the structured commercial context rather than being folded into price or promotion calculation.
- **Order Engine** commits the commercial transaction and snapshots the evaluated result, including prices, applied promotion benefits, taxes, totals and provenance needed for historical reproducibility.

Core principle:

> **Individual rules/components remain flexible during evaluation; the committed commercial result becomes immutable at the Order boundary.**

This means the promotion definition itself may evolve over time, while a historical Order remains reproducible from its snapshot of the evaluated commercial outcome.

### Commercial engine inventory

The current conceptual engine/capability map is:

- `Catalog Engine` — menus, items, variants, modifiers and revisions.
- `Availability Engine` — whether a sellable entity is currently available, including temporary/scheduled availability.
- `Cart Engine` — mutable purchase intent.
- `Price Engine` — base/commercial pricing, including bundle/combo constructs.
- `Promotion Engine` — restaurant-controlled offers and benefits applied to priced context.
- `Tax/GST Engine` — tax determination/calculation.
- `Order Engine` — committed transaction and order lifecycle.
- `Payment Engine` — payment intent, state, confirmation and reconciliation.
- `Fulfillment Engine` — fulfillment lifecycle independent of Order.
- `Delivery Engine` — delivery provider interaction, quote, booking and execution when delivery is used.
- `Tracking Engine` — customer-facing and operational tracking state for fulfillment/delivery.
- `Conversation Engine` — conversation lifecycle, automation and human takeover.
- `Notification Engine` — transactional/support/other outbound communications.
- `Identity Engine` — identity resolution across customers, businesses and staff.
- `Authorization Engine` — permissions and scoped access decisions.
- `Policy Engine` — business rules, constraints and preconditions.
- `Workflow Engine` — long-running orchestration, retries, timers and human waits.
- `Audit Engine` — immutable business/security history.
- `Reconciliation Engine` — detection and resolution of mismatches with external systems.
- `Channel/Integration Engine` — WhatsApp and future external channel/provider integrations.

These are **domain capabilities**, not a commitment that every engine becomes a separately deployed service. Deployment boundaries can evolve independently of conceptual ownership boundaries.

Future capabilities such as deeper inventory, loyalty, subscriptions, refunds/returns, settlement, analytics/reporting and discovery/search can be added when their domain complexity becomes material.

### Promotions

- Promotions are a tenant-owned domain capability.
- Restaurants define promotion conditions, benefits, validity, eligibility and limits.
- BABAI evaluates promotion rules deterministically against the applicable cart/order context.
- Promotion components should remain composable rather than being forced into a fixed monolithic promotion type.
- Promotion benefits may include discounts as well as purchase-composition benefits such as free/additional items.
- The applied promotion result is snapshotted into the Order alongside the commercial calculation.
- Promotion stacking/combination semantics remain an explicit open battle; the engine architecture should support restaurant-controlled composition without assuming a final stacking policy yet.

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

The engine/capability boundaries above are intentionally separate from aggregate ownership. An engine may operate across multiple aggregates without becoming their aggregate root.

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

- [ ] Promotion stacking/combination semantics
- [ ] Exact aggregate contents and cross-aggregate invariants
- [ ] Multi-branch edge cases
- [ ] Customer identity and assisted merge mechanics beyond the no-auto-merge rule
- [ ] Inventory depth beyond MVP availability
- [ ] Remaining domain invariants and state-transition rules
- [ ] Exact production implementation boundaries and sequencing for the conceptual engines
