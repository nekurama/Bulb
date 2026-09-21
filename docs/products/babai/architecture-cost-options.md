---
status: proposed-options
owner: BABAI Architecture
last-reviewed: 2026-09-21
sources:
  - "Tier Scope Decision (2026-09-21)"
  - "Founder Scale/Cost Baseline (2026-09-21)"
  - "Admin Decision Packet (2026-09-20)"
  - nekurama.raw.chat.json
  - nekurama.chatgpt.md
  - nekurama.babai.research.md
  - docs/products/babai/architecture.md
  - docs/products/babai/architecture-lld.md
  - docs/products/babai/architecture-boundaries.md
  - docs/products/babai/brd.md
  - docs/products/babai/tier-feasibility-matrix.md
  - docs/products/babai/business-model.md
  - docs/products/babai/validation.md
  - docs/company/founders-ownership-governance.md
  - "Tier scope decision (2026-09-21; current task input)"
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

## Provisional LITE / BASE / PRO cost and operating implications

The tier matrix is an internal scope experiment, not a public price or final
entitlement contract. It must be implemented through policy and adapter
boundaries in the modular monolith; it must not create one deployment,
database or provider account per tier.

| Cost/operating surface | LITE | BASE | PRO |
|---|---|---|---|
| Provider pass-through | WhatsApp/channel and any enabled menu transport only; no payment/delivery provider workflow | Payment and delivery fees only where validated; direct merchant settlement remains separate from BABAI billing | Same plus approved advanced API/provider pass-throughs |
| Menu/promotion/combo usage | Menu updates capped at 3/month; no promotion/combo usage | Basic promotion/combo requests capped at 3/day, each active one day or a configured short period; menu limits measured and approved | Higher limits only with measured provider/API/support capacity and approval |
| AI/API cost | Limited menu/order assistance, attributed per tenant and interaction | Bounded menu/order/payment/delivery assistance, with API and provider calls attributed separately | Advanced allowlisted conversational/API tasks; model, API, provider and human-review cost must be separately attributed |
| Support cost | Human takeover available; no operations-automation promise | Takeover, payment/delivery exceptions and reconciliation are explicit support drivers | Integration failures, advanced task review, quotas and reconciliation require additional support attribution |

Cost attribution must retain pre-credit and post-credit infrastructure views
and separate shared platform cost from tenant/tier-variable usage. Emit
records keyed by `tenantId`, `branchId`, `tier`, `capability`,
`providerOrModelRef`, `automationMode`, `humanTakeover`, quantity/duration,
outcome, deployment version and assumptions version. At minimum, report
runtime/database/queue, provider, payment, delivery, AI/API, support/takeover,
reconciliation, refund/failure and restore/recovery classes separately.
Provider throttling, quota rejection, retries, DLQ and human intervention are
cost-bearing outcomes, not zeros.

“Full access” in PRO must not be translated into unrestricted AI or unlimited
provider usage. AI remains a non-authoritative proposer; deterministic order,
payment, fulfillment, availability, promotion, combo, permission and consent
services plus authorized humans own controlled state. Outbox/inbox,
idempotency and reconciliation remain required for every enabled external
workflow, including BASE payment/delivery and PRO advanced integrations.

No tier row approves a provider, Meta onboarding, payment contract, delivery
contract, model, rate, AWS service or final deployment topology. Revisit limits
after measured pilot usage, provider terms, support effort, failure/recovery
evidence and legal/accounting review.

## Recommended pilot posture and decision record

**Working recommendation:** use a small, containerized TypeScript/Node
modular monolith with a **stateless lightweight gateway** and idempotent
conversation/state workers, standard PostgreSQL on the smallest managed tier
that passes the restore/load tests, and a managed queue with a transactional
outbox/inbox and DLQ path. Run only the low/base infrastructure envelope until
measured traffic, recovery or support evidence requires more. This is a
cost-sensitive pilot posture, not a vendor or production-availability
commitment.

| Decision area | Pilot posture | Input required before commitment |
|---|---|---|
| Runtime | Compare portable OCI deployment with AWS ECS/Fargate; use the smallest viable API/worker capacity and no EKS | AWS account/credits, region, network design, workload estimate and comparable non-AWS quote |
| Database | Managed standard PostgreSQL, initially single-AZ if it passes the continuity test | Tier, storage, connection limits, backup retention, restore evidence, region and rate |
| Queue/outbox | Managed at-least-once queue behind a port; PostgreSQL outbox/inbox, bounded retries, DLQ/quarantine and authorized replay | Queue provider, ordering/visibility semantics, request/retry/DLQ rates, replay tooling and cost |
| Meta/WhatsApp | Provider-neutral `Channel`; target Meta Cloud API/Tech Provider, with a BSP adapter or test channel if onboarding blocks | Meta approval, coexistence eligibility, messaging rules, billing, disconnect/export and BSP terms |
| Payments | Merchant-owned UPI/gateway adapter with direct settlement; manual confirmation is a pilot fallback | Merchant KYC/contract, current rates/taxes, webhook/refund/reconciliation evidence and legal/accounting review |
| Observability | Structured redacted logs, core metrics, actionable alerts and correlation IDs; sampled traces only if useful | Signal ownership, retention, alert thresholds, tooling price, data residency and support windows |
| Continuity | Daily successful backups and tested isolated restore against RPO 24h/RTO 8h | Backup location/retention, encryption/key ownership, restore runbook, measured elapsed time and reconciliation evidence |
| Founder support | Manoj owns technical/recovery escalation; Vinay owns merchant operations; no hiring or 24x7 assumption | Accepted weekly capacity, coverage windows, provider escalation terms and restaurant admission cap |

