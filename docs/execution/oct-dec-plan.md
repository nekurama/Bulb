---
status: planning artifact
owner: BABAI Product / Founder
last-reviewed: 2026-09-21
period: 2026-10-01 through 2026-12-31
estimates: planning values; replace with measured evidence
sources:
  - "2026-09-21 founder execution-plan input (current task brief)"
  - "2026-09-21 FOUNDER DECISION PACKET"
  - "2026-09-21 FOUNDER SCALE/COST BASELINE (recorded in economics-model.md)"
  - "2026-09-21 TIER/COST MODEL UPDATE (recorded in brd.md)"
  - ../../nekurama.raw.chat.json
  - ../../nekurama.chatgpt.md
  - ../../nekurama.babai.research.md
  - ../products/babai/brd.md
  - ../products/babai/product-definition.md
  - ../products/babai/architecture.md
  - ../products/babai/architecture-lld.md
  - ../products/babai/economics-model.md
  - ../products/babai/validation.md
  - ../products/babai/pilot-metrics.md
---

# BABAI October–December quality-first execution plan

This is the durable execution plan for the October–December 2026 product
execution window. It turns the current product boundary and founder execution
input into sequenced work, evidence gates and budget views. It is not a public
roadmap, price list, capacity guarantee, hiring plan or production
architecture decision.

The plan deliberately preserves two December outcomes without selecting one:

| Path | 31 December 2026 outcome | January implication |
| --- | --- | --- |
| **Quality path** | Five restaurants configured; one or two live only after all gates; year-end demo and a late-December paid-pilot target | Five active restaurants are the January operating target |
| **Aggressive path** | Five live by 31 December, only with reduced scope and the same safety/payment/privacy blockers; no bypass of evidence gates | Five live is treated as a constrained experiment, not proof of scale |

The default operating principle is **quality before count**. The aggressive path
remains recorded for explicit trade-off review rather than being silently
selected by schedule pressure.

## 1. Outcomes, boundaries and evidence posture

### Outcomes by 31 December

1. Freeze the first production cut in October: LITE/BASE/PRO remain internal
   experiment labels, with an explicit capability matrix and no public package
   promise.
2. Build and prove a modular core/menu/order skeleton with deterministic state,
   human takeover, auditability and replaceable mock payment/delivery adapters.
3. Operate CI, telemetry and a cost ledger before customer exposure.
4. Complete the November POC, internal dogfood, synthetic load and
   restore/security/accessibility checks, ending with a demo-ready flow.
5. Harden in December and run one or two controlled restaurants first.
6. Close the year with a demo and a late-December paid-pilot target only when
   the signed commercial and payment-before-start requirements are satisfied.

### Non-negotiable product boundary

The first real workflow is:

`business WhatsApp → reviewed/published menu → customer questions → pickup order → restaurant accept/reject → payment recorded/confirmed → staff completion → customer status`

The initial operating boundary remains one restaurant, one WhatsApp number, one
branch, pickup-first, manual takeover and no delivery dependency. Customer funds
go directly to the restaurant; BABAI subscription billing is separate. AI may
assist, but cannot publish or mutate controlled state, authorize payment,
advance order/fulfillment state or bypass access policy.

The October tier cut is an internal experiment contract, not approved public
pricing:

| Label | October scope cut | Explicit exclusions/controls |
| --- | --- | --- |
| **LITE** | Menu display, ordering and limited menu/order assistance; up to three menu updates/month | No payment, delivery, cross-checking, daily availability controls, promotions or combos; no full-automation claim |
| **BASE** | LITE plus customer payment, approved delivery adapter, availability controls and basic time-bounded promotions/combos | Bounded provider/API scope, deterministic transitions, human approval and audit |
| **PRO** | BASE plus full bounded access to allowed workflows and approved advanced APIs | Per-integration permission, rate/failure budget and maintenance evidence; “full” never means unrestricted AI authority |

### Pipeline evidence and conversion target

The founder execution-plan input records **25+ interested**, **10+ ready now**.
Treat the ten ready-now candidates as reserveable capacity, not signed
customers. The commercial target is **five signed/configured** by year end.
These counts are planning evidence until reconciled against a candidate ledger
with contact, access, menu, owner, agreement and payment status.

