---
status: provisional-feasibility
owner: BABAI Architecture
last-reviewed: 2026-09-21
sources:
  - "Tier Scope Decision (2026-09-21)"
  - "Founder Scale/Cost Baseline (2026-09-21)"
  - docs/products/babai/architecture.md
  - docs/products/babai/architecture-lld.md
  - docs/products/babai/architecture-cost-options.md
  - docs/products/babai/domain-model.md
  - docs/products/babai/validation.md
  - nekurama.raw.chat.json
---

# BABAI LITE / BASE / PRO Feasibility Matrix

## Decision status

This is an internal feasibility and rollout matrix, not a public plan,
provider approval, price list or staffing commitment. LITE/BASE/PRO are
provisional entitlement profiles over one modular monolith and the same
deterministic domain state. Provider feasibility, terms and approvals remain
dependencies.

## Feasibility matrix

| Area | LITE | BASE | PRO | Deterministic owner/control | Feasibility dependency |
|---|---|---|---|---|---|
| Entitlement/policy | Catalog/conversation capabilities only; server-side quota rejection | Order/pickup/payment capabilities after tenant configuration and policy checks | Explicitly allowlisted higher capabilities and quotas | Billing-account entitlement projection plus Authorization/Policy; reject unavailable/exhausted commands explicitly | Entitlement schema, quota store and policy-version rollout |
| Menu updates | Bounded capture; provisional maximum 3 updates/month | Menu read/update within measured quota | Higher or API-assisted updates only after approval and audit | Catalog/Menu owns immutable revisions and publication; Availability remains separate | Menu ingestion quality, staff review, update cost and API terms |
| Availability | Read availability-aware information; no availability mutation workflow | Deterministic item availability controls used by cart/order validation | BASE plus approved external availability adapter | Catalog/Availability plus Order preconditions | Inventory depth, provider/API capability and operational accuracy |
| Payment | No tenant payment workflow | Direct merchant settlement, webhook verification, refunds and reconciliation | Same payment truth plus approved additional provider/API paths | Payment state machine; Order acceptance remains separate | Merchant KYC, payment provider terms, webhook/refund evidence and professional review |
| Fulfillment/delivery | No delivery workflow; pickup status only where applicable | Pickup plus validated delivery adapter | Validated delivery plus approved advanced integrations | Fulfillment/Delivery/Tracking state machines | Delivery provider approval, rates, callbacks, geography and support |
| Promotions/combos | No promotion/combo workflow | Basic bounded deterministic requests; provisional max 3/day and short activation | Advanced bounded rules under explicit policy/quota | Commercial engines; Price owns combo/bundle pricing, Promotion owns benefits, Order snapshots results | Stacking, combo composition, tax/rounding, abuse and high-contention limits |
| Conversation intent | Menu assistance and order capture; human escalation | Menu/order/payment/delivery tasks | Allowlisted advanced tasks/API actions | Conversation plus typed commands; AI advisory only | Intent evaluation, templates, human takeover and provider policy |
| Advanced APIs | No external API workflow | Only required provider adapters | Allowlisted integrations with scoped credentials, callbacks and audit | Integration ports/adapters; domain state remains internal | Meta/payment/delivery/API approval, terms, SDKs, rate limits and exit tests |
| Webhooks/reliability | Basic verified events and durable command admission | Idempotency, outbox/inbox, retry/DLQ and reconciliation required | Same controls per integration and higher measured concurrency | Workflow/queue/adapters plus Audit; at-least-once, never success-shaped failure | Provider event IDs, `Retry-After`, replay, DLQ operations and audit evidence |
| Support burden | Information/human escalation; lowest founder support | Order/payment/delivery exceptions and reconciliation | Integration failures, advanced task review, quotas and provider support | Manoj technical/recovery; Vinay merchant operations; shared admission/incident review | Hours, provider escalation, incident rates and restaurant capacity |

“PRO full access” means the full allowlisted product surface configured for
that tenant. It never grants unrestricted AI, provider, permission, consent,
payment, order, fulfillment or cross-tenant authority.

## Required command and state gate

Every tiered state-changing request follows the same path:

```text
verify actor/provider
  -> resolve tenant/branch/channel
  -> load entitlement and policy version
  -> enforce quota/rate/provider admission
  -> validate deterministic aggregate transition
  -> write state + outbox + required audit atomically
  -> enqueue idempotent work
  -> retry/reconcile/DLQ external effects
```

AI, clients and provider callbacks cannot select or elevate a tier. An absent
capability is an explicit unavailable/not-applicable outcome, never a silent
successful downgrade. Human takeover pauses conversational automation only and
does not bypass state, authorization, quota, audit or reconciliation controls.