The recommendation intentionally avoids Aurora, Multi-AZ, Kafka, EKS,
multi-region recovery, long log retention and other fixed-cost resilience
features until evidence justifies them. AWS credits may lower cash spend, but
the true cost model must retain pre-credit cost, founder hours, provider
pass-throughs and tax. Provider choices, credits, rates, legal approvals and
production SLOs remain **unresolved/input-required**.

## Tier scope and 3/4/3 pilot sensitivity

LITE, BASE and PRO are **provisional experiments**, not published prices or
unlimited plans. All tiers share the same modular monolith, deterministic
domain state, provider adapters, outbox/queue and human-control boundary.

| Tier | Integration/capability implication | Main cost drivers and controls |
|---|---|---|
| **LITE** | Catalog/menu, availability-aware information, basic conversation and human escalation | Low Meta/AI/support usage; strict conversation/API quotas; no implied autonomous payment, delivery or unrestricted automation |
| **BASE** | Structured cart/order, pickup, direct payment initiation/recording, transactional notifications and staff operations | Meta utility traffic, payment gateway/UPI reconciliation, queue/worker load and support interventions; deterministic order/payment state |
| **PRO** | Bounded delivery/provider integrations, advanced APIs/webhooks, bulk/multi-branch operations, richer automation and higher measured quotas | Provider/API fees, delivery, webhook/retry/DLQ/reconciliation operations, AI usage and support complexity; no bypass of policy, consent or provider throttles |

AI is advisory in every tier. PRO may increase recommendation/draft/bounded
automation scope, but cannot directly commit orders, payments, permissions,
consent, refunds, fulfillment or other controlled business state. “Full access”
means configured product capability, not unrestricted AI or tenant access.

### 3/4/3 sensitivity

For a ten-restaurant pilot, use **3 LITE / 4 BASE / 3 PRO** as one provisional
scenario. It is not a pricing decision. Instrument:

- infrastructure and queue usage by tier;
- Meta/BSP and provider messages/webhooks;
- payment and delivery pass-through/reconciliation;
- AI calls, latency, fallback and human-review time;
- onboarding, support, incident, refund and remediation hours;
- rate-limit hits, throttling, retries and DLQ events.

Sensitivity tests should move one restaurant at a time between tiers and compare
low/base/high provider, AI, API, support and failure costs. No tier rate is
treated as a vendor fact until current provider terms and pilot invoices are
available. [Tier Scope Decision (2026-09-21); `business-model.md`;
`validation.md`; `domain-model.md`]

### Tier rate-limit and integration guardrails

- LITE receives the lowest request/message/concurrency envelope and can be
  degraded to information plus human escalation under pressure.
- BASE receives the normal ordering envelope, but queue admission, payment
  idempotency and provider throttles remain mandatory.
- PRO receives higher **configured** quotas only after load and support
  evidence; advanced API integrations require adapter-specific credentials,
  scopes, callbacks, retries, DLQ/reconciliation and audit.
- A tier never overrides tenant isolation, authorization, consent,
  availability, payment/order separation, provider `Retry-After` or global
  backpressure.

Exact quotas, integration catalog, tier prices, AI budgets, support SLAs and
promotion/combo benefits remain unresolved.

## Founder Decision Packet: recommended now / revisit when

| Area | Recommended now | Revisit when |
|---|---|---|
| Runtime | **ECS/Fargate is the default AWS pilot candidate** after account/credit, region, like-for-like cost and restore checks; keep a portable OCI image and worker contract | App Runner proves a simpler worker path, or EC2's measured all-in cost outweighs its founder operations burden |
| Database | Small managed standard PostgreSQL tier, initially single-AZ if restore and load evidence pass | Measured recovery, availability or connection/load evidence justifies Multi-AZ, Aurora or another managed PostgreSQL option |
| Queue/outbox | Managed at-least-once queue plus PostgreSQL outbox/inbox, bounded retries and DLQ/quarantine | Measured ordering, fan-out, throughput or workflow needs justify FIFO/event bus/broker/workflow product |
| Object storage/CDN | Encrypted private object storage for backups and controlled artefacts; CDN only for public static assets, not private domain data | Public asset traffic, measured transfer, cacheability and access-control evidence justify CDN configuration |
| Secrets/MFA | Managed secret store candidate, short-lived workload credentials, founder MFA/security keys and audited break-glass access | Rotation, access review, tenant isolation or incident evidence requires stronger controls |
| CI/CD | Immutable image build, tests, staged smoke, manual promotion and backward-compatible migrations | Deployment frequency and evidence support automated promotion with the same rollback controls |
| Observability | Redacted structured logs, core metrics, backup/restore signals and actionable alerts; sampled traces only where useful | Pilot incident volume, debugging time or SLO evidence justifies expanded retention/tracing |
| Support | Founder-only coverage with Stage 0/Stage 1 caps and no 24x7 promise | Support budget, provider escalation and paid-pilot evidence justify a broader operating model |
| AWS credits | Apply credits to right-sized measured services after account/expiry/eligibility verification | Credit expiry, cash-vs-credit comparison or usage growth changes the economics |

### Proposed cost and capacity stop gates

These are **planning guardrails**, not approved budgets:

- Keep pre-credit monthly infrastructure in the low/base envelopes while
  learning: **₹0–₹30,000/month**.
- Require founder review before entering the high infrastructure envelope:
  **above ₹30,000/month pre-credit** or any commitment to Multi-AZ, Aurora,
  EKS, Kafka, multi-region or long-retention observability.
- Require a total-expenditure review when projected monthly pilot cash spend
  (infrastructure, providers, payment fees, tooling, remediation and any
  approved founder opportunity-cost view) exceeds **₹50,000/month**. The
  founder must approve the actual budget before enrollment; this is not a
  pricing or margin decision.
