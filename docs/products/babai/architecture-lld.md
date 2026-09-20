---
status: partial
owner: BABAI
last-reviewed: 2026-09-20
sources:
  - "Admin Decision Packet (2026-09-20)"
  - "nekurama.raw.chat.json (conversation_id: 6aa2f947-fce0-83e8-99d0-9a52ab2b15cd)"
  - nekurama.chatgpt.md
  - docs/products/babai/architecture.md
  - docs/products/babai/architecture-boundaries.md
  - docs/products/babai/architecture-options.md
  - docs/products/babai/architecture-cost-options.md
  - docs/products/babai/domain-model.md
---

# BABAI Architecture LLD

## Purpose and status

This is the low-level companion to `architecture.md` and
`architecture-boundaries.md`. It records the implementation starting posture
without collapsing logical domain boundaries into deployment boundaries.

For AWS/provider/queue/database trade-offs, portability, continuity economics
and founder-only support capacity, see
`architecture-cost-options.md`. That file contains options and validation gates
rather than additional implementation commitments.

The **Admin Decision Packet (2026-09-20)** is the current administrative
decision source for the starting implementation posture. Founder evidence
continues to govern product intent and domain constraints. Items marked
**unresolved** require design, pilot, provider, operational or legal/security
validation before they become stronger commitments.

## Committed starting posture

| Concern | Starting choice | Still unresolved |
|---|---|---|
| Deployment | TypeScript/Node modular monolith with clear domain modules | Extraction triggers, packaging and environment model |
| Persistence | PostgreSQL for authoritative domain state | Schema/module layout, projections, partitioning, migrations and retention |
| Async work | Managed queue with transactional outbox/inbox | Queue vendor, partitioning, ordering, visibility and cost |
| Integrations | Provider adapters | Exact SDKs, credential lifecycle, callback verification and failover |
| WhatsApp | Official Meta Cloud API / Tech Provider target | Meta approval, coexistence, billing, portability and production limits |
| BSP | Fallback adapter, not a domain dependency | Provider selection, commercial terms and exit testing |
| AI | Advisory assistance only | Model/provider policy, evaluation, privacy, cost and multilingual behavior |
| Reliability | Idempotency, retries, DLQ/quarantine, reconciliation and auditability | Exact SLOs, alerting, replay and operational ownership |
| Payments | Direct UPI/gateway merchant settlement; no wallet/escrow | Provider, webhook verification, refunds and reconciliation |
| Operations | Portable design; AWS credits may be evaluated without overprovisioning | AWS service selection, portability tests and cost evidence |
| Continuity | Initial RPO 24h/RTO 8h, daily backups and tested restore | Restore evidence, automation, monitoring and final recovery runbook |
| Privacy/security | DPDPA-ready minimisation, consent, retention, deletion, access, subprocessors and incident controls | Legal review, notices, processor terms, encryption/key management and operating evidence |

No initial microservices or EKS deployment is selected. Logical capabilities
remain explicit so extraction can be evidence-driven later. [Admin Decision
Packet (2026-09-20); `architecture.md`; `architecture-boundaries.md`]

## Module map

The initial codebase should use clear modules with explicit dependencies and
contracts. Modules are not automatically services or separate databases.

| Module | Owns | Depends through |
|---|---|---|
| `identity` | Identity resolution, credentials and memberships | Identity contracts |
| `authorization` | Roles, permissions, scope and policy decisions | Identity and resource context |
| `tenant` | Billing-account relationship, tenant, branch and channel context | Provider references and membership IDs |
| `catalog` | Catalog/menu revisions, publication and availability | Tenant/branch context |
| `conversation` | Conversations, messages, automation and human takeover | Channel and customer relationship |
| `commercial` | Price, promotion and tax evaluations | Catalog and structured calculation capsule |
| `cart` | Mutable purchase intent | Catalog and commercial contracts |
| `order` | Committed order state and immutable commercial snapshot | Cart, commercial results and policy |
| `payment` | Payment intent/state, callbacks and reconciliation | Order reference and provider adapter |
| `fulfillment` | Pickup/delivery lifecycle and tracking references | Order reference and provider adapter |
| `billing` | BABAI subscription, invoice and entitlements | Tenant/billing-account context |
| `notification` | Outbound message intent, templates and delivery status | Provider adapter and consent/policy |
| `workflow` | Timers, retries, waits, recovery and reconciliation orchestration | Typed commands/events; never authoritative aggregate state |
| `audit` | Immutable security/business history and sensitive-operation evidence | Domain events and access policy |

