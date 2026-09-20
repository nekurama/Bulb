---
status: partial
owner: BABAI
last-reviewed: 2026-09-20
sources:
  - docs/products/babai/architecture.md
  - docs/products/babai/domain-model.md
  - docs/products/babai/product-definition.md
  - nekurama.chatgpt.md
  - nekurama.raw.chat.json
---

# BABAI Logical Design (LLD posture)

## Purpose and status

This document is a design-phase input, not an implementation specification. It
defines the logical contracts that should survive a later choice of runtime,
database, broker, workflow engine or deployment topology. Every item marked
**challenge-required** needs design review or a POC before becoming a build
contract.

The founder history explicitly separates domain state, a state-transition
model and durable workflow/orchestration, while keeping the implementation
choice open. [nekurama.chatgpt.md:12849-12884,12888-12941,13011-13053]

## Logical modules

| Module | Responsibility | Authoritative state |
| --- | --- | --- |
| Identity and authorization | identity resolution, memberships, roles, scopes and policy decisions | identity/membership/access records |
| Tenant and billing | tenant, branch, channel association and subscription context | tenant/branch/channel/billing records |
| Catalog and availability | menu, immutable revisions, publication and availability | menu and revision records |
| Conversation and channel | provider-normalized messages, conversation lifecycle, automation and takeover | conversation/message records |
| Cart and commercial evaluation | cart lifecycle and composable price/promotion/tax contributions | cart plus calculation provenance |
| Order | commitment, accepted/rejected/operational order states and commercial snapshot | order and transition records |
| Payment | payment intent/state, provider callbacks and reconciliation | payment and provider-reference records |
| Fulfillment/delivery | pickup or delivery lifecycle, provider calls and tracking | fulfillment/delivery records |
| Notification | outbound transactional/support communication and delivery status | notification records |
| Workflow | process coordination, waits, retries, compensation and recovery | workflow execution metadata, never business truth |
| Audit/reconciliation | immutable business/security history and mismatch resolution | audit and reconciliation records |

These are logical ownership units. They must not be interpreted as one
aggregate, one database, or one deployable service each. The current domain
model explicitly separates capability boundaries from aggregate ownership.
[docs/products/babai/domain-model.md:138-165,196-202]

## Aggregate and reference rules

The current aggregate candidates are:

```text
Tenant
Branch
Channel
TenantCustomer
Menu
Conversation
Cart
Order
Payment
Fulfillment
```

`Promotion` is a likely tenant-owned configuration aggregate/capability.
`Catalog` is an organizational container rather than the primary transactional
aggregate. Cross-aggregate references use stable IDs; authoritative state is
not embedded or silently copied across ownership boundaries.
[docs/products/babai/domain-model.md:196-223]

The commercial boundary is:

```text
Catalog/Menu
  -> Cart
  -> Price contribution
  -> Promotion contribution
  -> Tax/GST contribution
  -> Order commitment and immutable snapshot
```

The calculation context may be recomputed in a bounded, deterministic way
before commitment. After commitment, the order snapshot is historical truth and
must not be recalculated from current menu or promotion rules.
[docs/products/babai/domain-model.md:91-136]

## State transition and workflow separation

Every controlled state change follows this logical sequence:

```text
Command or verified provider event
  -> resolve identity, tenant, branch and authorization context
  -> load the owning aggregate
  -> validate the requested transition and policy
  -> persist the new authoritative state
  -> record transition/audit facts
  -> record publishable event intent atomically
  -> commit
  -> execute asynchronous consumers and external effects
  -> reconcile provider outcomes and retryable failures
```

The state-transition model answers whether a change is valid. Workflow
orchestration answers how a long-running process reaches its next step,
including waits, timers, retries, human intervention, recovery and
compensation. Neither layer may make the workflow engine the source of order,
payment or fulfillment truth. [nekurama.chatgpt.md:12860-12881,12888-12941]

## Event and command contract (proposed)

