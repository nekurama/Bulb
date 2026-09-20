---
status: proposed-options
owner: BABAI Architecture
last-reviewed: 2026-09-20
sources:
  - "Admin Decision Packet (2026-09-20)"
  - nekurama.raw.chat.json
  - nekurama.chatgpt.md
  - nekurama.babai.research.md
  - docs/products/babai/architecture.md
  - docs/products/babai/architecture-lld.md
  - docs/products/babai/architecture-boundaries.md
  - docs/products/babai/brd.md
  - docs/products/babai/business-model.md
  - docs/products/babai/validation.md
  - docs/company/founders-ownership-governance.md
---

# BABAI Architecture Cost Options

## Purpose and decision status

This is a **cost and operating-options artifact**, not a final provider
selection. It translates the current architecture posture into viable pilot
shapes, cost envelopes and explicit tradeoffs so that available AWS credits
can be evaluated without overprovisioning or making AWS an architectural
dependency.

The following are **confirmed constraints**:

- TypeScript/Node modular monolith; no initial microservices or EKS.
- PostgreSQL is authoritative for transactional domain state.
- A managed queue, transactional outbox/inbox, bounded retries, DLQ or
  quarantine, reconciliation and auditability are required from the first
  pilot.
- Meta/WhatsApp and payment providers remain behind adapters.
- Customer funds settle directly to the merchant; BABAI does not operate a
  wallet or escrow by default.
- Pilot continuity target is RPO 24 hours and RTO 8 hours, with daily backups
  and a tested restore.
- AWS credits may be used only for real, right-sized usage. The credit
  balance, expiry, eligible services, tax treatment and account ownership are
  **unknown** and must be verified before any commitment.

No table below constitutes vendor approval, Meta approval, a payment-provider
selection, a production SLO, or a claim that any control is already
implemented. [Admin Decision Packet (2026-09-20); `architecture.md`;
`architecture-lld.md`; `architecture-boundaries.md`]

## Cost model conventions

All monetary figures in this document are **internal planning envelopes**, not
quotes. They are monthly INR ranges for the infrastructure portion of a
small pilot and are intentionally broad because AWS region, CPU architecture,
storage, transfer, logs, taxes, credits, uptime and traffic are not yet
known. They exclude Meta/BSP, AI-model, payment, delivery, support labour,
GST and one-time onboarding costs unless explicitly stated.

The current AWS pages describe metered dimensions rather than one universal
price: Fargate bills for requested vCPU, memory, operating system,
architecture and storage; RDS PostgreSQL adds instance hours, storage,
backup, I/O and transfer; SQS is request-metered; and AWS credits are
account/program-specific. Recalculate with the target AWS region and the
actual credit account before enrollment or a provider commitment.

### Pilot infrastructure envelopes

| Envelope | Assumptions | Planning cash range before credits | Main risk |
|---|---|---:|---|
| **Low / learning** | One small application task or container, one small single-AZ PostgreSQL instance or an equivalent pilot tier, SQS Standard or equivalent managed queue, short log retention, object-storage backups, no standby database | **₹0–₹10,000/month** | A single failure can require manual recovery; capacity and restore evidence are limited |
| **Base / controlled pilot** | One or two right-sized application tasks, managed PostgreSQL with automated backup, queue + DLQ, basic alarms, encrypted object storage, measured restore drill, minimal staging | **₹10,000–₹30,000/month** | Higher fixed cost before usage and still not a high-availability guarantee |
| **High / evidence-backed resilience** | Redundant application capacity, Multi-AZ database or equivalent, more retention/observability, isolated restore environment, NAT/load-balancer/transfer overhead where required | **₹30,000–₹100,000+/month** | Overprovisioning and AWS coupling before pilot evidence; still excludes provider pass-through fees |

The ranges are a budgeting aid only. They must not be used to publish BABAI
pricing or margin claims. The product BRD requires actual infrastructure,
provider, payment, tooling, support, failure and refund costs to be recorded
per pilot before public pricing is set. [`brd.md`; `business-model.md`;
`validation.md`]

## AWS managed deployment options

### Option A — portable container baseline

Run the same OCI container image on a small managed container or VM platform,
use managed PostgreSQL, a provider-neutral queue adapter, object storage and
centralized logs. AWS can still be used for credits where it is genuinely
cheaper, but no domain contract depends on AWS APIs.

