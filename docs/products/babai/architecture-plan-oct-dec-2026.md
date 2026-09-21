---
status: proposed execution plan
owner: BABAI Architecture / DevOps
last-reviewed: 2026-09-21
sources:
  - "Founder execution decision packet (2026-09-21; current task input)"
  - "Founder Scale/Cost Baseline (2026-09-21; current task input)"
  - "Tier Scope Decision (2026-09-21; current task input)"
  - nekurama.raw.chat.json
  - nekurama.babai.research.md
  - docs/products/babai/architecture.md
  - docs/products/babai/architecture-lld.md
  - docs/products/babai/architecture-cost-options.md
  - docs/products/babai/economics-model.md
  - docs/products/babai/validation.md
  - docs/products/babai/tier-feasibility-matrix.md
  - docs/company/founders-ownership-governance.md
---

# BABAI Architecture / DevOps Execution Plan: October–December 2026

## Purpose and decision status

This plan turns the current BABAI architecture into a dated implementation
sequence. It is an internal execution plan, not a provider quote, approval,
production SLO, legal conclusion, hiring plan or launch commitment. Every
provider, region, tier, rate and external approval remains an input to
validation.

The default path is **quality-first**: prove deterministic domain behavior,
recovery, security, accessibility, cost attribution and founder-safe
operations before controlled restaurant onboarding. An **aggressive** path may
parallelize work, but it may not waive tenant isolation, payment safety,
restore, rollback, security or accessibility gates.

## Operating posture and owners

The plan preserves the committed starting shape:

- TypeScript/Node modular monolith with explicit domain modules;
- stateless lightweight gateway for authentication, validation, idempotency
  and bounded admission;
- idempotent workers for conversation/state work and provider side effects;
- PostgreSQL as authoritative state;
- transactional outbox/inbox, managed at-least-once queue, bounded retries,
  quarantine/DLQ and authorized replay;
- payment and delivery provider ports with mock adapters first;
- immutable OCI artifacts, manual promotion and last-known-good rollback;
- daily backup and tested restore against the initial RPO 24h/RTO 8h baseline;
- no initial microservices, EKS, multi-region, wallet/escrow or 24x7 promise.

| Owner | Accountable for | Required evidence |
|---|---|---|
| **Manoj** | Architecture, domain contracts, CI/CD, runtime, security, provider callbacks, backup/restore and technical incident decisions | Reviewed design, pipeline evidence, test reports, recovery runbook and incident records |
| **Vinay** | Merchant workflow, onboarding, menu/staff acceptance, dogfood coordination and operational feedback | Acceptance checklist, onboarding/time ledger, merchant findings and training evidence |
| **Manoj + Vinay** | Scope, stage admission, budget/reserve approval, quality-versus-speed decision and P1/P2 review | Signed gate record or issue-linked decision; no silent expansion |
| **QA role** | Test design, regression evidence, accessibility and release-quality sign-off; performed by founders or an approved contractor/tool, not a hiring assumption | Reproducible test results, defect disposition and release matrix |
| **Finance / CA / legal inputs** | GST, payment responsibility, provider terms and commercial treatment | Written or recorded validation; blanks remain unknowns |

Founder-only operation is bounded by the existing support guardrails. A
five-customer cohort is a cost/capacity sensitivity, not an automatic
enrollment commitment.

## Milestone sequence

### October — modular core, domain skeleton and safe seams

**Objective:** create the smallest executable core without turning logical
modules into premature services.