The module map follows the aggregate and capability boundaries in
`domain-model.md`; it does not select one microservice per row. [Raw T153
`bbb21941-90d7-47d8-b4e0-671c6caecb09`; Raw T154
`1764f643-59fd-4cf5-be14-6aee32fc973a`; Raw T157
`bbb21f46-ddff-464d-bb6c-8a47d4188b9a`; `domain-model.md`]

## Request and command path

```text
Provider webhook / Web request
  -> edge authentication and signature verification
  -> channel/provider resolution
  -> identity, tenant, branch and session context
  -> authorization and policy decision
  -> typed module command
  -> aggregate load and invariant validation
  -> PostgreSQL transaction:
       authoritative state transition
       outbox record
       audit record where required
  -> bounded command response
  -> managed queue delivery
  -> idempotent consumers, notifications, workflow and reconciliation
```

The client or AI must not choose the authoritative event type, tenant scope,
payment outcome or order transition. Commands are typed, authenticated,
authorized and validated by the owning module. [Raw T139
`bbb213b8-d58c-403e-b858-bdaa1ac750b8`; Raw T165
`bbb21849-7c34-4782-a440-5be8c75acb62`; Raw T410
`bbb21914-7687-4f6e-848a-30e1e7e850f8`; `architecture.md`]

## PostgreSQL and transaction rules

- PostgreSQL is the authoritative store for module-owned domain state.
- A transaction may update only the authoritative state owned by its module
  and the outbox/audit records required for that transition.
- Cross-module reads use explicit contracts or projections; modules do not
  reach into each other's tables as an ownership shortcut.
- Orders store immutable commercial inputs, evaluated benefits, totals and
  menu provenance at commitment.
- Payment and fulfillment state are separate from order state.
- Monetary precision, rounding, tax provenance, promotion stacking and
  high-contention usage limits require explicit domain rules before production.
- Read models and analytics may be eventually consistent and must not replace
  authoritative state.

The exact PostgreSQL schema layout, migration strategy, projection mechanism,
partitioning, indexing, retention and archival remain unresolved. [Raw T206
`128e9fdc-9032-4a5d-b627-4f0118fc3ba3`; `domain-model.md`]

## Outbox, inbox and managed queue

The starting reliability pattern is:

1. Commit domain state and an outbox record atomically.
2. Publish outbox records to the managed queue.
3. Consumers record inbox/idempotency state before applying effects.
4. Retry transient failures with bounded backoff.
5. Quarantine non-retryable or human-action failures in a DLQ path.
6. Reconcile provider state and replay only under explicit authorization and
   schema/version rules.
7. Record the outcome in audit/observability facilities.

At-least-once delivery is expected. Exactly-once processing is not assumed.
The queue vendor, ordering/partition semantics, deduplication storage,
visibility timeout, replay tooling and DLQ operations remain unresolved. [Raw
T125 `bbb21b98-7460-45d5-a616-418ffbf47484`; Raw T126
`e472fe3d-22d5-4595-aafd-986683b13a3c`; Raw T264
`bbb21a7f-4d44-4cc1-8f60-1172bdcc303c`; `architecture.md`]

## State engine and workflow boundary

Authoritative aggregate state and validated transitions stay in domain modules.
The workflow layer coordinates long-running work such as timers, retries,
human waits, recovery and reconciliation around those transitions.

The following remain unresolved:

- generic versus flow-specific state-machine schemas;
- custom versus open-source versus managed workflow execution;
- Temporal or any other workflow product;
- timer, wait, retry, compensation, recovery and replay semantics;
- workflow/event-history persistence and retention;
- ownership split between domain transitions, workflow orchestration and
  provider retry logic.