- Pause new restaurant enrollment if combined founder support exceeds
  **24 hours/week**, steady-state support exceeds **2 hours per active
  restaurant/week**, P1 incidents recur, unresolved P2 work exceeds one
  business day, or restore/reconciliation work is not current.
- Do not expand from Stage 0 to Stage 1, or toward the 10-restaurant
  hypothesis, until cost, support, restore and provider evidence is recorded.

The expenditure trigger includes pre-credit and post-credit views. A credit
that reduces cash spend but increases pre-credit commitment still requires
review. Support time must be reported separately from infrastructure so AWS
savings cannot hide an unsustainable founder operating burden.

## Scale baseline: traffic and staged capacity

The **Founder Scale/Cost Baseline (2026-09-21)** supplies the planning traffic
inputs below. They are workload scenarios, not observed production load or
capacity claims:

- Average completed order: **54 requests**.
- Heavy completed order: **90 requests**.
- Planning volume: **50 completed orders/day/restaurant**.
- 500 restaurants: 25,000 orders/day.
- 1,000 restaurants: 50,000 orders/day.

At an even 24-hour distribution, the request-rate scenarios are:

| Restaurants | 54 requests/order | 90 requests/order | Interpretation |
|---:|---:|---:|---|
| 500 | 1.35M requests/day; **15.6 average RPS** | 2.25M requests/day; **26.0 average RPS** | Scale test band, not a launch target |
| 1,000 | 2.70M requests/day; **31.3 average RPS** | 4.50M requests/day; **52.1 average RPS** | Higher evidence band; requires measured burst distribution |

The even-distribution RPS values are not peak RPS. The load test must replay
realistic restaurant/daypart bursts, retries, provider callbacks and queue
redelivery. P90/P99 gateway targets below are **provisional acceptance
thresholds for internal load testing**, not customer SLOs:

| Signal | Stage 0/1 provisional gate | 500/1,000-restaurant evidence gate |
|---|---:|---:|
| Stateless gateway P90, excluding provider latency | ≤300ms | ≤300ms sustained |
| Stateless gateway P99, excluding provider latency | ≤1s | ≤1s sustained; investigate any >2s |
| Queue age P90 | ≤30s | ≤30s; no unbounded growth |
| Oldest outbox record | ≤60s | ≤60s; alert before breach |

### Staged deployment posture

| Stage | Cheapest quality-preserving posture | Entry/exit evidence |
|---|---|---|
| **Stage 0 — one restaurant** | Portable OCI gateway + worker on a managed VM/container baseline; managed PostgreSQL; managed queue/outbox; private object storage; basic redacted observability | One complete restore drill, idempotency/retry/DLQ test, provider callback test, and founder support within agreed window |
| **Stage 1 — up to three restaurants** | Same portable shape or Lightsail/EC2-equivalent fallback if its measured all-in cost is lower and restore/patch burden is accepted; separate gateway/worker capacity model | 15-minute load tests, DB/pool/backpressure evidence, provider throttling test, support ≤24 founder-hours/week |
| **Stage 2 — higher evidence band** | ECS/Fargate + managed PostgreSQL/queue when traffic, failure isolation, observability or support evidence justifies managed separation | 500/1,000-restaurant scenario test, P90/P99 and queue gates, restore ≤RTO, cost and portability review |

No 2x2-vCPU gateway configuration proves system capacity. PostgreSQL
contention, worker throughput, provider throttling, AI latency/cost, queue
age, retries and external callback behavior must be tested together. The
gateway is only one part of the system.

## Stateless gateway and bottleneck protections

The gateway should authenticate/verify the request, resolve channel and
tenant context, perform bounded validation, accept an idempotency key and
enqueue a typed command. Conversation/state work and provider side effects
run in idempotent workers. The gateway must not hold conversation state in
process memory, perform long provider calls synchronously, or make a chain of
per-hit PostgreSQL transactions merely to acknowledge a request.

### PostgreSQL per-hit transaction protections

- Keep one bounded transaction for the authoritative command and outbox write;
  avoid read-then-write chains that multiply round trips.
- Use aggregate/version checks and idempotency records to collapse retries.
- Use indexes and projections for hot reads; do not add cross-module table
  reads to save one request.
- Bound gateway and worker connection pools separately; reserve capacity for
  migrations, admin recovery and reconciliation.
- Monitor pool exhaustion, wait time, lock time, transaction retries, deadlocks,
  CPU, I/O and oldest outbox age.
- Apply per-tenant/branch write limits and queue admission control before the
  database becomes the backpressure boundary.

### Rate limiting, backpressure and retry

- Apply layered limits: provider/channel, tenant/branch, identity/session and
  gateway/IP where appropriate.
- Prefer token-bucket or leaky-bucket limits with explicit `Retry-After`;
  exact values remain load-test inputs.
- When queue age or DB pool pressure crosses a provisional gate, return a
  bounded accepted/deferred response, stop non-critical work and preserve
  business-critical ordering/payment reconciliation.
- Retry only transient failures with exponential backoff and jitter; honor
  provider throttling and `Retry-After`.
- Use bounded attempts, quarantine/DLQ and human escalation for poison or
  non-retryable messages. Never retry payment/settlement side effects without
  an idempotency key and reconciliation record.

### Provider throttling and safe caching

- Keep provider quotas and concurrency limits in adapter policy, not domain
  modules.
- Queue outbound Meta/payment/delivery calls and use per-provider,
  per-tenant/channel throttles.
- Cache only safe, versioned or immutable data: published menu revisions,
  tenant configuration and provider metadata with explicit TTL/version keys.
