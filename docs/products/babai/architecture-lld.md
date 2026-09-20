---
status: partial
owner: BABAI
last-reviewed: 2026-09-21
sources:
  - "Admin Decision Packet (2026-09-20)"
  - "nekurama.raw.chat.json (conversation_id: 6aa2f947-fce0-83e8-99d0-9a52ab2b15cd)"
  - nekurama.chatgpt.md
  - docs/products/babai/architecture.md
  - docs/products/babai/architecture-boundaries.md
  - docs/products/babai/architecture-cost-options.md
  - docs/products/babai/domain-model.md
---

# BABAI Architecture LLD

## Purpose and status

This is the low-level companion to `architecture.md` and
`architecture-boundaries.md`. It records the implementation starting posture
without collapsing logical domain boundaries into deployment boundaries.

For AWS/provider/queue/database trade-offs, portability, continuity economics
and founder-only support capacity, see `architecture-cost-options.md`. That file
contains options and validation gates rather than additional implementation
commitments.

The **Admin Decision Packet (2026-09-20)** is the current administrative
decision source for the starting implementation posture. Founder evidence
continues to govern product intent and domain constraints. Items marked
**unresolved** require design, pilot, provider, operational or legal/security
validation before they become stronger commitments.

## Internal platform acceptance contract

The first implementation should satisfy this contract while remaining
deployable outside AWS:

1. Build one OCI-compatible image containing API and worker entry points; run
   as non-root, expose health/readiness checks and deploy by immutable digest.
2. Keep configuration in environment/config providers and credentials in a
   managed secret facility or equivalent encrypted store. Human administration
   requires MFA, named accounts, least privilege and a separately audited
   break-glass path.
3. Treat managed standard PostgreSQL as authoritative. Use transactional
   migrations, bounded connection pools, encrypted automated backups and an
   export/restore path. Prefer expand/migrate/contract changes so application
   rollback does not require destructive schema reversal.
4. Write domain state, outbox rows and required audit records in one
   transaction. Publish to a managed at-least-once queue; consumers persist
   inbox/idempotency state, use bounded retries and quarantine poison or
   human-action messages. The queue is replaceable and is not Kafka.
5. Store large imports, media, exports and backup artifacts in private
   S3-compatible object storage. Use short-lived signed access and add a CDN
   only for content classified as public/cache-safe.
6. Emit redacted structured logs and metrics, plus sampled traces where useful,
   with correlation/causation, tenant/branch/flow and provider references.
   Telemetry never authorizes a business transition.
7. CI/CD must test, type-check/lint, scan dependencies and images, produce an
   SBOM, publish an immutable artifact, validate migrations, deploy a smoke
   check and require explicit production approval. Keep the previous digest
   available for rollback.
8. Portability evidence must include PostgreSQL export/restore, object export,
   configuration reconstruction and safe queue replay. No multi-region or
   zero-data-loss claim is part of this contract.

The platform mapping is ECS/Fargate as the preferred AWS candidate, App Runner
only after worker/network/rollback validation, and a small EC2 host as a
founder-accepted cost fallback. Provider service names, regions, tiers,
quotes, credits and approval terms remain unresolved external inputs. The
support envelope is 6 hours/week for Manoj, 8 for Vinay and 14 combined, with
10 hours/week as the planned-load ceiling and no 24x7 commitment. Detailed
planning ranges and scale/rollback thresholds are maintained in
[`architecture-cost-options.md`](architecture-cost-options.md).

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
| Artefacts | Private object storage for backups/exports and controlled artefacts; CDN only for measured public static assets | Provider, retention, export format, signed access, cache invalidation and data-location controls |
| Access | Managed secret-store candidate, least-privilege workload identity, founder/admin MFA and audited break-glass access | Secret/key ownership, rotation, recovery access, access review and provider implementation |
| Delivery | Immutable image, tests, staged smoke, manual pilot promotion and backward-compatible migrations | CI provider, registry, deployment integration, promotion policy and rollback evidence |
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

## Observability contract

Observability describes and protects authoritative state; it never becomes a
second source of truth. The minimum implementation contract is:

- structured, redacted logs with correlation/causation, tenant/branch scope,
  flow and aggregate/provider references where allowed;
