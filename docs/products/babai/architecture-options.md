---
status: partial
owner: BABAI Architecture
last-reviewed: 2026-09-21
sources:
  - "Track 4 — Architecture/Cost Options (2026-09-20)"
  - "Admin Decision Packet (2026-09-20)"
  - "nekurama.raw.chat.json (conversation_id: 6aa2f947-fce0-83e8-99d0-9a52ab2b15cd)"
  - nekurama.chatgpt.md
  - docs/products/babai/architecture.md
  - docs/products/babai/architecture-lld.md
  - docs/products/babai/architecture-boundaries.md
  - docs/products/babai/domain-model.md
  - docs/products/babai/business-model.md
---

# BABAI Architecture and Cost Options

## Purpose and decision posture

This artifact compares viable starting options for the committed BABAI
posture. It is not a procurement decision, price quote, cloud commitment or
production runbook.

The detailed, current Track 4 decision record is
[`architecture-cost-options.md`](architecture-cost-options.md). This earlier
matrix remains useful as a compact comparison; cost envelopes, support gates,
restore evidence and the recommended-now/revisit-when decision live in the
detailed artifact.

The baseline being evaluated is:

- modular monolith;
- TypeScript/Node;
- PostgreSQL;
- managed queue plus transactional outbox/inbox;
- provider adapters;
- official Meta Cloud API/Tech Provider with BSP fallback;
- direct merchant settlement with no wallet or escrow;
- initial RPO 24 hours/RTO 8 hours, daily backups and tested restore;
- portable operation without overprovisioning to consume AWS credits;
- founder-only support initially, with no hiring assumption.

The **Track 4 — Architecture/Cost Options (2026-09-20)** packet and the
**Admin Decision Packet (2026-09-20)** are current administrative inputs.
Founder raw evidence and current BABAI documents remain the constraints. Costs
below are relative estimates or cost-model fields, not quoted prices. AWS
pricing, Meta/BSP/payment fees, credits, taxes and professional legal/security
advice require current validation before purchase or launch.

## Short recommendation

Start with a **small containerized modular monolith plus one managed worker
path**, PostgreSQL on a managed PostgreSQL service, a managed queue behind a
queue port, and provider adapters. Evaluate AWS credits against the same
portable baseline; use credits to reduce measured pilot cost, not to justify
larger instances, EKS, Aurora, Kafka or a multi-region design.

Target Meta directly as a Tech Provider/Cloud API integration, with a BSP
adapter available for onboarding or coexistence blockers. Use a payment
gateway/UPI adapter that settles directly to the merchant. Keep all provider
choices replaceable at the boundary.

This recommendation does **not** select a cloud service, queue vendor,
workflow engine, Meta partner, payment provider, support schedule or
production SLO beyond the committed initial RPO/RTO baseline.

The overnight architecture review refines the target into **hybrid
evolution**: isolate gateway/BFF, provider/notification, workflow/
reconciliation, AI-task and projection capacity before extracting
tenant/catalog/order/payment domains. Extraction remains evidence-driven; this
is not a commitment to microservices or Kubernetes.

## AWS managed runtime options

| Option | Fit for the modular monolith | Credit/cost posture | Portability and risks | Status |
|---|---|---|---|---|
| **ECS/Fargate + managed PostgreSQL + managed queue** | Strong fit for a containerized API/worker with low platform operations | Credits can offset measured task/database/queue spend; start with the smallest viable task count and scale from evidence | Container/standard PostgreSQL/queue ports are portable; Fargate task pricing, minimum always-on capacity and network costs need a live estimate | **Preferred candidate** |
| **App Runner + managed PostgreSQL + managed queue** | Simpler web deployment for a small service; worker and background semantics need validation | Potentially simple pilot operations, but cost behavior and worker topology need measurement | More platform-specific deployment behavior; verify long-running worker, networking and observability limits | **Viable alternative** |
| **Small EC2 host + containers + managed PostgreSQL/queue** | Lowest apparent fixed compute cost for a tiny pilot | Credits may make it inexpensive, but operator time, patching and failure recovery are real costs | More operational burden and a larger single-host failure mode; portability is good | **Cost fallback, not default** |
| **Lambda/API Gateway + queue + PostgreSQL** | Useful for bursty edge handlers, but less natural for a modular monolith with transactions and worker state | Pay-per-use may help very low volume; connection management and observability add cost/complexity | More runtime coupling and refactoring pressure; do not force the core domain into functions prematurely | **Not starting posture** |
| **EKS/Kubernetes** | Technically capable but mismatched to the first product slice | Cluster/control-plane, node, observability and operator costs risk consuming credits without product evidence | High operational coupling and premature deployment boundaries | **Explicit non-goal initially** |