- Do not cache authoritative order, payment, consent, permission or
  availability decisions as a source of truth.
- Invalidate or bypass caches on publication, permission, payment, consent and
  availability changes; log cache version/provenance for diagnosis.

## 15-minute load-test and migration gates

Every stage must run repeated **15-minute windows** after a warm-up period and
record both the 95th/99th percentile and worst observed values. The exact
thresholds are provisional until real pilot distributions are known.

| Gate | Measure every 15 minutes | Provisional action |
|---|---|---|
| Gateway | RPS, P90/P99, 5xx/429, event-loop/CPU and memory | Scale gateway only after confirming downstream health; rollback on error or latency regression |
| PostgreSQL | CPU, active/idle pool, wait time, lock/deadlock rate, transaction retries, I/O and connection saturation | Reduce concurrency/backpressure, tune query/index/pool, or scale database only with evidence |
| Queue/outbox | oldest outbox age, queue age, depth, worker throughput, retry and DLQ counts | Add worker capacity or slow admission; quarantine poison messages and reconcile |
| Providers | callback/send latency, throttles, 429/5xx, timeout and retry rate by provider/tenant | Honor throttling, delay/requeue, switch only through the adapter and record reconciliation |
| AI | latency, failures, cost per accepted interaction and fallback rate | Keep AI advisory; fall back to deterministic/human path, never block authoritative state indefinitely |
| Recovery | backup age, last success, restore elapsed time, replay/reconciliation result | Block stage advancement if restore cannot meet the 8-hour target or replay is unsafe |
| Support | Manoj/Vinay hours, incidents, P1/P2 backlog and manual interventions/restaurant | Pause enrollment when founder ceilings or recovery ownership fail |

### Migration trigger

Move from the portable managed-VM/container band toward ECS/Fargate and
managed PostgreSQL/queue separation only when at least one of these is
measured and sustained across repeated windows:

- gateway P90/P99 breaches after stateless code and downstream protections;
- DB CPU/pool/lock saturation or transaction latency remains the bottleneck
  after query/index/idempotency fixes;
- queue age/outbox age grows despite bounded worker capacity;
- provider throttling or callback volume requires independent worker scaling;
- failure isolation, auditability or restore operations exceed founder-safe
  handling;
- the cost model shows the higher managed posture is cheaper than founder
  operations and recovery risk.

At **500+ restaurants**, founder-only support is an explicit replacement
trigger: the system must have an approved replacement support/on-call model
before accepting that scale. This is not a hiring assumption or a commitment
to reach 500; it is a stop condition against silently scaling founder
operations.

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

## New scale and cost baseline

This section is the canonical planning model for the next capacity and cost
review. It uses the founder inputs exactly:

- **54 average gateway/application requests per order**;
- **90 requests per heavy-case order**;
- **50 orders per day per restaurant**;
- modeled populations of **500 and 1,000 restaurants**; and
- conversion sensitivities of **10%, 25%, 50% and 100%**.

Here, `conversion` is a traffic/order-conversion sensitivity applied to the
50-orders-per-restaurant daily baseline. It is not a paid-subscription,
revenue or customer-conversion claim. No request volume below is observed
production traffic.

### Traffic formulas and modeled RPS bands

For `N` restaurants, conversion `c`, and `q` requests/order:

```text
orders_per_day       = N * 50 * c
requests_per_day(q)  = orders_per_day * q
mean_rps(q)          = requests_per_day(q) / 86,400
busy_rps(q)          = 5 * mean_rps(q)
stress_rps(q)        = 10 * mean_rps(q)
```

The 1x, 5x and 10x bands are load-test bands, not a claim about observed
peaks. The 5x band is a busy-period test and the 10x band is a burst/backlog
test. Capacity is accepted only after the gateway, worker, database and
provider signals stay within the stage gates below for the specified
15-minute window.

| Restaurants | Conversion | Orders/day | Avg requests/day | Avg mean RPS | Heavy requests/day | Heavy mean RPS |
|---:|---:|---:|---:|---:|---:|---:|
| 500 | 10% | 2,500 | 135,000 | 1.563 | 225,000 | 2.604 |
| 500 | 25% | 6,250 | 337,500 | 3.906 | 562,500 | 6.510 |
| 500 | 50% | 12,500 | 675,000 | 7.813 | 1,125,000 | 13.021 |
| 500 | 100% | 25,000 | 1,350,000 | 15.625 | 2,250,000 | 26.042 |
| 1,000 | 10% | 5,000 | 270,000 | 3.125 | 450,000 | 5.208 |
| 1,000 | 25% | 12,500 | 675,000 | 7.813 | 1,125,000 | 13.021 |
| 1,000 | 50% | 25,000 | 1,350,000 | 15.625 | 2,250,000 | 26.042 |
| 1,000 | 100% | 50,000 | 2,700,000 | 31.250 | 4,500,000 | 52.083 |

For example, the 1,000-restaurant, 100%-conversion heavy case is 52.083
mean RPS, 260.417 RPS at 5x, and 520.833 RPS at 10x. These are planning
inputs for a test harness and admission controller, not a throughput promise.
**A two-gateway or 2x2-vCPU gateway setup does not prove any of these bands.**
Only a repeatable load test with the real request mix, provider stubs/rate
limits, queue, PostgreSQL pool and failure injection can establish capacity.

### Cheapest quality-preserving staged options

The comparison keeps the same OCI image, queue port, PostgreSQL schema and
backup/restore contract. It changes the amount of platform automation, not
the domain architecture.