| Funnel stage | Planning count | Required evidence |
| --- | ---: | --- |
| Interested | 25+ | Candidate record and source |
| Ready now | 10+ | Confirmed owner, channel/menu access and operating contact |
| Reserveable | 10 | Explicit reservation and sequencing status |
| Signed/configured target | 5 | Signed terms, payment/deposit gate, menu/channel configuration and named operator |
| Live target | 1–2 quality path; 5 aggressive path | Successful controlled run and all applicable release gates |

The field research supports strong interest but explicitly says interest is not
yet willingness to pay or proof of operational readiness. The pipeline is
therefore a conversion hypothesis, not a forecast.

## 2. Owners and working model

No hiring is assumed. Owners are roles so the plan survives staffing changes;
the founder assigns named individuals in the execution tracker.

| Role | Accountability |
| --- | --- |
| Founder/Product | Scope freeze, tier decision, customer selection, commercial approval, final go/no-go |
| Tech lead | Modular core, state contracts, adapters, data/recovery design and technical risk |
| QA/Release | Test plan, CI policy, release evidence, accessibility and regression sign-off |
| Operations/Pilot owner | Candidate ledger, onboarding, restaurant training, support-minute log and incident coordination |
| Finance/ledger owner | Cash/economic ledger, assumptions version, invoice/rate capture and cohort true-up |
| Security/privacy reviewer | Access, secrets handling, data classification, payment/privacy threat review and unresolved-blocker sign-off |
| Restaurant operator | Menu approval, order acceptance/rejection, takeover and daily operating evidence |

One person may hold multiple roles, but an individual cannot self-approve a
material safety, payment-integrity or privacy exception.

## 3. Month-by-month execution

### October — freeze and build the smallest trustworthy skeleton

| Window | Work package | Owner | Dependencies | Entry check | Exit check |
| --- | --- | --- | --- | --- | --- |
| Oct 1–3 | Scope freeze: LITE/BASE/PRO matrix, pilot boundary, out-of-scope list, release blockers and decision log | Founder/Product | Current BRD, product definition, field research | Current source anchors reviewed; unresolved choices listed | Signed internal scope sheet; no untracked feature added |
| Oct 5–9 | Define modular core contracts: tenant/branch/channel, menu revision/publication, conversation/cart/order states, authorization, audit and idempotency | Tech lead + Security/privacy | Architecture and LLD; scope freeze | State owners and transitions identified | Contract tests and rejected-transition cases exist |
| Oct 12–23 | Implement menu/order skeleton and staff operations path; keep payment and fulfillment state separate | Tech lead | Contracts; chosen local persistence/runtime remains a POC decision | Unit/integration harness can create a reviewed menu and pickup order | Happy path, rejection, retry, takeover and duplicate-event cases pass |
| Oct 19–23 | Add mock payment and mock delivery adapters behind stable interfaces; no real customer funds or delivery dependency | Tech lead | Payment/fulfillment boundaries; adapter contract | Provider outcomes and idempotency cases enumerated | Success, failure, timeout, duplicate callback and reconciliation fixtures pass |
| Oct 26–30 | Establish CI, telemetry schema, cost ledger and test-data policy | QA/Release + Finance | Skeleton and adapter fixtures | Build/test commands reproducible locally | Protected CI checks, baseline dashboard/event fields and ledger template run on every change |
| Oct 30–31 | October gate and November backlog lock | Founder/Product + QA/Release | All October work | Evidence packet complete | Gate G1 passed or work explicitly held; no November scope expansion |

**October exit gate G1 — scope and skeleton ready**

- Scope matrix and out-of-scope list are approved and versioned.
- A reviewed menu can be published, a pickup order can be created and
  accepted/rejected, and staff takeover is observable.
- Order, payment and fulfillment state are separate; controlled transitions are
  authorized, audited and idempotent.
- Mock payment/delivery adapters cover success, failure, timeout, duplicate and
  reconciliation cases.
- CI blocks merges on formatting/type/unit/integration/contract failures.
- No unresolved critical security, privacy or customer-funds issue exists.

### November — complete POC, dogfood, test the ceiling and become demo-ready