**Advantages**

- Lowest migration friction: Node process, PostgreSQL, SQL migrations and
  queue port remain ordinary deployment concerns.
- Simple local/staging parity and a clear exit path.
- Suitable for Stage 0 while support and traffic are still unknown.

**Tradeoffs**

- The exact non-AWS host, database, queue, backup and support prices are
  unknown and require a like-for-like quote.
- Managed networking, observability and restore guarantees vary by provider.
- AWS credits may not offset the baseline unless the provider mix is
  deliberately compared.

**Cost posture:** likely the lowest fixed-cost shape, but no numerical vendor
claim is made here. Use the low envelope only after verifying backup and
restore behaviour.

### Option B — AWS ECS/Fargate + RDS PostgreSQL + SQS + S3

Package the modular monolith and worker as containers on ECS/Fargate. Use
RDS for PostgreSQL, SQS for the managed queue and S3 for encrypted backup
exports or operational artefacts. CloudWatch or an equivalent log/alert
surface is required.

**Advantages**

- Keeps a conventional Node container and a direct PostgreSQL deployment
  model.
- Fargate charges by requested resources and has small task sizes, allowing a
  measured start rather than an EKS cluster.
- SQS Standard is a simple managed at-least-once transport with a DLQ path.
- AWS credits can reduce actual cash cost if the account covers these
  services.

**Tradeoffs**

- VPC, load-balancer, public IPv4, NAT, logs and transfer can dominate a
  small workload if enabled without measurement.
- RDS, SQS and IAM APIs create cloud-specific adapters and operational
  knowledge, even though the application can remain portable.
- A second task, Multi-AZ database or long log retention should not be added
  merely to consume credits.

**Cost posture:** the base envelope is the working AWS comparison point.
Use one right-sized task and a small single-AZ database for early learning
unless an explicit continuity or load test justifies more.

### Option C — AWS App Runner + RDS PostgreSQL + SQS

Use App Runner for the HTTP application and a separate worker deployment
where supported, retaining RDS and SQS. This reduces some container-service
operations compared with ECS.

**Advantages**

- Less deployment plumbing for a conventional web container.
- Maintains an OCI image and avoids EKS.

**Tradeoffs**

- Worker, scheduled work, networking and background-process behaviour must be
  proven for the actual queue/outbox design; App Runner is not a general
  workflow engine.
- Fewer low-level controls can make cost, debugging and portability less
  predictable.
- Pricing, regional availability, egress and worker shape must be checked
  against the target account; no current quote is asserted.

**Cost posture:** potentially between the low and base envelopes, but only
  after a worker and restore proof. It is not selected over ECS.

### Option D — Lambda/API Gateway + Aurora Serverless v2 or RDS Proxy

Split HTTP and queue handlers into functions and use Aurora Serverless v2 or
RDS through a connection-management layer.

**Advantages**

- Can scale request handling down when traffic is intermittent.
- Useful if later evidence shows bursty, short-lived handlers with a strong
  operational reason for function isolation.

**Tradeoffs**

- Does not fit the initial modular-monolith execution model as directly as a
  long-running Node container.
- Database connection management, cold starts, timeouts, tracing and local
  parity add complexity.
- Aurora/serverless billing, minimum capacity, I/O and connection behaviour
  can make a small pilot more expensive or less predictable.
- Function-specific interfaces increase AWS coupling and complicate an exit.

**Cost posture:** do not use for the initial pilot solely for a theoretical
  scale or cost advantage. Revisit only with measured burst, concurrency or
  isolation evidence.

### AWS choice guardrail

The current recommendation is **not a provider choice**: compare Option A
and Option B with the same workload, backup retention, queue volume, logs,
restore drill and support assumptions. Option C is a secondary simplification
candidate. Option D is deferred. Credits are an economic input, not an
architecture requirement.

Record before using credits:

1. AWS account owner, remaining balance, expiry, eligible services and
   restrictions.
2. Region, architecture, uptime and resource sizes used in the estimate.
3. Cash cost after credits, including tax, public IPv4, NAT, transfer, logs,
   backup and snapshots.
4. Exit evidence: container image, PostgreSQL export/restore, queue replay and
   provider-adapter tests outside AWS.

## PostgreSQL options