| Stage/evidence band | Runtime option | Quality-preserving boundary | Why it is cheapest at this band | Do not accept without |
|---|---|---|---|---|
| Stage 0 / learning | **Managed VM or managed container baseline** (one OCI API/worker image, managed PostgreSQL, managed queue, private object storage) | Keep the gateway stateless; do not self-manage authoritative PostgreSQL; preserve outbox/inbox and tested restore | Lowest operational surface while traffic and support are unknown | Queue replay, backup restore, pool limits, worker idempotency and a measured 15-minute smoke/load test |
| Stage 0 / low-cost AWS comparison | **AWS Lightsail or small EC2 + containers**, with managed PostgreSQL and managed queue | Host is replaceable and disposable; no domain state or queue durability on local disk | Lower apparent compute cost than a fully managed container platform | Patch/replacement runbook, host failure drill, monitoring, encrypted backups, restore within RTO and founder time budget |
| Stage 1 / evidence-backed growth | **ECS/Fargate + managed PostgreSQL + managed queue** | Same OCI boundary and adapter ports; separate API and worker scaling; no EKS requirement | Higher platform cost buys less host toil, repeatable worker capacity and clearer scaling signals | Like-for-like cost, 500-restaurant load bands, provider throttling test, restore drill and support automation/replacement plan |
| Stage 2 / higher evidence | **ECS/Fargate with independently scaled gateway/workers + managed PostgreSQL/queue** | Add redundancy or database tier only when measured gates require it; retain portable exports | Quality-preserving way to handle the 1,000-restaurant model without premature microservices | 1,000-restaurant stress bands, queue/DLQ replay, pool saturation test, provider contract limits and an approved operating budget |

Lightsail/EC2 is a cost fallback, not permission to run PostgreSQL or a durable
queue on the host. ECS/Fargate is the higher-evidence candidate because it
preserves OCI portability while reducing host replacement work. The exact
provider, region, instance/task sizes, credit eligibility, tax and monthly
price remain unresolved until a like-for-like quote and test are recorded.

### Gateway, worker and PostgreSQL protection rules

The gateway is a **stateless, lightweight admission layer**. It authenticates
and verifies provider signatures, validates payload shape, applies rate limits,
assigns correlation/idempotency metadata, acknowledges only after durable queue
acceptance, and returns bounded responses. It does not hold conversation
state, perform provider fan-out, run workflow transitions, or load an
aggregate on every hit. No sticky sessions are required.

Conversation/state work runs in idempotent workers:

1. accept the raw inbound event into the managed queue;
2. deduplicate by provider event ID plus tenant/channel scope;
3. resolve context and execute only the required domain transition;
4. commit authoritative state, outbox and audit rows atomically when a
   transition is needed; and
5. acknowledge the queue message only after the effect is durable.

This means **not every gateway hit creates a PostgreSQL transaction**. Read
only menu/configuration responses may use a tenant-scoped, versioned cache.
Typing/presence and duplicate webhook noise may be coalesced or dropped
according to policy. Orders, payments, permissions, consent, inventory-like
availability and reconciliation truth are never served from an unvalidated
cache. A cache key must include tenant/branch/channel and schema or revision;
short TTLs, explicit invalidation and fail-closed behavior are required.

Protect PostgreSQL with the following planning rules:

- reserve at least 20% of database connections for migrations, admin and
  recovery; application pools use at most 60% of the provider's advertised
  connection ceiling;
- distribute the application pool as
  `floor(0.60 * db_max_connections / (api_replicas + worker_replicas))`;
- alert at 60% pool usage or 100 ms p95 pool wait; stop admission or add
  worker capacity before connection exhaustion;
- batch outbox publishing and non-authoritative telemetry, and bound worker
  concurrency; batching must not combine unrelated aggregate transitions;
- keep transactions short and scoped to one owning module plus outbox/audit;
  never hold a transaction while calling Meta, payment, delivery or an AI
  provider; and
- use projections or cacheable published revisions for read-heavy paths
  instead of per-hit authoritative reads.

### Rate limits, backpressure and provider throttling

These are initial admission-control defaults to validate in load tests, not
provider or customer promises:

| Scope | Sustained limit | Burst limit | Backpressure action |
|---|---:|---:|---|
| One restaurant/channel | 2 requests/s | 10 requests/s for 30 s | Return 429 with `Retry-After`; preserve provider webhook acknowledgement rules |
| One provider account | 100 requests/s | 250 requests/s for 30 s | Token-bucket throttle; queue accepted work and stop non-essential sends |
| Gateway fleet | Stage-specific tested ceiling | 2x the tested 15-minute ceiling only during a controlled test | Return 429 for tenant overload and 503 for global overload; never let overload exhaust PostgreSQL |

The provider account limits are placeholders until Meta/payment/delivery
contracts supply actual quotas. Each adapter must have its own token bucket,
concurrency cap, timeout and `Retry-After` handling. Provider throttling is
not a reason to increase database concurrency.

Transient work retries at most five times with jittered delays of
`1s, 5s, 30s, 5m, 30m`; validation, authentication, policy and other
non-retryable failures go directly to quarantine/DLQ. A side-effecting
request must carry an idempotency key recognized by the adapter. After the
retry budget, retain the original event, error class, attempt history and
tenant scope for authorized replay. DLQ age and retry rate are admission
signals, not merely dashboard metrics.

### Stage 0/1/2 capacity gates

These are **infrastructure capacity stages**, distinct from the commercial
pilot onboarding stages in `brd.md` and `validation.md` (which cap early
founder-supported enrollment at one, three and then up to ten restaurants).
Commercial onboarding must not jump to the scale evidence stage merely
because a synthetic load test passes.

Each row is evaluated over a rolling **15-minute** window at the relevant
load-test band. Green permits the stage; amber requires correction and a
repeat; red blocks expansion or rolls back. Thresholds are guardrails for
evidence, not production SLO commitments.