## Provider and reliability requirements

For BASE and PRO payment, delivery and advanced API paths:

- verify webhook signatures and payload shape;
- derive tenant/channel scope from trusted provider mapping;
- deduplicate by provider event ID plus tenant/channel scope;
- use side-effect idempotency keys;
- honor provider throttling and `Retry-After`;
- retry only transient failures with bounded exponential backoff;
- quarantine poison/non-retryable work in DLQ;
- reconcile provider state before declaring completion;
- audit credentials, callbacks, overrides, retries, replay and human actions.

Meta, payment, delivery and advanced API feasibility/approval is not claimed by
this matrix. Each integration requires a test channel/account, current terms,
provider support path, rollback/exit behavior and legal/accounting review.

## Recommended rollout sequence

| Stage | Implementation scope | Entry/advance gate | Stop/rollback gate |
|---|---|---|---|
| **Stage 0 — prove control** | One restaurant; LITE catalog/conversation plus BASE pickup/order/payment path where provider/test access exists; PRO entitlement model present but advanced integrations disabled | Menu review/publish, deterministic order state, payment separation, human takeover, verified webhook/test path, outbox/inbox/DLQ test and restore drill | Any payment/permission/tenant-integrity issue, unsafe AI side effect, failed restore or founder support beyond agreed window |
| **Stage 1 — repeatability** | Up to three restaurants; measured LITE/BASE operation, bounded delivery only where provider validation passes, one controlled PRO experiment if supportable | 15-minute load windows, DB/pool/backpressure signals, provider throttling/reconciliation, tier-cost ledger and founder support within 24 hours/week | P1 recurrence, unresolved P2 beyond one business day, support overage, quota leakage or missing cost/evidence data |
| **Stage 2 — evidence band** | Controlled expansion toward 10 restaurants; provisional 3 LITE / 4 BASE / 3 PRO sensitivity; PRO advanced APIs only when individually validated | 500/1,000 scenario tests, P90/P99/queue/DB gates, restore within RTO, provider terms, support and economics review | Do not claim scale; at 500+ restaurants founder-only support must be replaced by an approved operating model before enrollment |

The 3/4/3 mix is a sensitivity scenario, not a pricing or enrollment
commitment. Move one restaurant between tiers and compare provider, payment,
delivery, AI/API, support, retry/DLQ, failure and reconciliation costs.

## Assumptions and unresolved choices

### Assumptions to validate

- Tier limits are provisional experiments; rates are not vendor facts.
- Menu update, promotion/combo, API and message quotas must be measured per
  tenant/branch and cost-attributed.
- Founder-only support is bounded and has no 24x7 guarantee or hiring
  assumption.
- Stage 0/1/2 gates use current RPO 24h/RTO 8h and scale/load-test baselines.

### Unresolved choices

- Exact entitlement/quota schema and billing-account lifecycle.
- Public tier pricing, provider pass-through and AI/API budgets.
- Meta onboarding/coexistence, payment, delivery and advanced API approval,
  terms, rates and regional limits.
- Promotion stacking, combo/bundle semantics, tax/rounding and abuse limits.
- Conversation intent evaluation, language coverage and human-takeover UX.
- Queue ordering, provider throttling, retry/replay and DLQ operations.
- Stage 2 support replacement model and any future staffing decision.

## Evidence

Founder/current sources:

- Tier Scope Decision (2026-09-21).
- Founder Scale/Cost Baseline (2026-09-21).
- `architecture.md`, `architecture-lld.md`, `architecture-cost-options.md`,
  `domain-model.md`, `validation.md`.
- Raw T21 `bbb21b01-c1d5-42f9-9e1f-702bb346453c` (tier direction); Raw T35
  `97f25c92-127f-4c8c-bde9-c314010cbef7` (entitlements); Raw T68
  `bbb21613-1461-4278-a34f-d4c055c03c84` and Raw T72
  `bbb21c29-06e2-44d7-bd05-c2f9c28c3f4f` (payment boundary); Raw T76
  `bbb21803-3975-4faf-9eda-c51cade91dfe` (delivery boundary); Raw T125
  `bbb21b98-7460-45d5-a616-418ffbf47484`, Raw T126
  `e472fe3d-22d5-4595-aafd-986683b13a3c` and Raw T264
  `bbb21a7f-4d44-4cc1-8f60-1172bdcc303c` (reliability); Raw T410
  `bbb21914-7687-4f6e-848a-30e1e7e850f8` and Raw T414
  `bbb21eb2-e878-4ef3-a499-f81e1cdc2d83` (AI boundary).