| Gate | Deliverable and owner | Dependencies | Entry check | Exit check |
|---|---|---|---|---|
| O1 | Manoj: module map, typed command/event envelope, tenant/branch/channel context, authorization seam and aggregate ownership | `architecture.md`, `architecture-lld.md`, `domain-model.md` | Current boundaries and AI authority rule reviewed | A code-level contract exists for identity, tenant, catalog, conversation, cart/order, payment, fulfillment, notification, workflow and audit; cross-module table access is rejected |
| O2 | Manoj: stateless gateway plus worker skeleton, PostgreSQL migrations and bounded connection pools | O1; PostgreSQL/outbox posture | OCI build and environment contract defined | Gateway holds no conversation state, does not call providers synchronously, and accepts idempotency/correlation metadata; worker acknowledges only after durable effect |
| O3 | Manoj: transactional outbox/inbox, retry policy, quarantine/DLQ and replay authorization | O2; managed queue port | Event schema and idempotency keys reviewed | Domain state, outbox and required audit row commit atomically; duplicate delivery is harmless; retry/DLQ/replay tests pass |
| O4 | Manoj: mock payment and mock delivery adapters behind provider ports | O1–O3; payment/fulfillment state boundaries | Provider-neutral interfaces defined | Happy path, timeout, duplicate callback, rejected payment, delivery failure and reconciliation paths are deterministic; no claim of payment/delivery-provider approval |
| O5 | Manoj + QA role: CI baseline and smoke path | O2–O4 | Repository build/test commands available | CI builds immutable image, runs format/type/unit/contract/dependency and image checks, publishes a digest, runs API-worker-queue smoke and retains the prior digest |
| O6 | Vinay + QA role: synthetic restaurant fixture and acceptance script | O1–O5; field research workflow | Menu, staff and pickup assumptions documented | One synthetic order travels through command, order, mock payment, pickup fulfillment, notification, audit and cost-ledger events |

**October exit gate:** one reproducible end-to-end synthetic flow passes on a
clean environment; migration is backward-compatible; outbox/inbox,
idempotency, retry/DLQ, mock payment/delivery and rollback smoke tests are
green; no secrets or unrestricted PII appear in logs; unresolved defects have
an owner and explicit hold/accept decision.

### November — POC, dogfood, 50 orders/day and scale evidence

**Objective:** exercise the core with founder dogfood and synthetic load before
restaurant onboarding.

| Gate | Deliverable and owner | Dependencies | Entry check | Exit check |
|---|---|---|---|---|
| N1 | Vinay: founder dogfood POC with one controlled restaurant-like fixture and staff workflow | October exit; acceptance script | Test channel/menu/staff owner available | At least one complete dogfood cycle records order, payment separation, pickup status, takeover, support time and defects |
| N2 | Manoj: 50 completed orders/day/restaurant synthetic workload | N1; scale harness and provider mocks | 54 requests/order normal case and 90 heavy case configured | 15-minute repeated windows cover normal, retry, callback and daypart-burst traffic; gateway, DB, queue/outbox, worker and provider signals are recorded |
| N3 | Manoj + QA role: 500/1,000-restaurant reference tests | N2; current scale formulas | 10%, 25%, 50% and 100% conversion bands selected for the run | Results report average, 5x busy and 10x burst RPS; P90/P99 gateway, queue age, oldest outbox, DB pool/lock, retry/DLQ and provider throttling are captured; results are evidence, not capacity claims |
| N4 | Manoj: restore and rollback drill | N2; backup/export and immutable digest | Recovery runbook and isolated target exist | Restore includes PostgreSQL state, outbox/inbox, audit, configuration recovery, deployment, webhook revalidation and reconciliation; measured RPO evidence is <=24h and elapsed recovery is <=8h |
| N5 | Manoj + QA role: security and access-control test pack | O1–O5; security/privacy controls | Test identities, tenant fixtures and secret paths exist | Tenant isolation, least privilege, signature verification, idempotency abuse, secret handling, dependency/image findings and redacted logs are tested; critical findings block advancement |
| N6 | QA role + Vinay: accessibility and usability test pack | N1; web operations surface and message fallback | Keyboard/screen-reader test fixtures exist | Keyboard-only navigation, focus order, labels/roles, error recovery, contrast and zoom/reflow checks pass or have documented severity/owner; accessibility is not deferred to onboarding |
| N7 | Manoj + Product: telemetry and cost ledger | N1–N3; economics model | Event schema and assumptions version available | Every measured interval/activity records tenant/restaurant, scale band, class, provider/model ref where applicable, deployment version, quantity/duration and outcome; shared and per-restaurant costs reconcile without treating unknowns as zero |

**November exit gate:** dogfood is repeatable; the 50-orders/day workload
and selected 500/1,000 reference bands have evidence; restore/rollback,
security and accessibility packs have no unowned blocking finding; telemetry
and cost ledgers are complete enough to compare low/base/high scenarios; the
founder support budget and next-stage admission decision are recorded.

### December — hardening and controlled restaurant onboarding

**Objective:** convert evidence into a bounded, reversible pilot posture.