| Signal | Green | Amber | Red / action |
|---|---|---|---|
| Gateway latency and errors | p95 <= 300 ms, p99 <= 750 ms, 5xx < 0.5% | p95 300-500 ms, p99 750-1,000 ms, or 5xx 0.5-1% | p95 > 500 ms, p99 > 1 s, or 5xx >= 1%; shed load/rollback |
| PostgreSQL CPU/connections | CPU < 60%; pool usage < 60%; pool-wait p95 < 100 ms | CPU 60-70%; pool 60-70%; wait 100-250 ms | CPU > 70% or pool > 70% for 15 min; stop traffic growth, reduce concurrency or resize |
| Queue age/outbox age | oldest queue item < 30 s; oldest outbox < 60 s | 30-120 s or outbox 60-300 s | queue > 120 s or outbox > 300 s; pause enrollment and drain workers |
| Provider latency/throttling | p95 < 2 s; throttling < 1%; adapter timeout < 0.5% | p95 2-5 s; throttling 1-5% | p95 > 5 s, throttling > 5%, or repeated auth failure; stop non-essential sends and escalate |
| Retry/DLQ | retry < 2%; DLQ < 0.1% of messages and no growing poison cohort | retry 2-5% or DLQ 0.1-0.5% | retry > 5%, DLQ > 0.5%, or any unresolved settlement/order-safety poison cohort; quarantine and investigate |
| Restore evidence | latest drill completes < 4 h and RPO evidence <= 24 h | 4-8 h or evidence is incomplete | > 8 h, failed restore, or missing required state; block expansion |
| Founder support | <= 16 combined h/week and <= 2 min/restaurant/week at scale | 16-24 h/week or support trend rising for two windows | > 24 h/week, P1 recurrence, unresolved P2 > 1 business day, or support is not automatable; stop onboarding |

Stage entry is cumulative:

- **Stage 0:** one-to-ten-restaurant pilot; prove gateway admission,
  worker idempotency, outbox/inbox, cache safety, restore and the above
  signals at 10% and 25% sensitivity. Existing founder-only support may be
  used only inside the documented 24-hour/week ceiling.
- **Stage 1:** 500-restaurant model; test 10/25/50/100% sensitivities at
  average and heavy request mixes, including the 5x busy and 10x stress bands.
  Do not proceed unless worker automation, provider quotas and replacement or
  staffed support are approved. Founder-only support is not assumed to scale.
- **Stage 2:** 1,000-restaurant model; repeat the same evidence with
  independently scalable gateway/worker capacity and managed PostgreSQL/queue.
  Add redundancy or a larger database only when red/amber evidence requires
  it, not because the modeled population is large.

### Founder-only support failure and replacement trigger

The hard founder ceiling is 24 combined support hours/week. The maximum
restaurant count supportable at a measured steady-state burden `s` is:

```text
founder_supported_restaurants = floor(24 hours/week / s hours/restaurant/week)
```

At the existing 2-hours/restaurant/week guardrail, the ceiling is 12
restaurants, not 500 or 1,000. Even if automation reduces the burden to the
absolute founder ceiling, 500 restaurants allow only **2.88 minutes per
restaurant per week**, and 1,000 allow only **1.44 minutes**. Therefore
founder-only support **fails at 500+ by default**. Before Stage 1, common
onboarding, menu, reconciliation and incident work must be automated or
replaced by documented support capacity; otherwise enrollment stops. A scale
trigger is any forecast above 24 founder-hours/week, support above the
per-restaurant minute budget, two consecutive amber support windows, or a P1
recurrence. No hiring, outsourcing or 24x7 coverage is silently assumed.

### ₹25L+ income-trigger unit sensitivity

The income trigger is unresolved as **₹25,00,000+ per month or per year**.
Do not choose a pricing, margin or staffing conclusion until the period is
decided. For a sensitivity with `N` restaurants and conversion `c`, the
required income per active/converting restaurant is:

```text
required_unit_income = income_trigger / (N * c)
```

The table shows the unit amount if the trigger is allocated across the
converting restaurant population. It intentionally does not claim that the
traffic conversion `c` equals paid subscription conversion.

| Restaurants | Sensitivity | Converting units | If ₹25L is monthly | If ₹25L is annual (monthly equivalent) |
|---:|---:|---:|---:|---:|
| 500 | 10% | 50 | ₹50,000/unit/month | ₹4,167/unit/month |
| 500 | 25% | 125 | ₹20,000/unit/month | ₹1,667/unit/month |
| 500 | 50% | 250 | ₹10,000/unit/month | ₹833/unit/month |
| 500 | 100% | 500 | ₹5,000/unit/month | ₹417/unit/month |
| 1,000 | 10% | 100 | ₹25,000/unit/month | ₹2,083/unit/month |
| 1,000 | 25% | 250 | ₹10,000/unit/month | ₹1,000/unit/month |
| 1,000 | 50% | 500 | ₹5,000/unit/month | ₹417/unit/month |
| 1,000 | 100% | 1,000 | ₹2,500/unit/month | ₹208/unit/month |

This is a unit-sensitivity formula, not an income forecast. Infrastructure,
provider, payment, AI, support, tax, refunds and founder opportunity cost
remain separate cost lines.

### Pilot infrastructure envelopes

