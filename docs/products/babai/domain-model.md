---
status: partial
owner: BABAI
last-reviewed: 2026-09-18
sources:
  - "Admin Decision Packet (2026-09-20)"
  - nekurama.raw.chat.json
  - nekurama/Bulb#1
  - historical ManojVysyaraju/bulb#1
---

# Domain Model

## Evidence-backed additions

The raw founder discussion confirms the following domain constraints and fills several cross-cutting gaps. Raw turn numbers below use the chronological substantive-message index defined in `architecture.md`.

## Decision status and boundary vocabulary

Use the following status vocabulary throughout the domain and architecture documents:

- **Confirmed** — source-backed domain constraint or explicit invariant.
- **Proposed** — useful candidate model that still needs design validation.
- **Unresolved** — requirement or question is known, but the implementation or final boundary is not selected.
- **Non-goal** — intentionally outside the current MVP.

Boundary terms are distinct:

- **Aggregate boundary** — transactional ownership, invariants and validated state transitions.
- **Capability/engine boundary** — cohesive responsibility for commands, calculations or policy that may span aggregates.
- **State/workflow boundary** — authoritative domain state and transitions versus durable orchestration of timers, retries, waits and recovery.
- **Integration boundary** — provider-facing adapter and external identity/transport semantics.
- **Trust/policy boundary** — authentication, authorization, tenant/branch scope and policy decisions before a state-changing command.
- **Deployment boundary** — an independently operated runtime; it is a candidate only when ownership, security, data, scaling or lifecycle evidence justifies it.

These terms prevent a conceptual engine or aggregate from being treated as an automatic microservice, database or workflow-product decision.

## Architecture handoff requirements (HLD/LLD)

### HLD requirements

- Preserve the `Tenant → Branch → Channel` context and tenant-scoped customer relationship.
- Keep aggregate ownership, capability ownership, provider adapters and deployment candidates explicit and separate.
- Keep authoritative domain state distinct from events, workflow records, audit history and telemetry.
- Enforce identity, authorization, policy and tenant/branch scope at trusted boundaries.
- Keep payment, fulfillment, conversation automation and human takeover as independent lifecycle concerns.
- Treat future extraction shapes as partial hypotheses; the committed starting posture is a modular monolith, TypeScript/Node, PostgreSQL, managed queue/outbox and provider adapters. Do not select a cloud service, queue vendor, workflow product, AI provider or future microservice topology here.

### LLD requirements

- Define typed commands, queries, state transitions, preconditions and event envelopes.
- Define correlation/causation, flow scope, schema versioning, idempotency, outbox/inbox, retries, quarantine/DLQ and reconciliation.
- Define monetary, promotion, tax, availability and order-snapshot invariants before implementation.
- Define provider callback verification and adapter lifecycle contracts.
- Define audit, sensitive-data access, retention/deletion and recovery semantics.

These are design requirements, not claims that the implementation already exists. See `architecture.md` and `architecture-boundaries.md` for the corresponding system-level handoff.

## Committed implementation alignment

The **Admin Decision Packet (2026-09-20)** records the starting implementation
posture without changing domain ownership:

- Domain capabilities and aggregates remain logical boundaries inside a
  TypeScript/Node modular monolith; no initial microservices or EKS.
- PostgreSQL is the starting authoritative persistence choice.
- Managed queue/outbox/inbox processing, idempotency, retries, DLQ/quarantine,
  reconciliation and auditability are baseline reliability mechanisms.
- AI remains advisory; deterministic domain services own orders, payments,
  permissions, consent and other controlled business state.
- Customer settlement is direct to the merchant through UPI/gateway flows;
  BABAI does not introduce a wallet or escrow.
- DPDPA-ready minimisation, consent, retention, deletion, access, subprocessors
  and incident controls are implementation/privacy requirements, not new
  aggregates.

Initial RPO 24 hours, RTO 8 hours, daily backups and tested restore are
continuity baselines. AWS credits may be evaluated without making the domain
AWS-specific or overprovisioned. Exact cloud services, queue vendor, workflow
implementation, SLOs and legal/security evidence remain open. [Admin Decision
Packet (2026-09-20); `architecture.md`; `architecture-lld.md`;
`architecture-boundaries.md`]

## State engine and workflow unknowns