The Admin Decision Packet commits the need for the capability, not a workflow
product. This preserves the research-stage founder instruction to define and
compare the State Engine contract before selecting an implementation. [Raw T115
`bbb210cc-a1ef-4ea9-b1a7-7c52f0011721`; Raw T117
`bbb216ed-0269-4c6c-8e28-f17031c1fa93`; Raw T119
`bbb211c0-c142-4837-aca7-b67a21454ec8`; Raw T122
`0011555d-10c7-4dbc-aca8-2bf7c55d324b`; Raw T136
`09c90c51-c4ae-40a6-9bd8-aea16eaf3339`; Admin Decision Packet (2026-09-20)]

## Provider adapters

### Meta / WhatsApp

```text
Channel module
  -> WhatsApp provider port
  -> Meta Cloud API / Tech Provider adapter
  -> BSP adapter fallback
```

The domain uses a provider-neutral `Channel`; WABA, phone and provider IDs are
integration references. Existing-number coexistence, approval, webhook
behavior, billing, disconnect and portability require validation. [Raw T37
`eadec8d3-a035-43e3-814a-6d3312001bbf`; Raw T47
`1df966d4-0c16-4a9a-b8cb-4375e5c2fda7`; Raw T51
`e305d46c-dbf1-4875-b1b1-58a381a9f86a`; Raw T65
`31e96409-07af-4d5c-a00c-fbe2a55c0433`]

### Payments

```text
Payment module
  -> payment provider port
  -> UPI/gateway merchant settlement
```

BABAI does not create a wallet, escrow or customer-funds custody layer.
Payment completion remains separate from order acceptance. Provider selection,
webhook authenticity, refund behavior, settlement reconciliation and legal
responsibility remain validation work. [Raw T68
`bbb21613-1461-4278-a34f-d4c055c03c84`; Raw T72
`bbb21c29-06e2-44d7-bd05-c2f9c28c3f4f`; Raw T216
`bbb216f2-0ccd-4871-a670-e02f94100750`; `domain-model.md`]

## AI and controlled state

AI may classify, extract, summarize, recommend and draft. It cannot directly
commit orders, payments, permissions, consent, refunds, fulfillment or other
controlled business state. An AI proposal becomes a typed command and passes
authorization, policy, deterministic validation and any required human
decision. [Admin Decision Packet (2026-09-20); Raw T410
`bbb21914-7687-4f6e-848a-30e1e7e850f8`; Raw T414
`bbb21eb2-e878-4ef3-a499-f81e1cdc2d83`; Raw T434
`bbb21a5b-1600-43f4-b2db-6456579c3a2f`]

Model/provider choice, prompt/data boundaries, evaluation, guardrails,
multilingual behavior, cost controls and escalation policy remain unresolved.

## Privacy, security and continuity

The implementation should be DPDPA-ready through minimisation,
purpose/channel-scoped consent, retention and deletion workflows, scoped
access, auditability, subprocessors controls and incident handling. This is a
readiness target, not a legal certification. Notices, retention periods,
processor terms, data location, encryption/key management and incident
procedures require legal/security validation.

Initial continuity baseline:

- RPO: 24 hours.
- RTO: 8 hours.
- Daily backups.
- Tested restore.

PostgreSQL backup/restore automation, monitoring, regional placement, evidence
of restore testing and the final recovery runbook remain unresolved. AWS
credits may be evaluated, but the implementation must remain portable and
must not be overprovisioned to consume credits. [Admin Decision Packet
(2026-09-20); `architecture.md`; `architecture-boundaries.md`;
`docs/company/security-privacy-controls.md`]

## Validation gates before stronger commitment

- Complete a real Meta Tech Provider onboarding and fallback-provider exit
  test.
- Exercise payment webhook, manual confirmation, refund and reconciliation
  paths with a pilot merchant.
- Prove outbox/inbox, retry, DLQ, reconciliation and replay behavior.
- Define and test state/workflow contracts before selecting a workflow product.
- Run daily backup restore tests and record RPO/RTO evidence.
- Review DPDPA readiness with legal/security owners and document subprocessors,
  access, deletion and incident controls.
- Compare AWS-credit economics with a portable baseline before selecting
  AWS-specific services.
- Establish production SLOs and support/observability ownership after pilot
  load and failure evidence.