| Envelope | Assumptions | Planning cash range before credits | Founder support burden | Scaling/rollback gate |
|---|---|---:|---|---|
| **Low / learning** | One small application task or container, one small single-AZ PostgreSQL instance or equivalent pilot tier, managed queue, short log retention, private object-storage backups, no standby database | **₹0–₹10,000/month** | **8–12 founder-hours/week**; manual recovery remains possible | Add capacity only after measured saturation or backlog; restore the last known-good image/configuration and replay safely |
| **Base / controlled pilot** | One or two right-sized application tasks, managed PostgreSQL with automated backup, queue + DLQ, basic alarms, encrypted object storage, measured restore drill, minimal staging | **₹10,000–₹30,000/month** | **16–24 founder-hours/week** across onboarding, support, incidents and restore drills; no 24x7 promise | Scale app/worker on sustained latency, CPU, queue-age or outbox-age evidence; pause enrollment if support or restore gates fail |
| **High / evidence-backed resilience** | Redundant application capacity, standby/Multi-AZ database or equivalent, more retention/observability, isolated restore environment and network/transfer overhead where required | **₹30,000–₹100,000+/month** | **Above 24 founder-hours/week is a stop signal**, not an automatic hiring assumption | Revisit architecture only with evidence; rollback requires a tested previous runtime plus database/provider recovery path |

The ranges are a budgeting aid only. They must not be used to publish BABAI
pricing or margin claims. The product BRD requires actual infrastructure,
provider, payment, tooling, support, failure and refund costs to be recorded
per pilot before public pricing is set. [`brd.md`; `business-model.md`;
`validation.md`]

These are internal planning envelopes, not quotes. They exclude Meta/BSP,
payment, AI, delivery, tax and one-time onboarding costs. Founder-hours are
capacity assumptions, not labour pricing or a hiring plan. Provisional
triggers are sustained request/worker saturation, queue or outbox growth,
database connection pressure, restore failure, or a P1/P2/support-capacity
breach; exact thresholds must be measured during the pilot.

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

For the pilot decision, Option A is the portability baseline and Option B is
the AWS managed-runtime candidate. Select neither until the same measured
workload, continuity evidence and founder-support assumptions produce a
defensible comparison.

Record before using credits:

1. AWS account owner, remaining balance, expiry, eligible services and
   restrictions.
2. Region, architecture, uptime and resource sizes used in the estimate.
3. Cash cost after credits, including tax, public IPv4, NAT, transfer, logs,
   backup and snapshots.
4. Exit evidence: container image, PostgreSQL export/restore, queue replay and
   provider-adapter tests outside AWS.

### Runtime scaling and rollback gates

| Runtime | Founder support burden | Scaling trigger | Rollback posture | Packet decision |
|---|---|---|---|---|
| **ECS/Fargate** | Low-to-moderate platform burden after networking, logs and task operations are documented | Add task/worker capacity only after measured sustained saturation, queue age/outbox growth or worker lag; resize PostgreSQL after connection/load or restore evidence | Redeploy the last known-good immutable image/configuration; keep migrations backward-compatible and pause risky consumers before replay | **Recommended AWS candidate now**, subject to account, cost and restore validation |
| **App Runner** | Potentially lower HTTP deployment work, but worker, scheduled work, networking and diagnosis are unproven | Revisit only after a representative worker/outbox test demonstrates stable background processing and acceptable all-in cost | Re-deploy the last known-good service revision and retain an independently runnable worker/container path | **Time-boxed alternative; not default** |
| **Small EC2 host + containers** | Highest founder burden: patching, host health, emergency access, backup and replacement are manual responsibilities | Leave fallback or add capacity when host maintenance/failure, queue backlog or support load threatens RPO/RTO or founder limits | Restore the previous image/compose configuration or replacement host from tested backups; accept single-host recovery interruption | **Cost fallback only** |

For every runtime, a release that increases error rate, violates domain
invariants, grows the outbox/DLQ, or creates reconciliation ambiguity must be
paused or rolled back before more traffic is admitted. Destructive schema
migrations are incompatible with this rollback posture. These are operating
gates, not availability promises.

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

## Object storage and CDN

Object storage is for encrypted backup exports, restore-test artefacts,
tenant-controlled uploads and other bounded artefacts that do not belong in
the transactional database. The default pilot posture is private buckets or
containers, short-lived signed access where needed, lifecycle rules and
separate access logs. It is not a second source of truth for orders, payments,
events or outbox state.

| Option | Pilot use | Tradeoff and decision |
|---|---|---|
| **Managed object storage** | Backups, exports, controlled uploads and restore evidence | **Recommended now** behind an object-storage adapter; provider encryption, retention, deletion and egress terms remain to be validated |
| **CDN for public static assets** | Cache versioned web assets if the pilot has public traffic | **Optional now**; enable only when measured transfer/latency justifies cost and cache invalidation/access controls are tested |
| **CDN for private business data or APIs** | Not a pilot requirement | **Do not use now**; signed URLs, cache keys, tenant isolation and invalidation errors create avoidable risk |

S3/CloudFront or equivalent services may be used as implementation candidates
in the AWS comparison, but no provider is selected and no data-location,
security or legal approval is implied. Keep object keys, metadata and export
formats documented so a bounded backup or asset set can be copied and
verified outside the provider.

## Secrets, MFA and administrative access

The pilot must keep credentials out of source control, images, ordinary
configuration files, logs, events and support tickets. Use a managed secret
store or an equivalent encrypted mechanism, inject only the minimum secret
needed by a workload, rotate provider tokens through an explicit runbook, and
audit reads and changes. Workloads should use short-lived or narrowly scoped
identities where the runtime supports them; long-lived founder credentials are
not a service-to-service contract.