**Confirmed requirement:** the product needs a state engine for business flows, not only payments. The founder then asked for a general state-engine evaluation and named idempotency, transactions, automatic retries, timers, human waits/interventions, audit history and recovery as required behavior. [Raw T115 `bbb210cc-a1ef-4ea9-b1a7-7c52f0011721`; Raw T117 `bbb216ed-0269-4c6c-8e28-f17031c1fa93`; Raw T119 `bbb211c0-c142-4837-aca7-b67a21454ec8`]

The domain implication is that every stateful aggregate keeps authoritative state and validates transitions, while a workflow layer may coordinate long-running work around those transitions. It must not become a substitute for aggregate state or silently invent successful outcomes.

Still unresolved:

- generic state machine versus flow-specific state machines;
- custom state handling versus open-source or managed workflow execution;
- Temporal, n8n, Jenkins, GitHub Actions or any other implementation;
- timer, human-wait, retry, compensation, recovery and replay semantics per flow;
- event-history/workflow-record persistence and retention;
- exact command/event/workflow ownership for onboarding, conversation, ordering, payment, fulfillment and delivery.

The raw mapping records the research-stage instruction to define the State Engine contract and compare options before selecting an implementation; it explicitly does not lock Temporal or another product. [Raw T122 `0011555d-10c7-4dbc-aca8-2bf7c55d324b`; Raw T136 `09c90c51-c4ae-40a6-9bd8-aea16eaf3339`]

### Tenant-scoped privacy and deletion

- The canonical customer identity may be global, but the relationship, consent, conversation, order and operational data exposed to a business are always scoped through `TenantCustomer`.
- A deletion request received in a restaurant conversation defaults to that tenant relationship. It must not silently delete the customer's relationship with another tenant.
- Platform-wide identity deletion, legal/financial retention and audit retention are separate policy decisions; they must not be inferred from a tenant-scoped request.
- Customer phone/WhatsApp identifiers are resolution keys, not immutable domain identity.

This preserves future cross-business capabilities without exposing one business's customer relationship to another. [Raw T99 `bbb21fb5-8f72-4a7f-b42b-333101d4a900`; Raw T102 `fa5fecac-d416-4c7e-aa77-f3d9d77978bd`; Raw T149 `bbb2129e-e9fa-43bf-adca-b0bc7a956664`]

### Event and transition discipline

- Events have explicit identity, type/schema version and correlation/causation context; related events may also carry session/flow context.
- Event type is derived from trusted flow context, not accepted as an authority from the client.
- Events coordinate side effects and integration; aggregate state and validated transitions remain authoritative.
- At-least-once delivery, deduplication/idempotency, retry/DLQ handling, replay controls and reconciliation are reliability requirements, not domain substitutes.
- The exact event-code registry, event-history retention and transport remain open battles.

[Raw T125 `bbb21b98-7460-45d5-a616-418ffbf47484`; Raw T137 `bbb21f78-6e9b-4ef8-9a07-60fe2273e772`; Raw T139 `bbb213b8-d58c-403e-b858-bdaa1ac750b8`; Raw T264 `bbb21a7f-4d44-4cc1-8f60-1172bdcc303c`; Raw T268 `bbb21426-5f7e-4c38-82e4-e288b9aae01c`]

### Staff-owned order corrections

Order modification and cancellation are requests for restaurant intervention, not automatic customer/AI mutations. Staff decide the correction; Ordering validates authorization, scope, policy and legal state transitions. A resulting order/invoice/payment correction is auditable and may require customer acknowledgement, pending payment or refund handling. [Raw T209 `bbb21545-4598-4ecd-a1fa-af977810bd5b`; Raw T216 `bbb216f2-0ccd-4871-a670-e02f94100750`; Raw T218 `bbb21ee2-2265-4c8a-ba89-82249c36e181`]

### Channel and branch context

The domain must keep `Channel` distinct from `Tenant`, `Branch`, subscription and provider account. A restaurant-owned WhatsApp number is a channel endpoint; a shared number may require an explicit branch selection, while a branch-specific number can resolve branch context directly. The provider's account identifiers are integration references, not the permanent business identity. [Raw T33 `ded20a72-7392-4785-8983-b6e7d75eae3b`; Raw T34 `bbb21cdc-296c-4806-af69-c1b7f40c4cf8`; Raw T65 `31e96409-07af-4d5c-a00c-fbe2a55c0433`]

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
