---
status: partial — role-owned feasibility matrix; implementation and external-provider validation pending
owner: BABAI Product / BRD
last-reviewed: 2026-09-21
sources:
  - Tier scope decision (2026-09-21; current task input)
  - docs/products/babai/product-definition.md
  - docs/products/babai/economics-model.md
  - docs/products/babai/validation.md
  - nekurama.babai.research.md
  - nekurama.raw.chat.json (historical pricing/direct-settlement mappings `04cc446b-3a6d-4c19-adc7-4d94ab17d21b`, `4bbdb489-0a0d-45d5-af27-70535c5d4acc`)
---

# LITE / BASE / PRO Feasibility Matrix

## Decision posture

This is a **product-owned feasibility and rollout matrix**, not a claim that
Meta, payment, delivery or advanced API providers are available, approved,
priced or operationally reliable. Those items remain external dependencies.

The tier rates are provisional pre-GST planning estimates with ±15% tolerance,
not public pricing. Every tier must use deterministic entitlement checks,
policy-controlled transitions and human takeover. AI must never become the
authority for payment, order state, refunds, permissions, consent or other
controlled business state.

## Capability feasibility matrix

| Feasibility area | LITE | BASE | PRO | Evidence required before promotion |
|---|---|---|---|---|
| Deterministic entitlements | Server-side plan check permits only menu display/order and limited assistance | Server-side plan check permits menu/order plus explicitly enabled payment/delivery/availability/promotion capabilities | Server-side plan check permits only the approved bounded task and integration set; no wildcard “all AI” entitlement | Entitlement tests show zero cross-tier leakage and auditable denials |
| Menu update limits | Hard cap: **3 updates/month** | Limit must be measured and configured before being promised | Higher/advanced updates require explicit entitlement and audit | Update counter, reset, denial and support-recovery tests |
| Payment | Product capability out of scope | External payment-provider and direct-settlement validation required | Same external dependency plus integration-specific reconciliation | Merchant terms, webhook/refund tests and no-custody proof; no internal feasibility claim |
| Delivery | Out of scope | External delivery-provider validation required; pickup remains fallback | Same external dependency plus advanced integration isolation | Provider contract/rate/availability/failure evidence; no internal approval assumed |
| Item availability | Out of scope for daily availability automation | Enable/disable through menu/cart controls | BASE controls plus approved integrations | Deterministic availability state, audit and human override tests |
| Promotions/combos | Out of scope | Maximum **3 requests/day**, each active for one day or limited time | Advanced bounded promotion/combination workflows with policy and entitlement limits | Request counter, expiry, authorization and rollback tests |
| Conversational intent | Menu assistance and order capture only; do not imply operations automation | Menu, order, payment and delivery intents only | Broader explicitly allowed tasks; policy filters and human escalation required | Intent allowlist/denylist, typed action validation and takeover tests |
| API integration isolation | No advanced API integrations | Standard provider adapters only where externally validated | Advanced APIs isolated behind adapters, quotas, retries, audit and kill switches | Contract/rate-limit/error/retry tests; provider approval remains external |
| Support burden | Lowest intended burden, but menu cap and human fallback must be measured | Moderate burden from payment/delivery/promotion exceptions | Highest burden from integrations, configuration and exception handling | Tier-specific hours, incidents, escalations and cost ledger |

## Recommended rollout sequence

| Stage | Product implementation | Validation gate | Economics gate |
|---|---|---|---|
| **Stage 0 — deterministic core** | Implement entitlement/policy enforcement, LITE menu/order path, BASE menu/order path behind payment/delivery feature flags, menu-update counters, audit and human takeover. Do not implement PRO advanced APIs. | One restaurant; prove no tier leakage, LITE cap enforcement, order success, support ownership and safe fallback. Payment/delivery remain external tests, not assumed capabilities. | Record tier-labelled infrastructure, AI, provider, support and onboarding costs. Do not claim BASE/PRO provider margin. |
| **Stage 1 — paid tier pilot** | Validate BASE availability controls, payment/delivery adapters where externally approved, promotion/combos cap and bounded intent handling. Keep PRO limited to manually controlled/bounded capabilities until integration evidence exists. | Run proposed **3 LITE / 4 BASE / 3 PRO** sensitivity only if enrollment supports it; measure tier adherence, order/fulfillment, support, failures, WTP and actual provider costs. | Compare contribution by tier; separate provider pass-through, AI, payment, delivery, support, onboarding and failure/refund costs. |
| **Stage 2 — advanced integration scale** | Add PRO advanced APIs only after adapter isolation, quotas, retries, audit, rollback and human escalation are tested. Expand only with the existing capacity/readiness gates. | Validate integration failure containment, support replacement plan, 500/1,000 scenario evidence and no unrestricted AI path. | Recompute tier contribution and support economics from actual rates; no automatic public-price or tier expansion decision. |

## Hard feasibility boundaries

- **LITE:** no payment, delivery, daily availability automation,
  promotions/combos or implied operations automation.
- **BASE:** payment and delivery are product-scope intentions only until
  provider, merchant, direct-settlement, webhook, refund and operational
  evidence exists.
- **No unrestricted AI authority:** no tier may authorize AI to mutate payment,
  order, refund, permission, consent or other controlled business state.
- **PRO:** advanced API integrations are isolated, bounded and revocable; PRO
  does not grant unrestricted AI authority.
- Human takeover must remain available across all tiers.
- A provider failure must not silently broaden entitlements, mutate
  deterministic state or bypass policy.

## External dependencies and unresolved feasibility

- Meta/WhatsApp onboarding, messaging policy, rate and coexistence validation.
- Payment provider merchant terms, direct settlement, webhook, refund and
  reconciliation validation.
- Delivery provider availability, price, SLA, failure and refund validation.
- Advanced API partner contracts, rate limits, quotas, sandbox/production
  access and support.
- Founder approval of tier entitlements, 3/4/3 pilot mix, support budgets and
  provisional rates.

No external provider feasibility or approval is asserted by this artifact.