### AWS evaluation rules

1. Model the pilot with actual requests, queue messages, database storage,
   backups, logs, egress and support effort.
2. Compare AWS-credit and non-credit totals; credits are a discount, not
   sustainable unit economics.
3. Prefer one small API task and one worker capacity model over redundant
   production sizing during Stage 0.
4. Do not provision EKS, multi-AZ replicas, Aurora, Kafka or multi-region
   recovery until measured availability, throughput or recovery evidence
   requires them.
5. Keep containers, PostgreSQL SQL, object-storage access and queue semantics
   behind ports so a later move is possible.

AWS service names and sizes, credit eligibility, network layout, observability
cost and production availability targets are **unknown/professional
validation items**.

## Database options

| Option | Advantages | Costs/risks | Recommendation |
|---|---|---|---|
| **Managed PostgreSQL (standard engine)** | Matches committed posture; transactions, relational invariants, mature tooling and portability | Backup/restore, scaling, connection limits, migrations and read models need deliberate operation | **Starting choice** |
| **Aurora PostgreSQL** | Managed scaling and AWS integration | More AWS-specific, potentially overprovisioned and harder to cost-justify at pilot scale | Revisit only with evidence |
| **Self-managed PostgreSQL on EC2** | Low license cost and maximum control | Patch, backup, failover and restore burden falls on founders | Cost experiment only |
| **DynamoDB/document store** | Managed scale and event-friendly access patterns | Poor fit for current relational aggregates, commercial invariants and reporting assumptions | Not starting posture |
| **Separate analytics warehouse** | Useful for later reporting/BI | Scope and cost before product-market evidence | Explicitly deferred |

PostgreSQL is authoritative for domain state. Redis may later support cache or
short-lived coordination, but it must not become order/payment truth. The exact
schema, migrations, projections, indexes, retention and archival plan remain
LLD work.

## Queue, event and workflow options

| Option | Fit | Portability/operations | Recommendation |
|---|---|---|---|
| **Managed queue + PostgreSQL outbox/inbox** | Directly matches current reliability posture and modular monolith | Queue port keeps provider replaceable; delivery semantics must be tested | **Starting choice** |
| **Managed pub/sub/event bus plus queues** | Useful for fan-out and provider events once flows justify it | Adds routing, ordering and cost complexity | Add only for measured need |
| **RabbitMQ-compatible managed broker** | Flexible routing and familiar semantics | More operational concepts and provider-specific behavior | Evaluate only if queue semantics are insufficient |
| **Kafka/MSK** | High-throughput event streaming | Operational and cost overkill for the pilot; does not replace domain/workflow design | Explicitly deferred |
| **Redis queue** | Simple short-lived jobs and low latency | Durability, replay and failure semantics need careful proof | Optional auxiliary tool, not authoritative |
| **Workflow product (Temporal or alternative)** | Durable timers/waits/recovery if flow complexity becomes material | Product, hosting, operations and learning cost remain unknown | State-engine validation first |

At-least-once delivery, idempotency, retries, DLQ/quarantine, reconciliation
and auditability are committed requirements. Exactly-once processing and a
workflow product are not assumed. [Raw T125
`bbb21b98-7460-45d5-a616-418ffbf47484`; Raw T126
`e472fe3d-22d5-4595-aafd-986683b13a3c`; Raw T115
`bbb210cc-a1ef-4ea9-b1a7-7c52f0011721`; `architecture-lld.md`]

## Meta and WhatsApp provider options