| Option | Fit for the pilot | Cost/operations | Portability and risk |
|---|---|---|---|
| **RDS PostgreSQL, single-AZ** | Best AWS learning default for authoritative state and the 24h/8h pilot target | Managed patching and backups; instance, storage, backup, I/O and transfer are metered; exact price is region/size dependent | PostgreSQL remains portable, but RDS backup and IAM details are AWS-specific |
| **RDS PostgreSQL, Multi-AZ** | Consider only when measured availability or recovery evidence requires it | Higher fixed cost and standby/transfer implications; no current quote | Keeps PostgreSQL portability but does not remove application/provider failure modes |
| **Aurora PostgreSQL Serverless v2** | Candidate for later variable load, not an assumed pilot default | Capacity, I/O, storage and backup behaviour need a workload test; minimums and configuration may erase small-workload savings | More AWS-specific and operationally complex; export and failover tests are mandatory |
| **External managed PostgreSQL** | Viable portable baseline if backup/restore and connection limits meet the contract | Price, free tier, storage and backup terms are provider-specific and currently unknown | Stronger provider exit if standard PostgreSQL exports and migrations are tested |
| **Self-managed PostgreSQL on a VM** | Not recommended for founder-only pilot operations | May look cheap but shifts patching, monitoring, backup, restore and incident burden to the founders | Most portable technically, but weakest operational fit for RPO/RTO evidence |

The application must use explicit repository/migration boundaries, bounded
connection pools, transaction-scoped outbox writes and tested `pg_dump` or
equivalent export/restore paths. No database option permits cross-module
table ownership shortcuts. [`architecture-lld.md`; Raw T206
`128e9fdc-9032-4a5d-b627-4f0118fc3ba3`]

## Queue and outbox options

The application-facing queue port should expose enqueue, receive, visibility
extension, acknowledgement, retry, quarantine and replay-with-authorization.
The application must not leak SQS message types into domain modules.

| Option | Role | Tradeoff |
|---|---|---|
| **SQS Standard + DLQ** | Default managed-queue candidate for outbound delivery, timers, reconciliation and workers | At-least-once delivery and no global ordering; use idempotency/inbox records and aggregate-level guards |
| **SQS FIFO + DLQ** | Candidate only where a measured flow requires message-group ordering or queue deduplication | More ordering/group design and provider coupling; do not use globally when per-aggregate ordering is sufficient |
| **EventBridge + SQS targets** | Optional routing/fan-out layer after event ownership and volume justify it | Useful for integration routing, but not a replacement for the transactional outbox or a generic workflow engine |
| **Managed queue from a non-AWS provider** | Portable comparison baseline behind the same port | Provider semantics, DLQ/replay, pricing and regional guarantees must be tested; no provider is selected |
| **PostgreSQL `SKIP LOCKED` poller** | Local test harness or emergency fallback only | Portable and cheap, but it is not the committed managed-queue posture and places contention/retry/visibility operations on the database |

The durable path is:

1. Commit authoritative state and an outbox record in one PostgreSQL
   transaction.
2. Poll and publish the outbox to the selected managed queue.
3. Record inbox/idempotency state before applying an external side effect.
4. Retry transient failures with bounded backoff.
5. Quarantine non-retryable or human-action failures.
6. Reconcile provider state and replay only with explicit authorization,
   schema/version checks and an audit record.

This preserves the current at-least-once assumption; exactly-once processing
is not claimed. [Raw T115 `bbb210cc-a1ef-4ea9-b1a7-7c52f0011721`; Raw T119
`bbb211c0-c142-4837-aca7-b67a21454ec8`; Raw T125
`bbb21b98-7460-45d5-a616-418ffbf47484`; Raw T126
`e472fe3d-22d5-4595-aafd-986683b13a3c`; Raw T264
`bbb21a7f-4d44-4cc1-8f60-1172bdcc303c`; `architecture-lld.md`]

## Meta / WhatsApp provider options

The domain must retain a provider-neutral `Channel`, with WABA, phone,
provider and template identifiers held as integration references. Existing
number coexistence, approval, billing, disconnect and portability remain
validation questions.