| Gate | Deliverable and owner | Dependencies | Entry check | Exit check |
|---|---|---|---|---|
| D1 | Manoj: hardening release, failure injection and operational runbook | November exit | All red findings closed or explicitly accepted | Queue poison, provider timeout/throttle, duplicate callback, DB contention, stale config and worker restart scenarios are safe, observable and recoverable |
| D2 | Manoj + Vinay: controlled onboarding wave | D1; signed pilot terms, approved test/provider access and named restaurant staff | Start with one restaurant; admission checklist complete | Add the next restaurant only after order integrity, support, restore and cost evidence stay within approved guardrails; existing validation ceiling remains readiness-gated up to 10, not automatic |
| D3 | Vinay + QA role: per-restaurant onboarding and training | D2; menu/catalog and accessibility checklists | Customer data, channel, staff and escalation contact verified | Menu review, staff training, human takeover, payment/delivery fallback, accessibility and support handoff are evidenced; onboarding hours and direct costs are ledgered |
| D4 | Manoj + Product: provider and cost review | D2–D3; actual invoices/terms where available | Provider status explicitly marked validated, test-only or unresolved | Pre-credit/post-credit infrastructure, provider, AI, tooling, QA, onboarding and remediation views are reconciled; no provider approval is inferred from a mock or POC |
| D5 | Manoj + Vinay: December readiness review and rollback decision | D1–D4 | All gate evidence linked to release and cohort | Continue, hold, reduce scope or roll back based on quality, support, restore, security, accessibility and economics evidence; record unresolved risks and next owner |

**December exit gate:** hardening and controlled onboarding are complete only
for the admitted cohort, with current restore evidence, a tested rollback
path, cost ledger, support capacity decision, and no unresolved customer-funds,
tenant-isolation, security or order-integrity issue.

## Cross-cutting implementation gates

### Stateless gateway, worker and outbox contract

1. The gateway verifies signatures/authentication, resolves bounded context,
   applies admission limits, attaches correlation and idempotency metadata,
   and acknowledges only after durable queue acceptance.
2. The gateway does not retain conversation state, call payment/delivery/AI
   providers synchronously, or make a database transaction for every noisy
   webhook/typing event.
3. Workers deduplicate provider events, execute typed commands, keep domain
   state authoritative in PostgreSQL, write outbox/audit records in the same
   transaction, and acknowledge only after durable effects.
4. Provider calls never occur while holding a database transaction. Retries
   are bounded, honor provider throttling, and quarantine non-retryable or
   settlement-ambiguous work.
5. Telemetry describes state and cost; it never authorizes an order, payment,
   permission, consent or fulfillment transition.

### CI, release and rollback

The release gate requires an immutable image digest, test and scan evidence,
staged smoke, manual promotion, backward-compatible migrations and the
previous known-good digest/configuration. Rollback means:

1. stop promotion and pause or quarantine unsafe consumers;
2. redeploy the last known-good image and compatible configuration;
3. do not reverse schema destructively; use expand/migrate/contract;
4. reconcile any attempted external side effects by idempotency key and
   authorized replay; and
5. record customer/merchant communication and the incident decision.

No rollback procedure assumes a provider can reverse a payment or delivery
side effect automatically.

### Test plan

| Test layer | October | November | December exit evidence |
|---|---|---|---|
| Unit/contract | Domain invariants, command/event schema, adapter ports | Regression across normal/heavy request cases | No release without green required suites |
| Integration | PostgreSQL transaction, migration, outbox/inbox and mock adapters | Queue redelivery, retry/DLQ, reconciliation and callback signatures | Failure injection and restart recovery |
| Load | Harness only | 50 orders/day/restaurant; 500/1,000 references at selected conversion and 5x/10x burst bands | Repeat after hardening; compare drift |
| Restore/continuity | Runbook skeleton | Isolated restore and replay measured against RPO 24h/RTO 8h | Current drill record and owner |
| Security | Secret/logging and dependency baseline | Tenant isolation, authz, callback verification, abuse and image findings | No unowned critical/high blocker |
| Accessibility | Acceptance criteria and fixtures | Keyboard, focus, labels, contrast, zoom/reflow and error recovery | No unowned blocker on operations surface |
| Cost/telemetry | Event/ledger schema | Completeness and attribution under load | Per-cohort true-up with assumptions version |

### Quality versus aggressive path

