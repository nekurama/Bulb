---
status: partial
owner: BABAI
last-reviewed: 2026-09-18
sources:
  - nekurama/Bulb#1
  - historical ManojVysyaraju/bulb#1
  - nekurama.raw.chat.json
  - nekurama.chatgpt.md
  - nekurama.babai.research.md
  - docs/products/babai/product-definition.md
---

# Domain Model

## Decision status and evidence

This document is the current domain posture, not a final implementation
schema. The labels below preserve founder uncertainty and distinguish domain
decisions from design work:

| Area | Status | Evidence |
| --- | --- | --- |
| Tenant, branch, channel and billing hierarchy | **confirmed** | `Tenant` is distinct from `Branch`; `Channel` is a business endpoint; subscription is attached to `BillingAccount`. [docs/products/babai/domain-model.md:35-43; nekurama.chatgpt.md:5078-5115] |
| Restaurant-first, one-branch pilot context | **confirmed for MVP** | The initial workflow is one branch/channel per pilot business and pickup-first. [docs/products/babai/product-definition.md:80-103; nekurama.babai.research.md:118-133] |
| Global customer plus tenant relationship | **confirmed** | Customer identity is global, while `TenantCustomer` owns tenant-scoped relationship state. [docs/products/babai/domain-model.md:53-61] |
| Conversation, cart and order separation | **confirmed** | Conversation, cart and committed order have separate lifecycle and consistency boundaries. [docs/products/babai/domain-model.md:63-76] |
| Menu revision and order provenance | **confirmed** | Published menu revisions are immutable and order truth retains the relevant revision/provenance. [docs/products/babai/domain-model.md:78-89; docs/products/babai/product-definition.md:43-46] |
| Composable commercial evaluation | **confirmed at domain level** | Individual engines contribute typed results; the order freezes the evaluated result. The rules technology is not selected. [docs/products/babai/domain-model.md:91-136] |
| Payment and fulfillment independence | **confirmed boundary** | Payment and fulfillment are separate state machines from order; pickup is MVP. [docs/products/babai/domain-model.md:177-189] |
| Logical engine/capability map | **confirmed as conceptual** | Engines are capabilities, not one-service-per-engine commitments. [docs/products/babai/domain-model.md:138-165] |
| Exact aggregate contents and invariants | **partial; challenge-required** | Candidate roots exist, but cross-aggregate invariants, promotion usage, combo modeling, tax rounding and delivery boundaries remain open. [docs/products/babai/domain-model.md:204-223,260-268] |
| Physical deployment and persistence boundaries | **unknown** | The founder history keeps deployment, storage and workflow technology in design/POC. [nekurama.chatgpt.md:13011-13053] |

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

### Calculation Capsule Principle

Transaction-dependent engines evaluate structured facts from a shared **Calculation Capsule** against their applicable rules, configuration and metadata.

The capsule is not a generic mutable bag of state and does not replace aggregate ownership. It is a structured calculation context containing relevant input facts, derived facts, decisions, adjustments and provenance for the current commercial evaluation.

Each engine:

1. reads the facts relevant to its responsibility;
2. evaluates them against its rules/configuration/metadata;
3. contributes a typed, attributable result to the capsule; and
4. does not directly mutate another engine's authoritative domain state.

Conceptually:

`Outcome = f(Calculation Capsule + Applicable Rules + Metadata + Relevant Version/Provenance)`

Therefore the same engine logic can produce different outcomes when the cart contents, item eligibility, promotion conditions, price metadata, availability, customer context or other applicable facts change.

The commercial evaluation is not required to be a rigid one-pass pipeline. Engine dependencies and bounded re-evaluation may exist when a contribution changes the commercial context, such as a promotion that adds a free item. Evaluation must nevertheless remain deterministic and explicitly bounded; engines must not recursively mutate the calculation without defined semantics.

At Order commitment, the relevant commercial inputs, engine contributions, decisions, applied benefits, totals and provenance are frozen into the Order commercial snapshot. Historical Orders are therefore not recalculated from today's rules or configuration.

This principle is a design model for deterministic rule-driven evaluation; it does not prescribe a particular rules technology.

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

The current design also treats `Promotion` as a likely tenant-owned configuration aggregate/capability because its definition, activation and lifecycle are independently managed. Exact promotion usage/redemption mechanics remain part of the invariants battle; high-contention usage limits such as "first 50 per day" must not be reduced to an unsafe mutable counter assumption.

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

## Resolved design decisions from current domain battle

- Multi-branch context: Tenant owns the customer relationship; Branch owns operational context. Menus, availability, pricing context, fulfillment, channel and staff authorization are branch-scoped where applicable.
- Customer assisted merge: no automatic merge; possible matches may be surfaced; explicit human/business confirmation and auditable provenance are required.
- Inventory: availability-first for MVP; no full Inventory Engine/suite until domain complexity justifies it.
- State transitions: authoritative state changes occur through explicit, validated, auditable transitions rather than direct status mutation.
- Engine boundaries: engines are cohesive logical capabilities, not one-microservice-per-engine commitments. They may initially live together and be separated later.
- Commercial evaluation: use the Calculation Capsule Principle above; individual engine contributions remain composable while the Order freezes the evaluated commercial result.

## Remaining domain battles

- [ ] Promotion stacking/combination semantics
- [ ] Exact aggregate contents and cross-aggregate invariants
- [ ] Remaining domain invariants and state-transition rules
- [ ] Exact combo/bundle sellable modeling and price-version/provenance semantics
- [ ] Tax calculation/adjustment provenance and deterministic monetary/rounding rules
- [ ] Delivery vs Fulfillment vs Tracking lifecycle/aggregate boundaries
- [ ] Exact production implementation boundaries and sequencing for the conceptual engines

## Domain source map

The following sources are the evidence base for the current model:

- Product workflow, AI/human/payment/integration boundaries:
  `docs/products/babai/product-definition.md:16-30,38-78,124-144`.
- Pilot limits and validation uncertainty:
  `nekurama.babai.research.md:104-133,176-186`.
- Founder hierarchy decision separating restaurant, branch, WhatsApp number and
  subscription:
  `nekurama.chatgpt.md:5066-5115`.
- Founder state/workflow separation and deferred implementation choice:
  `nekurama.raw.chat.json:24; nekurama.chatgpt.md:12843-12995,13011-13053`.
- Founder event-first and reliability direction:
  `nekurama.chatgpt.md:13100-13134,13143-13150,13726-13734`.

Where this document says **confirmed**, it means the domain/product principle
is the current working truth. It does not mean that the database schema,
service topology or implementation technology has been selected.