| Window | Work package | Owner | Dependencies | Entry check | Exit check |
| --- | --- | --- | --- | --- | --- |
| Nov 2–13 | Complete POC: setup, menu review/publish, customer conversation stub, pickup order, staff status, audit and recovery path | Tech lead | G1 | October contracts and CI green | End-to-end demo flow runs from clean data |
| Nov 16–20 | Internal dogfood with scripted operators and failure injection | Operations/Pilot + QA | POC complete | Test accounts, reset procedure and runbook exist | Repeated flows meet acceptance thresholds; defects triaged by severity |
| Nov 16–24 | Synthetic load at **50 completed orders/day/restaurant ceiling**; record average/heavy request classes, latency, errors, retries and cost | Tech lead + QA/Release | Telemetry and deterministic fixtures | Workload generator and ceiling definition reviewed | Ceiling test evidence captured; no claim that 500/1000 is production capacity |
| Nov 20–25 | Restore and recovery: backup/restore rehearsal, replay/idempotency, incident rollback and evidence retention | Tech lead + Security/privacy | Stable data model and telemetry | Recovery objectives and restore owner named | Restore result, data-integrity check and rollback runbook accepted |
| Nov 20–26 | Security/accessibility: authorization matrix, tenant isolation, secret/config review, payment boundary, keyboard/focus/labels/contrast and reduced-motion checks | Security/privacy + QA | POC UI and state contracts | Threat/test checklist approved | No unresolved high-severity issue; accessibility checks pass for demo surfaces |
| Nov 27–30 | Demo-ready flow and readiness review | Founder/Product + QA/Release | All November evidence | Evidence packet complete | G2 passed: demo script, known limitations and release candidate identified |

**November load interpretation**

The 50-order/day figure is a hard per-restaurant ceiling for the synthetic
test, not a target to exceed. The supplied 500-restaurant and 1,000-restaurant
figures are planning references only:

| Reference | Planning workload | Use in November |
| --- | --- | --- |
| One restaurant | 50 completed orders/day; 2,700 average or 4,500 heavy-case requests/day | Test ceiling and cost/latency instrumentation |
| 500 restaurants | 25,000 orders/day; 1.35M average or 2.25M heavy-case requests/day | Architecture/cost reference; not a release gate |
| 1,000 restaurants | 50,000 orders/day; 2.7M average or 4.5M heavy-case requests/day | Supplied reference envelope; not a promise or November capacity target |

These request counts must be classified before a provider or AI rate is applied.
They are not automatically Meta messages, billable AI calls or payment charges.

### December — harden, controlled restaurants, demo and paid-pilot target

| Window | Work package | Owner | Dependencies | Entry check | Exit check |
| --- | --- | --- | --- | --- | --- |
| Dec 1–5 | Release hardening: defect burn-down, migration/reset scripts, observability alerts, runbooks and rollback rehearsal | QA/Release + Tech lead | G2 | Known limitations accepted; no high-severity open issue | G3a technical readiness passed |
| Dec 7–11 | Restaurant readiness: select five configured candidates, train operators, verify menu/channel/access and collect signed commercial prerequisites | Operations/Pilot + Founder/Product | Pipeline ledger; signed terms template | Candidate meets access and operator checklist | Five configured or a documented shortfall; one/two marked controlled-live candidates |
| Dec 14–18 | Controlled go-live for one or two restaurants on quality path; reduced-scope five-live rehearsal only for aggressive path | Operations/Pilot + Tech lead | G3a; payment-before-start; named rollback owner | Smoke, support and incident checks green | G3b live gate passed per restaurant |
| Dec 19–23 | Observe real workflow, reconcile orders/payment state, log support minutes and cost, remediate before adding count | Operations/Pilot + Finance | Live evidence | Daily review cadence active | No unresolved customer-funds, privacy, authorization or data-integrity blocker |
| Dec 24–31 | Year-end demo, pilot close/target decision and January handoff | Founder/Product | G3b and commercial review | Demo script and evidence packet complete | Demo delivered; paid-pilot target recorded as achieved, pending or blocked; January cohort plan |

**December gate G3 — controlled expansion**

- G3a technical readiness: CI, restore, security, accessibility, telemetry,
  ledger and rollback evidence are green.
- G3b per-restaurant live readiness: signed terms and payment/deposit
  precondition are satisfied, menu/channel/operator are verified, smoke flow
  passes, and a named support/rollback owner is available.
- Any unresolved customer-funds custody, payment-integrity, privacy or
  authorization exception blocks live status regardless of path.
- Quality path expands from one to two only after the first live restaurant's
  evidence is reviewed. Five configured is allowed; five live is not automatic.