| Choice | Quality-first path (default) | Aggressive path (conditional) | Implication |
|---|---|---|---|
| Delivery | Sequential gates with a soak period after each exit | Parallelize CI, provider test access and synthetic-load preparation | Faster calendar time, but more integration defects can converge at once |
| Provider work | Mock adapters first; real provider use only after external validation | Run provider onboarding in parallel with mocks | Reduces waiting but risks rework and cannot claim approval |
| Onboarding | One restaurant, then incremental admission based on evidence | Prepare several restaurants before the first exit | Higher support, rollback and data-correction blast radius |
| Testing | Restore, security and accessibility before onboarding | Run some tests in parallel but keep them blocking for release | No speed benefit justifies waiving safety gates |
| Operations | Manual promotion, founder-visible alerts and bounded support | More automation and longer windows before full review | Lower ceremony, but harder to diagnose founder-capacity and cost drift |

The aggressive path is acceptable only when the same exit evidence is produced
and the additional support/recovery load is explicitly accepted by both
founders. If a gate is missed, revert to the quality-first sequence rather than
silently lowering the threshold.

## Internal planning reserves and cost inputs

All amounts below are **internal INR planning reserves**, not quotes, budgets,
prices, provider approvals or accounting entries. They exclude GST unless
validated, customer pass-through charges, founder salary, founder
opportunity-cost valuation, legal/professional fees and any new hire. Product,
QA and support work assumes Manoj/Vinay or an explicitly approved contractor
or tool; no hiring assumption is embedded.

### Monthly low/base/high reserves

| Month | Product | Infra | Tools | Provider/test access | AI | QA | Subtotal | 15% contingency | Total reserve |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| October | ₹12,000 / ₹25,000 / ₹45,000 | ₹5,000 / ₹12,000 / ₹25,000 | ₹3,000 / ₹8,000 / ₹15,000 | ₹2,000 / ₹8,000 / ₹20,000 | ₹1,000 / ₹5,000 / ₹15,000 | ₹4,000 / ₹10,000 / ₹20,000 | ₹27,000 / ₹68,000 / ₹1,40,000 | ₹4,050 / ₹10,200 / ₹21,000 | **₹31,050 / ₹78,200 / ₹1,61,000** |
| November | ₹15,000 / ₹30,000 / ₹50,000 | ₹8,000 / ₹20,000 / ₹40,000 | ₹4,000 / ₹10,000 / ₹20,000 | ₹5,000 / ₹15,000 / ₹35,000 | ₹3,000 / ₹10,000 / ₹25,000 | ₹8,000 / ₹20,000 / ₹40,000 | ₹43,000 / ₹1,05,000 / ₹2,10,000 | ₹6,450 / ₹15,750 / ₹31,500 | **₹49,450 / ₹1,20,750 / ₹2,41,500** |
| December | ₹18,000 / ₹35,000 / ₹60,000 | ₹10,000 / ₹25,000 / ₹50,000 | ₹5,000 / ₹12,000 / ₹25,000 | ₹8,000 / ₹20,000 / ₹45,000 | ₹4,000 / ₹12,000 / ₹30,000 | ₹12,000 / ₹25,000 / ₹50,000 | ₹57,000 / ₹1,29,000 / ₹2,60,000 | ₹8,550 / ₹19,350 / ₹39,000 | **₹65,550 / ₹1,48,350 / ₹2,99,000** |
| **Three-month view** | ₹45,000 / ₹90,000 / ₹1,55,000 | ₹23,000 / ₹57,000 / ₹1,15,000 | ₹12,000 / ₹30,000 / ₹60,000 | ₹15,000 / ₹43,000 / ₹1,00,000 | ₹8,000 / ₹27,000 / ₹70,000 | ₹24,000 / ₹55,000 / ₹1,10,000 | ₹1,27,000 / ₹3,02,000 / ₹6,10,000 | ₹19,050 / ₹45,300 / ₹91,500 | **₹1,46,050 / ₹3,47,300 / ₹7,01,500** |

Low/base/high are planning bands, not confidence intervals. The 15%
contingency is applied to each month's subtotal and is not a license to
increase scope. Actual invoices, usage, provider terms and founder time
replace these inputs during the November and December true-ups.

### Per-customer onboarding and five-customer cohort sensitivity

The effort bands align with the current economics model's 4–8, 8–16 and
16–32 combined founder-hours per restaurant. The cash-equivalent column uses
the existing provisional ₹1,000/hour internal sensitivity only for planning;
it is not compensation, payroll or a company expense decision.