The following envelope is a **design proposal; challenge-required**:

```text
eventId
eventType
schemaVersion
occurredAt
source
aggregateType
aggregateId
tenantId
branchId (when applicable)
correlationId
causationId
actor / actorType
idempotencyKey (when applicable)
dataClassification
payload
```

Required design properties:

- event type and schema are explicit and versioned;
- event identity is distinct from aggregate identity;
- correlation and causation support traceable workflows;
- provider event IDs are retained for deduplication where available;
- sensitive payload fields have an explicit classification and retention rule;
- commands express requested change, while events describe committed facts;
- event consumers are safe under at-least-once delivery;
- replay and reconciliation do not silently repeat irreversible effects.

This preserves the research-level decision for explicit event contracts,
observable command lifecycles and categorized event origins/types without
choosing Kafka, SQS, SNS, RabbitMQ, Redis or another broker.
[nekurama.chatgpt.md:13143-13150,13726-13734]

## Reliable event publication

The current reliability pattern is:

```text
Authoritative state change
  + publishable event intent
  -> same logical transaction
  -> committed outbox/event record
  -> publisher
  -> broker/queue (unselected)
  -> idempotent consumer
  -> retry/DLQ/replay/reconciliation
```

This is a reliability requirement, not a commitment to an event-sourced
system. At-least-once delivery is expected; exactly-once processing is not an
assumption. The inbox/deduplication, retry and reconciliation policies must be
specified for each external effect. [nekurama.chatgpt.md:13108-13134]

## Representative order flow

The first pilot should be implementable with one business, one branch, one
WhatsApp channel and pickup-first fulfillment:

```text
Meta webhook
  -> verify provider event and deduplicate
  -> resolve channel -> branch -> tenant
  -> append inbound message / update conversation
  -> acknowledge provider promptly
  -> interpret intent (AI may assist)
  -> propose or update cart
  -> calculate and show reviewable commercial result
  -> customer confirms
  -> commit order snapshot and OrderCreated fact
  -> notify staff
  -> staff accepts/rejects through authorized transition
  -> record payment state independently
  -> progress pickup fulfillment
  -> send transactional status
```

Human takeover changes who handles the conversation; it does not cancel or
silently rewrite order, payment or fulfillment state. AI suggestions require
the same validation and authorization as any other command before controlled
state changes. [docs/products/babai/product-definition.md:48-78,124-144]

## Design decisions still required

| Decision | Status | Required evidence |
| --- | --- | --- |
| Exact service/deployment cut | **challenge-required** | Compare modular-monolith and coarse-grained-service options against pilot operations, security isolation, cost and team capacity. |
| State transition contract | **challenge-required** | Define guards, actor/scopes, transition history, concurrency and rejection semantics for each aggregate. |
| Workflow implementation | **unknown** | Compare Temporal, other durable engines, lightweight custom orchestration and combinations against the stated guarantees. [nekurama.chatgpt.md:12989-12995,13043-13049] |
| Persistence model | **unknown** | Define transaction boundaries, outbox/inbox storage, consistency, retention, backup and recovery targets. |
| Event infrastructure | **unknown** | Select broker/queue only after event volume, ordering, replay, operational burden and cost are measured. |
| Event schema governance | **challenge-required** | Define compatibility, ownership, validation, registry and migration policy. |
| Meta coexistence | **challenge-required** | Validate exact onboarding, token/ID lifecycle, app coexistence, webhook guarantees and disconnection behavior. [nekurama.chatgpt.md:6984-7003] |
| Payment and refund semantics | **unknown** | Validate provider callbacks, confirmation authority, partial failure and reconciliation in a POC. |
| Delivery boundary | **unknown** | Define when Delivery is a capability inside Fulfillment versus a separate provider-facing boundary. |
| SLO/DR/cost envelope | **unknown** | Measure the controlled beta before setting production targets. [nekurama.babai.research.md:104-116,145-160] |