## 4. Quality gates and acceptance checks

| Gate | Decision | Minimum evidence | Hold condition |
| --- | --- | --- | --- |
| G0 scope freeze | What will be built | Approved matrix, boundaries and owner/dependency list | Any unbounded feature or public-tier assumption |
| G1 skeleton | Can the core workflow be trusted in isolation? | State/authorization/audit/idempotency tests and mock adapters | Controlled state mutation without policy/audit or duplicate-sensitive effect |
| G2 POC/demo | Can the team repeat the workflow? | Clean-data demo, dogfood runs, defect triage and known-limitations log | Critical/high defect, unrepeatable reset, missing telemetry or missing ledger field |
| G3a technical | Can a controlled restaurant be supported safely? | Load ceiling, restore, security, accessibility, alerts and rollback evidence | Unresolved high-severity security/privacy/payment/data-integrity issue |
| G3b live restaurant | Can this restaurant go live? | Signed terms, payment/deposit gate, menu/channel/operator checks, smoke and support owner | Missing access, no operator, no rollback/support owner or failed smoke |
| G4 year-end | What did the quarter prove? | Demo, actual cost/economic ledger, support minutes, incidents and path decision | Evidence substituted by feature count or pipeline interest |

The proposed pilot-metrics thresholds remain the reference for later paid-pilot
readiness: at least 80% live within seven days, at least 90% accepted pickup
completion, no more than 5% missed/duplicate orders, at least 80% staff-handled
sessions, support within the proposed ceiling, complete economics evidence and
zero unresolved safety/privacy/payment exceptions. These are internal planning
thresholds pending owner/team approval, not product claims.

## 5. CI, telemetry, cost ledger and test plan

### CI and release checks

Every change affecting the POC must run:

1. format/lint/type checks;
2. unit tests for state transitions, authorization, policy and calculations;
3. integration tests for menu publication, order lifecycle, audit and
   idempotency;
4. contract tests for payment/delivery adapters and provider callbacks;
5. accessibility checks for demo web surfaces;
6. smoke tests from clean seed data; and
7. migration/restore or fixture compatibility checks when data contracts change.

CI should publish test artifacts, coverage/trend context, schema/version
changes, test-data version and a red/green release decision. No broad catch or
success-shaped fallback is acceptable for adapter or payment failures.

### Telemetry minimum

Record event ID, schema version, timestamp, tenant/branch/channel, correlation
and causation IDs, actor/type, aggregate and transition, outcome, latency,
retry count, provider reference, data classification and redaction status.
For each restaurant record:

- onboarding minutes and menu corrections;
- planned, unplanned, recovery and takeover support minutes;
- conversations, orders attempted/accepted/rejected/completed and
  missed/duplicate messages;
- payment and delivery adapter attempts, callbacks, retries and reconciliation;
- AI mode/model, tokens/units, media/jobs and retry usage;
- provider/Meta billable units by category;
- incidents, severity, time to detect/recover and customer impact; and
- restaurant value separately from BABAI income/cost.

### Cost ledger minimum

Every material line has value, unit, source, owner, date, cash/economic
classification, allocation basis, GST/tax treatment status and assumptions
version. Blank, unsupported or unallocated is **unknown**, not zero.

The ledger must separate:

- recognized BABAI income and GST component;
- cash provider/Meta/BSP, hosting, tooling, payment collection, refunds and
  remediation costs;
- founder/team time as economic cost, even when not paid;
- pass-through restaurant order/delivery money; and
- onboarding, support, CAC and integration-maintenance effort.

### Test matrix

| Area | October | November | December |
| --- | --- | --- | --- |
| Functional | Menu revision/publish, cart/order, accept/reject, status | Full scripted flow and exception paths | Live smoke per restaurant and regression |
| Reliability | Idempotency, retries, outbox/event intent and duplicate callbacks | 50-order/day synthetic ceiling, recovery and restore | Alerts, rollback and incident drills |
| Security | Authorization/state guards, tenant/access boundaries | Threat review, secrets/config review, payment boundary | Re-check changed surfaces; no unresolved blocker |
| Accessibility | Keyboard/focus/labels/contrast baseline | Full demo-surface keyboard and reduced-motion pass | Live regression after hardening |
| Economics | Ledger schema and rate register | Cost capture under synthetic/dogfood workload | Actual invoices/time logs and cohort true-up |
| Human operations | Takeover and audit visibility | Dogfood runbook and support logging | Named operator, support owner and daily review |