Founder and administrative access should require MFA, preferably a
hardware/security key for privileged accounts, with separate named identities,
least privilege, access review and a documented break-glass path. Break-glass
use must be time-bound and audited. These are architecture controls and
operating requirements, not a statement that any provider, legal reviewer or
security assessor has approved them. Exact secret store, key ownership,
rotation interval, recovery access and DPDPA/security evidence remain
unresolved.

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
classification, rate or contract term is selected or implied here. [Raw T37
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
| **Hosted gateway on the merchant's account** | Public India rates, taxes and exceptions vary by provider and contract; use the official pricing page only as a current reference and do not treat it as a BABAI rate | Better webhooks and reconciliation, but success rates, settlement timing, refunds, KYC, chargebacks, taxes and provider terms remain open |
| **Alternative gateway adapter (Cashfree, PayU or another approved provider)** | Exact rates, minimums, settlement, refunds and support are unknown until a merchant quote and terms are available | Preserves negotiation and fallback options; increases certification and reconciliation work |
| **BABAI wallet/escrow or marketplace collection** | Not a cost option for the initial product | Violates the current direct-settlement/no-custody boundary and introduces materially different legal, reconciliation and operational obligations |

Public pricing pages are references only, not an endorsement or a BABAI rate.
See [Razorpay India pricing](https://razorpay.com/pricing/) and obtain the
actual merchant contract, GST treatment, settlement report and product
exceptions before modelling contribution. The current product and
architecture sources explicitly keep provider selection, rates, refunds and
reconciliation unresolved.
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

## Observability and supportability

The pilot needs enough telemetry to protect deterministic business-state
boundaries and the founder support envelope, not a large observability
platform. The provider-neutral minimum is:

- structured, redacted application and worker logs carrying correlation,
  causation, tenant/branch scope and aggregate/provider reference IDs where
  permitted;
- metrics for request error/latency, queue age and retry volume, oldest
  outbox record, DLQ/quarantine count, webhook signature failures, payment
  reconciliation mismatches, backup age/last-success and restore duration;
- alerts for business-risk conditions, not only host health: duplicate or
  ambiguous payment state, queue/outbox growth, failed backups, suspected
  cross-tenant access, repeated provider callbacks and an approaching support
  capacity limit;
- optional sampled traces for cross-module/provider latency, with payloads
  excluded unless explicitly classified and redacted.

CloudWatch, an external error tracker or another managed tool may implement
these signals, but no observability provider is selected. Retention, sampling,
data location, access review, alert routing, pricing and Manoj/Vinay
ownership must be validated together. Do not put credentials, payment secrets
or unrestricted PII in logs, events or traces. [`architecture-lld.md`;
`docs/company/security-privacy-controls.md`]

## CI/CD and release rollback

The pilot delivery path should be the smallest repeatable pipeline that
protects the domain and recovery boundaries:

1. Build an immutable OCI image from a reviewed commit.
2. Run formatting, type/build checks, targeted tests and dependency/security
   checks available in the repository.
3. Publish the image by digest to a non-production environment and run a
   smoke test covering the API, worker, queue/outbox and restore-sensitive
   configuration.
4. Promote manually to the pilot runtime with a recorded change and
   backward-compatible database migration.
5. Monitor error rate, queue/outbox age, callback verification, payment
   reconciliation and backup signals before declaring success.

GitHub Actions or another CI service may implement this flow, but no CI/CD
provider, runner, registry, deployment approval or production SLA is selected
here. Secrets must be supplied through the secret mechanism, not committed
pipeline variables. A rollback must redeploy the last known-good image and
configuration, stop or quarantine unsafe consumers, and use an authorized
replay/reconciliation procedure if external side effects were attempted.
Schema changes must support old and new application versions during rollback;
destructive migrations require a separate reviewed recovery plan.

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
7. Test private object-storage export/restore, signed access, secret rotation,
   MFA/recovery access and last-known-good CI/CD rollback.
8. Measure founder support effort, P1/P2 rates, provider response and actual
   per-pilot contribution before expanding beyond three active pilots.
9. Have legal, privacy and finance owners validate DPDPA roles, notices,
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
- [AWS Lightsail pricing](https://aws.amazon.com/lightsail/pricing/) — fixed
  instance/container and managed-database dimensions for the low-cost AWS
  comparison; verify current regional terms.
- [Amazon EC2 pricing](https://aws.amazon.com/ec2/pricing/) — instance,
  storage, transfer and host-operations dimensions for the fallback.
- [Amazon RDS for PostgreSQL pricing](https://aws.amazon.com/rds/postgresql/pricing/) —
  instance, storage, backup, I/O and transfer dimensions.
- [Amazon Aurora pricing](https://aws.amazon.com/rds/aurora/pricing/) —
  capacity, storage, I/O and commitment considerations.
- [Amazon SQS pricing](https://aws.amazon.com/sqs/pricing/) — request-metered
  queue pricing and current free-tier terms.
- [Amazon S3 pricing](https://aws.amazon.com/s3/pricing/) — storage, requests,
  lifecycle and transfer dimensions for artefacts and backups.
- [Amazon CloudFront pricing](https://aws.amazon.com/cloudfront/pricing/) —
  CDN transfer, request and cache-invalidation dimensions.
- [AWS Secrets Manager pricing](https://aws.amazon.com/secrets-manager/pricing/) —
  secret count, API access and rotation cost dimensions.
- [AWS startup credits](https://aws.amazon.com/startups/credits/) — program
  entry point; actual balance and eligibility remain account-specific.
- [AWS App Runner pricing](https://aws.amazon.com/apprunner/pricing/) —
  managed-runtime pricing dimensions to recheck if Option C is tested.
- [Amazon CloudWatch pricing](https://aws.amazon.com/cloudwatch/pricing/) —
  logs, metrics, alarms and tracing cost dimensions to include in the pilot
  estimate.
- [WhatsApp Business Platform pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing) —
  template/category/country and customer-service-window rules.
- [Razorpay India pricing](https://razorpay.com/pricing/) — public reference
  only; merchant contract and product exceptions control.