| Option | Economics and fit | Operational tradeoff |
|---|---|---|
| **Meta Cloud API / Tech Provider path** | Direct platform path may avoid an additional BSP layer, but exact commercial outcome, eligibility, approval and account terms are unknown | Requires real onboarding, webhook verification, template/category handling, disconnect and export testing; this document does not claim approval |
| **BSP adapter (for example 360dialog, Twilio or Gupshup)** | May provide onboarding/support and a faster route, but contract, per-message/platform fees, setup, minimums and settlement of charges are provider-specific and unknown | Adds an intermediary and exit dependency; preserve provider-neutral IDs and run a provider-switch test |
| **Manual/test channel for Stage 0** | Lowest integration exposure while validating the order workflow | Does not prove production Meta onboarding or coexistence; must not be mistaken for production evidence |

Meta's current pricing documentation says that, effective July 1, 2025,
template messages are charged per delivered message by category and
recipient-country calling code, while non-template messages are free inside
an open customer-service window and utility templates inside that window are
free. Rate cards can change on the published quarterly calendar. Treat this
as a pass-through cost to model per pilot, not as a fixed BABAI margin
assumption. See the official [WhatsApp Business Platform pricing
documentation](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing).

No BSP price, Meta approval, coexistence capability, message-category
classification or contract term is selected or implied here. [Raw T37
`eadec8d3-a035-43e3-814a-6d3312001bbf`; Raw T47
`1df966d4-0c16-4a9a-b8cb-4375e5c2fda7`; Raw T51
`e305d46c-dbf1-4875-b1b1-58a381a9f86a`; Raw T65
`31e96409-07af-4d5c-a00c-fbe2a55c0433`; `architecture-lld.md`]

## Payment options and direct settlement

The payment boundary is merchant settlement, not BABAI custody. The payment
adapter must support webhook authenticity, idempotency, status reconciliation,
refund evidence and a clear separation between payment completion and order
acceptance.

| Option | Cost posture | Operational/legal tradeoff |
|---|---|---|
| **Manual UPI QR or merchant payment link** | No gateway price is assumed; bank/PSP terms, QR ownership and any link fee are unknown | Lowest integration cost and direct settlement, but manual confirmation, duplicate payment and refund reconciliation are founder/merchant work |
| **Hosted gateway on the merchant's account** | Public India pricing varies by provider and contract. For example, Razorpay's India pricing page currently lists 2% per successful domestic transaction plus 18% GST on the platform fee, with stated zero setup/AMC/refund fees; verify the merchant contract and product-specific exceptions before relying on it | Better webhooks and reconciliation, but success rates, settlement timing, refunds, KYC, chargebacks, taxes and provider terms remain open |
| **Alternative gateway adapter (Cashfree, PayU or another approved provider)** | Exact rates, minimums, settlement, refunds and support are unknown until a merchant quote and terms are available | Preserves negotiation and fallback options; increases certification and reconciliation work |
| **BABAI wallet/escrow or marketplace collection** | Not a cost option for the initial product | Violates the current direct-settlement/no-custody boundary and introduces materially different legal, reconciliation and operational obligations |