## 6. Budget and economic views

All values below are planning values copied or derived from
`economics-model.md`; they are not quotes, approved prices, forecasts or tax
conclusions. Apply a **15% contingency** to planning totals until actual
invoices, provider exports and time logs exist. No hiring cost is included.

### Product budget inputs to replace

| Input | Low | Base | High | Treatment |
| --- | ---: | ---: | ---: | --- |
| Shared hosting/storage/DB/monitoring per year | ₹20,000 | ₹40,000 | ₹52,000 | Planning range; allocate and replace with invoices |
| Shared tooling/dev/admin per year | ₹15,000 | ₹30,000 | ₹39,000 | Planning range; allocate and replace with invoices |
| Billable Meta/provider messages/month | 250 | 750 | 2,000 | Planning input; classify and verify current rate card |
| Founder onboarding effort/restaurant | ₹1,000 | ₹4,000 | ₹16,000 | Economic time only before direct cash; replace with time logs |
| Founder value/hour | ₹500 | ₹1,000 | ₹2,000 | Internal sensitivity, not salary or vendor quote |
| Subscription collection fee | Unknown | ~2% research pointer | Unknown | Verify contract and GST treatment |
| Payment/delivery for restaurant | Pass-through by default | Pass-through by default | Pass-through by default | BABAI absorbs only by approved agreement |

Known cash inputs are not a complete budget: provider/API, AI, storage/logging/
queue/DB usage, payment, delivery, refunds and tax treatment remain unknown
until measured or contracted.

### Per-customer onboarding and five-customer cohort

The table below isolates one-time onboarding economic effort. It excludes direct
cash, recurring run cost and CAC; those are separate ledger lines.

| Case | One customer before contingency | One customer with 15% contingency | Five-customer cohort before contingency | Five-customer cohort with 15% contingency |
| --- | ---: | ---: | ---: | ---: |
| Low | ₹1,000 | ₹1,150 | ₹5,000 | ₹5,750 |
| Base | ₹4,000 | ₹4,600 | ₹20,000 | ₹23,000 |
| High | ₹16,000 | ₹18,400 | ₹80,000 | ₹92,000 |

Direct cash onboarding (travel, materials, provider setup or paid
configuration) remains unknown and must be added from receipts. Founder time
must not disappear from the economic view merely because it is not cash-paid.

### Five-customer monthly run-cost sensitivity

This is a planning sensitivity using the existing internal tier cost stack plus
the shared-infrastructure midpoint `₹42,500 / N` at `N = 5` (`₹8,500` per
restaurant/month). It is not a quote and does not select a tier mix.

| Internal label | Loaded tier cost before shared infrastructure | Shared allocation at N=5 | Monthly per-customer proxy | Monthly five-customer proxy | With 15% contingency |
| --- | ---: | ---: | ---: | ---: | ---: |
| LITE | ₹1,700 | ₹8,500 | ₹10,200 | ₹51,000 | ₹58,650 |
| BASE | ₹3,000 | ₹8,500 | ₹11,500 | ₹57,500 | ₹66,125 |
| PRO | ₹8,000 | ₹8,500 | ₹16,500 | ₹82,500 | ₹94,875 |

The tier stack includes planning components for variable/provider/API, support,
AI, onboarding and (for PRO) integration-maintenance reserve. Do not add the
one-time onboarding table to this monthly proxy without choosing and recording
an amortization policy; otherwise the same effort is double counted.

### Cash view versus economic view

| View | Include | Exclude/qualify | Decision use |
| --- | --- | --- | --- |
| **Cash** | Actual paid hosting/tooling/provider/API/payment/refund/remediation, direct onboarding cash and collected BABAI income | Unpaid founder time; GST and revenue recognition require finance treatment | Liquidity, payment timing and whether the quarter can be funded |
| **Economic** | Cash plus founder/team time, support/recovery, onboarding effort, CAC and integration-maintenance reserve | Pass-through restaurant funds; unknowns remain unknown | Whether the workflow is worth scaling without hiding founder subsidy |

The 90-day paid-pilot decision must compare recognized income with total
attributable expenditure, not variable cash cost alone. The prior ₹25L income
trigger remains unresolved as to unit; the separate ₹25,00,000 monthly
operating-profit planning target after non-founder operating costs is a scale
planning input, not an October–December gate or forecast.