| Option | Strength | Cost/risk | Recommendation |
|---|---|---|---|
| **Meta Tech Provider + direct Cloud API** | Best alignment with restaurant-owned identity and long-term control | Approval, onboarding, coexistence, support and billing operations are BABAI responsibilities | **Strategic target** |
| **BSP adapter** | Faster pilot bridge and operational support | Markup, vendor dependency, migration/portability and provider limits | **Fallback, not domain dependency** |
| **Direct restaurant self-integration** | Lowest BABAI provider responsibility | Not the BABAI product experience; weakens onboarding and automation value | Not the product path |

The domain should expose a provider-neutral Channel/WhatsApp port. Existing
number coexistence, Meta approval, WABA/phone lifecycle, message policy,
template/Direct Send behavior, billing, disconnection and portability are
validation gates. [Raw T37 `eadec8d3-a035-43e3-814a-6d3312001bbf`; Raw T47
`1df966d4-0c16-4a9a-b8cb-4375e5c2fda7`; Raw T51
`e305d46c-dbf1-4875-b1b1-58a381a9f86a`; Raw T65
`31e96409-07af-4d5c-a00c-fbe2a55c0433`; `experience-and-channels.md`]

## Payment options

| Option | Settlement boundary | Recommendation |
|---|---|---|
| **UPI/gateway adapter with direct merchant settlement** | Customer pays restaurant/business; BABAI records provider state and reconciliation | **Starting choice** |
| **Manual UPI/QR confirmation** | Restaurant confirms or corrects payment through staff workflow | Pilot fallback; audit and fraud controls required |
| **BABAI wallet/escrow/merchant-of-record** | BABAI holds or settles customer funds | **Explicitly out of scope** |
| **Multiple gateways behind a payment port** | Allows provider substitution and regional/payment-method coverage | Add only when pilot evidence justifies it |

Payment completion never automatically accepts an order. Provider selection,
webhook authenticity, refund handling, reconciliation, tax/accounting and
merchant legal responsibility require validation. [Raw T68
`bbb21613-1461-4278-a34f-d4c055c03c84`; Raw T72
`bbb21c29-06e2-44d7-bd05-c2f9c28c3f4f`; Raw T216
`bbb216f2-0ccd-4871-a670-e02f94100750`; `business-model.md`;
`domain-model.md`]

## Portability and backup/restore

### Portability rules

- Keep domain modules independent of AWS SDKs where a standard port is
  sufficient.
- Keep PostgreSQL as standard SQL where practical; isolate provider-specific
  extensions.
- Put queue, Meta, payment, delivery, object storage and notification behavior
  behind adapters.
- Use containers and documented environment configuration.
- Treat AWS credits as temporary economics, not an architecture constraint.
- Record any AWS-specific choice with an exit path and a measured reason.

### Continuity baseline

The initial target is **RPO 24h/RTO 8h**, daily backups and tested restore.
Evaluate managed PostgreSQL automated backups/snapshots plus a separate
application-level backup/export where required. The exact backup retention,
point-in-time recovery, storage location, restore automation, monitoring and
restore evidence are unresolved.

Restore testing must cover:

1. database restore;
2. application configuration/secrets recovery without exposing secrets;
3. outbox/queue replay and deduplication;
4. provider callback/reconciliation recovery;
5. tenant isolation and audit continuity;
6. elapsed time against the RTO target.

No multi-region or zero-data-loss promise is made. RPO/RTO are initial
operating targets, not a completed disaster-recovery certification.

## Founder-only support operations

No hiring assumption is made for the pilot. The working support model is
founder-operated and must be capacity-capped rather than marketed as
24x7 support.

| Owner | Proposed responsibility | Hours/status | Escalation |
|---|---|---|---|
| **Manoj** | Technical incidents, architecture, provider/integration failures, data recovery and security-sensitive engineering decisions | **Open decision:** define a bounded weekly support/on-call window before pilot enrollment; no 24x7 promise | Sev-1 technical/data/security issue; coordinate with Vinay and provider support |
| **Vinay** | Merchant onboarding, menu/business-process support, restaurant communication, operational triage and pilot feedback | **Open decision:** define a bounded weekly merchant-support window before pilot enrollment; no 24x7 promise | Sev-1 merchant/payment/order impact to Manoj; provider escalation where needed |
| **Manoj + Vinay** | Pilot admission, severity review, customer communication, post-incident review and capacity stop/go decision | Shared, bounded by the agreed pilot windows | Pause onboarding when support capacity or recovery risk is exceeded |