| Input | Low | Base | High |
|---|---:|---:|---:|
| Product/configuration hours per customer | 2–4 h | 4–8 h | 8–16 h |
| Technical/provider setup hours per customer | 1–2 h | 2–4 h | 4–8 h |
| QA/accessibility/training hours per customer | 1–2 h | 2–4 h | 4–8 h |
| **Total founder/approved-contractor hours per customer** | **4–8 h** | **8–16 h** | **16–32 h** |
| Direct tools/provider/test-data cash per customer | ₹500–₹1,500 | ₹1,500–₹4,000 | ₹4,000–₹10,000 |
| Cash-equivalent time sensitivity per customer | ₹4,000–₹8,000 | ₹8,000–₹16,000 | ₹16,000–₹32,000 |
| **Planning input per customer, time + direct cash** | **₹4,500–₹9,500** | **₹9,500–₹20,000** | **₹20,000–₹42,000** |

| Five-customer cohort view | Low | Base | High |
|---|---:|---:|---:|
| Combined hours | 20–40 h | 40–80 h | 80–160 h |
| Direct cash | ₹2,500–₹7,500 | ₹7,500–₹20,000 | ₹20,000–₹50,000 |
| Cash-equivalent time | ₹20,000–₹40,000 | ₹40,000–₹80,000 | ₹80,000–₹1,60,000 |
| **Planning input, time + direct cash** | **₹22,500–₹47,500** | **₹47,500–₹1,00,000** | **₹1,00,000–₹2,10,000** |

The five-customer view is a sensitivity and admission-capacity test. It does
not override the one/three/ten restaurant validation gates, founder support
limits, signed terms, provider readiness or the December go/hold decision.
Record Manoj and Vinay hours separately, along with customer-specific provider,
AI, payment, delivery, remediation and QA costs.

## Cost, telemetry and evidence gates

The ledger must preserve both pre-credit and post-credit views and distinguish
shared platform from customer-variable cost. At minimum record:

```text
recordId, recordedAt, tenantId, restaurantId, branchId, scaleBand,
assumptionsVersion, activityOrCostClass, providerOrModelRef,
deploymentVersion, quantityOrDuration, outcome
```

Required classes are `product`, `runtime`, `database`, `queue_outbox`,
`object_storage_cdn`, `observability`, `provider`, `payment`, `delivery`,
`ai_assistance`, `tooling`, `onboarding`, `qa_accessibility`,
`merchant_support`, `takeover`, `incident`, `reconciliation` and `restore`.
Provider throttles, retries, DLQ, failed restores and human interventions are
cost-bearing outcomes, never silent zeros.

Advance/hold review must include:

- monthly reserve versus actual invoice and usage;
- per-customer onboarding hours and direct cash;
- five-customer sensitivity versus founder capacity;
- 50-orders/day and 500/1,000 reference load results;
- gateway/worker/DB/queue/provider quality signals;
- security, accessibility, restore and rollback evidence; and
- unresolved risk owners and a dated next decision.

## Sources, traceability and unresolved risks

| Plan input | Current source |
|---|---|
| Founder execution sequence, no-hiring constraint, quality/aggressive tradeoff and reserve request | Founder execution decision packet, current task input (2026-09-21) |
| 54/90 requests per order, 50 orders/day/restaurant, 500/1,000 reference populations and burst formulas | `architecture-cost-options.md`, “New scale and cost baseline”; Founder Scale/Cost Baseline (2026-09-21) |
| Stateless gateway, worker, outbox/inbox, retry/DLQ, rollback and restore posture | `architecture.md`; `architecture-lld.md`; `architecture-boundaries.md`; `architecture-cost-options.md` |
| Onboarding/support bands, 90-day paid pilot and readiness gates | `economics-model.md`; `validation.md`; `nekurama.babai.research.md` |
| Founder intent and execution/value north star | `nekurama.raw.chat.json` mappings `4702681b-d611-4408-af5f-9001d04b6cfa`, `f58ce128-39ed-4015-9be9-5b6135a39f20`, `4bbdb489-0a0d-45d5-af27-70535c5d4acc` |
| Founder roles and governance caveats | `docs/company/founders-ownership-governance.md` |

Unresolved risks that block stronger claims include provider approval and
quotas, payment/delivery contracts and reconciliation, AWS credit eligibility,
actual rates and taxes, accessibility findings on the implemented operations
surface, legal/security review, restore evidence under real configuration,
founder support capacity, and whether any future staffing or contractor
capacity is approved. None is resolved by this plan.