- metrics for request latency/errors, queue age/retries, oldest outbox record,
  DLQ/quarantine count, callback verification failures, payment
  reconciliation mismatches, backup age/last success and restore duration;
- alerts for failed backups, growing outbox/queue/DLQ, ambiguous settlement,
  repeated provider failures, suspected scope violations and founder support
  capacity pressure;
- optional sampled traces for cross-module/provider latency, excluding
  secrets, payment data and unrestricted PII.

CloudWatch or another provider-neutral/managed telemetry implementation is an
unresolved adapter choice. Retention, sampling, data location, access review,
alert routing, cost and Manoj/Vinay ownership require validation. Telemetry
must carry enough context to investigate a failure and must not authorize a
business transition or silently turn an error into success. [`architecture.md`;
`architecture-cost-options.md`; `docs/company/security-privacy-controls.md`]

## Object storage and CDN contract

Object storage is an artefact boundary, not authoritative domain storage. The
implementation should:

- keep backups, exports, restore-test evidence and controlled uploads private
  by default;
- use explicit object ownership, classification, retention/lifecycle and
  deletion rules;
- issue short-lived, scoped access for downloads/uploads where needed;
- record checksums, provenance and restore/export metadata without putting
  secrets or unrestricted PII into object names or logs;
- use a CDN only for versioned public static assets after cache-control,
  invalidation and access boundaries are tested.

Object-storage APIs and CDN behavior belong behind infrastructure adapters.
The exact provider, bucket/container policy, encryption/key ownership,
cross-region copy, export format and data-location rules remain unresolved.
Private business data and API responses are not a CDN cache target by default.

## Secrets, MFA and administrative access contract

Runtime and deployment secrets must not be stored in source control, container
images, ordinary checked-in configuration, logs or event payloads. Workloads
retrieve only the credentials needed for their scope from a managed or
equivalent encrypted secret store. Provider tokens, database credentials and
signing keys require explicit rotation, revocation and recovery procedures.

Founder and administrative access uses separate named identities, least
privilege, MFA (preferably a hardware/security key for privileged access),
access review and an audited, time-bound break-glass path. Break-glass access
does not become a normal service identity. The secret store, key-management
boundary, rotation cadence, recovery path and evidence of access review remain
unresolved; this is not a provider or legal/security approval claim.

## CI/CD, migration and rollback contract

The pilot delivery contract is:

1. Build an immutable OCI image from a reviewed commit.
2. Run repository-standard formatting, type/build, targeted test and
   dependency/security checks.
3. Deploy the image by digest to a non-production environment and smoke-test
   the API, worker, queue/outbox and required configuration.
4. Promote manually during the pilot with a recorded change and a
   backward-compatible database migration.
5. Observe errors, queue/outbox age, callback verification,
   reconciliation and backup signals before completion.

Rollback redeploys the last known-good image and configuration, pauses or
quarantines unsafe consumers, and uses an authorized replay/reconciliation
procedure for any attempted external side effects. Migrations must allow the
previous application version to run; destructive changes require a separate
reviewed recovery plan. The CI provider, registry, deployment integration,
promotion approval and automated-release threshold remain unresolved.

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

See [`architecture-cost-options.md`](architecture-cost-options.md) for the
non-binding AWS, PostgreSQL, queue, Meta, payment, portability and founder-only
support comparison. It does not select a vendor or claim approval.

## Validation gates before stronger commitment

- Complete a real Meta Tech Provider onboarding and fallback-provider exit
  test.
- Exercise payment webhook, manual confirmation, refund and reconciliation
  paths with a pilot merchant.
- Prove outbox/inbox, retry, DLQ, reconciliation and replay behavior.
- Define and test state/workflow contracts before selecting a workflow product.
- Run daily backup restore tests and record RPO/RTO evidence.
- Test private object-storage export/restore, signed access and any CDN cache
  boundary without exposing tenant data.
- Test secret rotation, MFA/recovery access, immutable-image promotion and
  last-known-good rollback with a backward-compatible migration.
- Review DPDPA readiness with legal/security owners and document subprocessors,
  access, deletion and incident controls.
- Compare AWS-credit economics with a portable baseline before selecting
  AWS-specific services.
- Establish production SLOs and support/observability ownership after pilot
  load and failure evidence.