### Support assumptions to validate

- Exact hours per week, overlap window, weekend coverage and holiday policy are
  not decided.
- Severity definitions, first-response targets, escalation contacts and
  provider support paths are not decided.
- Founder capacity is a hard pilot constraint. Do not infer a restaurant
  capacity number until support minutes, onboarding time, incidents and
  intervention frequency are measured.
- A simple capacity model is:

  ```text
  supported restaurants
    <= founder support hours available
       / measured average support hours per restaurant
  ```

- If measured demand exceeds the agreed founder envelope, pause onboarding or
  reduce scope; do not silently assume hiring, 24x7 coverage or automation
  quality that has not been proven.

These are operating assumptions/open decisions, not staffing commitments.
Founder roles are consistent with the product's direct merchant relationship
and current business-model need to measure onboarding/support cost. [Raw T25
`bbb21431-ab3d-44c1-a702-4532cabf6de5`; Raw T26
`bbb21e23-ebac-4d83-a1d7-27a40f079829`; `business-model.md`]

## Cost model and validation checklist

Before selecting an option, record monthly and per-restaurant estimates for:

- compute/runtime hours and task count;
- PostgreSQL storage, connections, backups and restore tests;
- queue requests, payload size, retries and DLQ volume;
- logs, metrics, tracing, alerting and egress;
- Meta/BSP conversation/provider charges;
- payment gateway/UPI charges, refunds and reconciliation effort;
- AI usage, if enabled, with human-review cost;
- onboarding, merchant support and incident-intervention hours;
- AWS credits applied separately from true unit cost;
- taxes and professional services.

Label each number as **measured**, **quoted**, **estimated** or **unknown**.
No public price, margin, SLO, capacity, provider fee, legal conclusion or
credit assumption should be promoted to fact without current evidence.

## Unresolved decisions and dependencies

- AWS account/credit terms, service pricing and portable baseline.
- Exact ECS/App Runner/EC2 choice after a small pilot load test.
- Managed PostgreSQL tier, backup policy and restore evidence.
- Managed queue vendor and ordering/visibility semantics.
- State-engine contract and workflow product decision.
- Meta Tech Provider approval, coexistence and BSP exit test.
- Payment provider, webhook verification, refund and accounting process.
- Founder support hours, escalation SLA and restaurant capacity cap.
- DPDPA/legal review, subprocessors, incident and security controls.
- Production SLOs, observability ownership and cost thresholds.

## Evidence index

| Topic | Raw/current evidence |
|---|---|
| Research proven infrastructure and architecture economics rather than reinvention | Raw T25 `bbb21431-ab3d-44c1-a702-4532cabf6de5`; Raw T26 `bbb21e23-ebac-4d83-a1d7-27a40f079829`; Raw T27 `a98f22a6-9cea-4cdb-8b4d-3bdb609fe72a`; `architecture.md` |
| Direct Meta target with BSP fallback | Raw T47 `1df966d4-0c16-4a9a-b8cb-4375e5c2fda7`; Raw T48 `bbb21b07-0508-4dde-94f1-60e9982ec3e8`; Raw T51 `e305d46c-dbf1-4875-b1b1-58a381a9f86a`; `architecture-lld.md` |
| Event-first reliability and flow handling | Raw T125 `bbb21b98-7460-45d5-a616-418ffbf47484`; Raw T129 `bbb21da2-975e-4aaa-b1a4-05542d023114`; Raw T264 `bbb21a7f-4d44-4cc1-8f60-1172bdcc303c`; `domain-model.md` |
| Direct merchant settlement and no customer-funds custody | Raw T68 `bbb21613-1461-4278-a34f-d4c055c03c84`; Raw T72 `bbb21c29-06e2-44d7-bd05-c2f9c28c3f4f`; `business-model.md`; `domain-model.md` |
| Founder support/economics questions | Raw T25 `bbb21431-ab3d-44c1-a702-4532cabf6de5`; Raw T26 `bbb21e23-ebac-4d83-a1d7-27a40f079829`; `business-model.md` |
| Current administrative posture | Track 4 — Architecture/Cost Options (2026-09-20); Admin Decision Packet (2026-09-20); `architecture.md`; `architecture-boundaries.md` |