## 7. Risks and mitigations

| Risk | Trigger | Mitigation | Owner |
| --- | --- | --- | --- |
| Scope expands after freeze | New tier capability or integration added without gate | Put request in decision log; defer unless safety/reliability blocker | Founder/Product |
| Meta/channel onboarding fails | Number, webhook or coexistence cannot be verified | Keep mock channel and manual takeover; validate one controlled channel before count expansion | Tech lead + Operations |
| Payment integrity or custody breach | BABAI would hold funds or state is advanced on an unverified callback | Stop live release; keep payment separate; reconcile provider reference and audit trail | Security/privacy + Finance |
| Delivery distracts from MVP | Delivery becomes a December dependency | Keep pickup-first; use mock/approved adapter only; no fleet operation | Founder/Product |
| Founder support ceiling is exceeded | Repeated >240 recurring support minutes or >24 hours/restaurant/month | Hold next restaurant, remediate and remeasure; no hiring assumption | Operations/Pilot |
| AI cost or behavior is unbounded | AI-heavy usage lacks model/unit/retry or mutates controlled state | Record mode/cost; enforce deterministic policy and human approval; hold expansion | Tech lead |
| Restore or rollback is unproven | Restore rehearsal fails or data integrity differs | Block live status; fix runbook and repeat from clean backup | Tech lead + QA |
| Pipeline is overstated | “Interested” cannot produce access, menu or signed terms | Maintain candidate evidence ledger; treat ten as reserveable, not committed | Operations/Pilot |
| Aggressive path creates unsafe load | Five-live date pressure overrides G3b | Keep quality path as default operating posture; aggressive path needs explicit reduced-scope review | Founder/Product |
| Cash/economic confusion | Founder time or pass-through funds omitted | Maintain both views and assumptions version; finance review before commercial claim | Finance/ledger |

## 8. Decisions deliberately left open

- Named owners and available founder/operator capacity.
- Exact runtime, database, queue/workflow engine, hosting and Meta/BSP choice.
- Payment provider, delivery provider and real adapter contract.
- Final public packaging, pricing, GST, billing schedule, minimum-paying term
  and cancellation/refund wording.
- Which five candidates are configured and which one or two qualify for first
  live operation.
- Whether the aggressive five-live path is approved after G3a/G3b evidence;
  the plan records it but does not select it.
- Reconciliation of the 25+ / 10+ pipeline counts against a durable candidate
  ledger.
- Meaning and timing of the historical ₹25L income trigger.

## 9. Source anchors and link map

The following anchors are the evidence base for this planning artifact:

| Anchor | Use in this plan |
| --- | --- |
| Founder execution-plan input, 2026-09-21 task brief | October–December scope, dates, paths, pipeline counts, five-customer target, no-hiring constraint and requested deliverables |
| `nekurama.babai.research.md:L118-L163` | Narrow pilot flow, pickup-first boundary, field evidence and what remains unvalidated |
| `nekurama.babai.research.md:L176-L186` | Convert interest into pilots; controlled expansion rather than immediate aggressive acquisition |
| `nekurama.raw.chat.json:L192-L205` | Restaurant-owned customer funds and separate BABAI billing |
| `nekurama.raw.chat.json:L79721-L79820` | Staged pilot/readiness framing and evidence sequence |
| `docs/products/babai/product-definition.md` | Current MVP boundary, human control, tier status and open decisions |
| `docs/products/babai/brd.md` | Internal LITE/BASE/PRO capability matrix and founder scale/cost framing |
| `docs/products/babai/architecture.md` and `architecture-lld.md` | Logical modules, deterministic state, adapters, audit, idempotency and open technology choices |
| `docs/products/babai/economics-model.md:421-560` | 50-order ceiling, 500/1000 references, cost buckets and onboarding inputs |
| `docs/products/babai/economics-model.md:762-879` | Support, AI, CAC, restaurant value and ledger telemetry |
| `docs/products/babai/pilot-metrics.md` | Proposed support, reliability, adoption, economics and safety gates |

Where a source says **proposed**, **unknown** or **planning input**, this plan
keeps that status. Estimates must be replaced with measured evidence before a
customer-facing claim, production capacity claim or final commercial decision.