The Razorpay figure is an external public reference, not an endorsement or a
BABAI rate. See [Razorpay India pricing](https://razorpay.com/pricing/) and
record the actual merchant contract, GST treatment and settlement report
before modelling contribution. The current product and architecture sources
explicitly keep provider selection, refunds and reconciliation unresolved.
[Admin Decision Packet (2026-09-20); Raw T68
`bbb21613-1461-4278-a34f-d4c055c03c84`; Raw T72
`bbb21c29-06e2-44d7-bd05-c2f9c28c3f4f`; Raw T76
`bbb21803-3975-4faf-9eda-c51cade91dfe`; `product-definition.md`;
`domain-model.md`]

## Portability rules

The following are proposed acceptance tests before relying on a cloud
specific option:

- Build and run the same OCI image locally, in the chosen pilot environment
  and in a second provider or local Docker Compose environment.
- Keep domain modules dependent on a queue port, payment port and channel
  port; provider SDKs belong in adapters.
- Keep PostgreSQL migrations, exports, restore scripts and seed/test data in
  repository-controlled tooling. Test a clean restore, not only a snapshot
  existence check.
- Treat SQS/EventBridge, IAM, object storage and provider secrets as
  infrastructure adapters. Do not use a cloud queue as the domain event
  history or source of truth.
- Export outbox/inbox state and replay a bounded, authorized test batch in a
  non-AWS environment.
- Record provider IDs and external references separately from BABAI
  identifiers; support disconnect, re-authentication and provider replacement.
- Avoid Lambda-only handlers, proprietary database extensions and
  infrastructure-sized for credits until measured evidence justifies them.

Portability reduces exit risk but does not make providers interchangeable:
Meta approval/coexistence, payment KYC and settlement, queue delivery
semantics, regional data controls and backup tooling still require provider
specific validation.

## Backup, restore and continuity assumptions

### Baseline

- **RPO:** 24 hours.
- **RTO:** 8 hours.
- **Backup:** at least one successful database backup every 24 hours, with
  backup outcome, age and retention observable.
- **Restore test:** restore into an isolated environment at least monthly and
  after material schema/backup changes during the pilot; measure elapsed
  restore, migration, secret/configuration, application start and provider
  revalidation time.
- **Scope:** PostgreSQL authoritative state, outbox/inbox, audit records and
  the minimum configuration required to restart the modular monolith.
- **Recovery runbook:** identify the on-call founder, backup location,
  credentials/recovery path, restore commands, DNS/webhook changes, provider
  re-authentication, reconciliation and customer/merchant communication.

Daily backup does not by itself prove a 24-hour RPO: the backup must complete,
be retained, be restorable and include the state needed to reconcile
in-flight provider operations. An 8-hour RTO includes access recovery,
database restore, deployment, webhook/provider revalidation and reconciliation;
it is not only database startup time.

Retention length, cross-region copies, encryption/key ownership, point-in-time
recovery, backup export format and whether a second provider is required are
**unresolved**. Do not buy Multi-AZ, cross-region or warm-standby capacity
solely because credits are available. [Admin Decision Packet (2026-09-20);
`architecture-lld.md`; `docs/company/security-privacy-controls.md`]

## Founder-only support operations

This section is an operating **proposal and capacity guardrail**, not a claim
that the founders have accepted a rota. Manoj and Vinay are the named
founders; role, employment, availability and formal approvals remain
separate governance matters. [`docs/company/founders-ownership-governance.md`]

### Proposed hours and ownership

| Area | Primary | Secondary | Proposed coverage (IST) |
|---|---|---|---|
| Merchant onboarding, menu/catalog, staff workflow and pilot communication | Vinay | Manoj | Mon–Fri 10:00–18:00; planned Sat 10:00–14:00 |
| Runtime, security, deployment, database, queue, provider callbacks and recovery | Manoj | Vinay | Mon–Fri 09:00–18:00; planned Sat 10:00–14:00 |
| Shared overlap for incident review and merchant handoff | Manoj + Vinay | — | Mon–Fri 13:00–17:00 |
| Outside planned hours | Both | External provider support where contracted | No guaranteed 24/7 coverage; P1 best effort only |

The founders should publish one support channel and one incident log. Personal
phone numbers, credentials and unrestricted cross-tenant access do not belong
in this document. Support access should be scoped, auditable and time-bound.

### Severity and escalation

| Severity | Example | Acknowledge target | Escalation |
|---|---|---:|---|
| **P1** | All pilot ordering blocked, suspected data/security incident, duplicate/incorrect settlement risk, or unrecoverable provider outage | 30 minutes during planned coverage; best effort within 2 hours outside it | Notify both founders immediately; freeze risky automation/settlement actions; open provider incident; record customer/merchant communication |
| **P2** | One merchant workflow materially degraded, repeated webhook/queue failures, or restore/reconciliation concern without confirmed loss | 4 business hours | Primary owner investigates; secondary joins if not mitigated same day; escalate to provider after evidence capture |
| **P3** | Non-blocking defect, configuration request, report or UX issue | 1 business day | Batch into planned work; no emergency deployment unless severity increases |

No response target is a vendor SLA or customer promise until provider contracts,
monitoring and staffing support it.

### Capacity limits and expansion gates

Until measured support data exists:

- **Stage 0:** one active restaurant, one branch and one number.
- **Stage 1:** no more than three active restaurants concurrently under
  founder-only support.
- **Combined support budget:** target no more than 24 founder-hours/week,
  including onboarding, incidents, merchant communication, reconciliation and
  restore drills.
- **Steady-state guardrail:** target no more than 2 support hours per active
  restaurant per week, excluding a one-time onboarding budget of up to 6
  hours per restaurant.
- **Pause enrollment** when the combined support budget is exceeded for two
  consecutive weeks, P1 incidents recur, unresolved P2 backlog exceeds one
  business day, or restore/reconciliation work is not current.
- The product's gradual ceiling of up to 10 restaurants is not a promise that
  two founders can support 10 restaurants alone. Reaching that ceiling
  requires measured evidence, reduced manual work, documented provider
  escalation and either additional support capacity or an explicitly accepted
  founder workload.

These limits protect the validation sequence from turning AWS savings into
unbounded founder on-call work. They are proposed assumptions to validate
against Stage 0/Stage 1 data, not new product thresholds. [`brd.md`;
`validation.md`; `nekurama.babai.research.md`]

## Unresolved decisions and required evidence

1. Verify AWS credit account balance, expiry, eligible services, ownership and
   tax treatment.
2. Price Option A and Option B using the same region, workload, backup,
   logging, queue, transfer and restore assumptions.
3. Select the first PostgreSQL option only after a restore drill and measured
   connection/load test.
4. Prove outbox/inbox, retries, DLQ, reconciliation and authorized replay on
   the selected queue.
5. Complete Meta onboarding/coexistence and a provider-exit test; no approval
   is assumed.
6. Obtain merchant payment-provider terms, webhook/refund/reconciliation
   evidence and direct-settlement confirmation.
7. Measure founder support effort, P1/P2 rates, provider response and actual
   per-pilot contribution before expanding beyond three active pilots.
8. Have legal, privacy and finance owners validate DPDPA roles, notices,
   retention/deletion, subprocessors, GST and payment responsibilities.

## Source and pricing references

### Current repository and raw evidence

- `docs/products/babai/architecture.md` — committed modular-monolith,
  PostgreSQL, managed-queue, adapter, direct-settlement and continuity
  posture.
- `docs/products/babai/architecture-lld.md` — module ownership,
  transaction/outbox/inbox rules, provider ports and RPO/RTO baseline.
- `docs/products/babai/architecture-boundaries.md` — deployment-boundary,
  provider and recovery constraints.
- `docs/products/babai/brd.md`, `business-model.md` and `validation.md` —
  staged pilot, cost/contribution measurements and unresolved thresholds.
- `nekurama.babai.research.md` — 19-business field research, direct-payment
  proposition, pilot sequence and explicit unvalidated cost/support risks.
- `docs/company/founders-ownership-governance.md` — Manoj and Vinay founder
  identity and governance caveats.
- `nekurama.raw.chat.json` — Raw T37/T47/T51/T65 (channel/provider boundary);
  T68/T72/T76 (direct settlement and payment custody); T115/T119/T125/T126
  (state, retries and durable delivery); T153/T154/T157 (coarse boundaries
  and modular starting shape); T163 (internal protocol remains
  evidence-specific); T209/T216/T218 (human authority and corrections);
  T264/T268 (event integrity/recovery); T410/T414/T434 (AI is assistive, not
  authoritative).
- **Admin Decision Packet (2026-09-20)** — current task input for the
  starting posture, direct settlement, portability, continuity and staged
  pilot constraints. It is not evidence of provider approval or completed
  operations.

### External pricing pages to recheck before commitment

- [AWS Fargate pricing](https://aws.amazon.com/fargate/pricing/) — resource
  dimensions, task duration, storage and additional charges.
- [Amazon RDS for PostgreSQL pricing](https://aws.amazon.com/rds/postgresql/pricing/) —
  instance, storage, backup, I/O and transfer dimensions.
- [Amazon Aurora pricing](https://aws.amazon.com/rds/aurora/pricing/) —
  capacity, storage, I/O and commitment considerations.
- [Amazon SQS pricing](https://aws.amazon.com/sqs/pricing/) — request-metered
  queue pricing and current free-tier terms.
- [AWS startup credits](https://aws.amazon.com/startups/credits/) — program
  entry point; actual balance and eligibility remain account-specific.
- [WhatsApp Business Platform pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing) —
  template/category/country and customer-service-window rules.
- [Razorpay India pricing](https://razorpay.com/pricing/) — public reference
  only; merchant contract and product exceptions control.
