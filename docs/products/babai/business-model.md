---
status: partial — SaaS direction confirmed; pricing, pilot terms and economics remain open
owner: BABAI
last-reviewed: 2026-09-21
sources:
  - nekurama/Bulb#1
  - historical ManojVysyaraju/bulb#1
  - nekurama.babai.research.md
  - nekurama.raw.chat.json (ordered turns 70, 276, 278; mappings `4bbdb489-0a0d-45d5-af27-70535c5d4acc`, `04cc446b-3a6d-4c19-adc7-4d94ab17d21b`)
  - Founder decision packet (2026-09-21; current task input)
  - Tier scope decision (2026-09-21; current task input)
  - economics-model.md (Track 2 v0.5)
---

# Business Model

## Current answer

BABAI is a SaaS business. Restaurant order payments and BABAI subscription billing are separate flows; BABAI should not depend on transaction/delivery margin as its initial economic foundation.

The initial business-value hypothesis is that restaurants have a meaningful pain around commission costs on existing platforms. Initial research found this concern recurring among restaurant businesses. BABAI's intended model is to avoid a marketplace commission and instead charge the restaurant a subscription fee. This is a value and pricing hypothesis, not yet paid validation.

The next commercial validation is a **fixed 90-day paid pilot**, not a free
trial. Cancellation, refund and minimum-paying terms must be tied to a signed
agreement template; the exact commercial and legal wording remains open. The
pilot closes at the 90-day review when team-defined readiness evidence shows
BABAI is operationally ready for materially larger onboarding volumes. Paid
continuation remains a validation hypothesis, not an assumption of success.

There is **no committed public price** in the current BRD. The previously discussed ₹999 / ₹2,499 / ₹4,999 + GST levels remain historical pricing hypotheses to test, not published tiers or current commercial truth (`nekurama.raw.chat.json`, ordered turns 276 and 278; mapping `04cc446b-3a6d-4c19-adc7-4d94ab17d21b`).

The earlier ₹499/month, ₹1,499–₹2,499/month, ₹999 setup and Tadka/Thali/Feast package ideas in `nekurama.chatgpt.md` are historical experiments and are not current commercial commitments.

## Unit economics

The pilot should build a cost and contribution model before public pricing is set. At minimum, record per restaurant and per pilot:

| Model component | Required treatment |
|---|---|
| Infrastructure | Hosting, storage, observability and operational tooling attributable to the pilot |
| Provider and payment fees | WhatsApp/Meta, AI, payment gateway and any delivery/provider charges |
| Onboarding and support | Setup, menu/catalog work, training, founder/operator support and ongoing interventions |
| Tooling | Development, monitoring, support and other recurring tools needed to operate the pilot |
| Failure/refund cost | Failed messages, duplicate/missed orders, payment exceptions, refunds, credits and remediation effort |
| Revenue basis | Pilot fee or deposit terms, with refundable deposits kept distinct from recognized revenue until finance validation |
| Margin | Contribution after the above costs; no target percentage has been supplied |
| GST | Tax treatment and invoice presentation require professional CA/CS validation; GST must not be silently counted as margin |

The initial money-flow boundary is:

```text
Customer → Restaurant
Restaurant → BABAI subscription
```

BABAI should not hold or settle customer funds in the initial product. Customer order funds settle directly to the restaurant/business; BABAI subscription or pilot billing is separate. Payment, delivery and messaging provider charges should be recorded in the cost model and their pass-through/billing treatment validated before commercial launch.

The model should establish whether onboarding and ongoing support effort per restaurant is low enough to support gradual expansion toward up to 10 restaurants without support becoming a business bottleneck.

The detailed Track 2 v0.5 formulas, finalized-for-planning low/base/high
ranges, actual-rate input register, per-restaurant break-even view and
unresolved inputs are maintained in
[`economics-model.md`](economics-model.md). That artifact is a planning model,
not an approved price or margin decision.

## Margin, pricing and review cadence

Margins are calculated against the same-period income bar:

```text
Margin = (IncomeBar - TotalExpenditure) / IncomeBar
```

`TotalExpenditure` includes direct costs, indirect/shared costs, provider and
payment fees, onboarding/support, founder opportunity cost, tooling and
failure/refund remediation. GST treatment remains separate and requires
professional validation.

Pricing must be derived from measured contribution economics and signed pilot
evidence, not assumed tiers. The first pricing review is scheduled for **six
months after the 90-day pilot**, subject to founder approval and evidence. The
cadence is a review point, not an automatic price increase.

The current internal planning output at the proposed 40% contribution
sensitivity is:

| Cost posture | 90-day paid pilot, full-cost `N=1` view | Post-pilot monthly plan, shared-cost `N=10` view |
|---|---:|---:|
| Low | ₹74,900–₹1,01,300 | ₹12,200–₹16,500 |
| Base | ₹1,86,600–₹2,52,400 | ₹30,300–₹41,000 |
| High | ₹4,28,300–₹5,79,500 | ₹72,600–₹98,300 |

These are internal planning bands with a maximum ±15% variance around each
midpoint. They are not public prices, quotes or approved tiers. Any amount
collected below the model floor is recorded as an explicit economic subsidy.

The separate tier-scope experiment uses provisional pre-GST midpoints of
₹4,999 (LITE), ₹9,999 (BASE) and ₹19,999 (PRO), each with a maximum ±15%
planning tolerance. The proposed 3/4/3 LITE/BASE/PRO pilot mix is a sensitivity
view only. Tier economics must be recalculated from actual provider, AI,
payment, delivery, support, onboarding and failure/refund costs before any
public packaging decision.

## Founder decisions versus external validation

**Founder decisions:** approve the 90-day paid terms, readiness-gated exit
evidence, minimum-paying agreement-template fields, contribution-derived
pricing method, six-month review cadence and any public pricing.

**External/professional validation:** prepare and review cancellation/refund
wording, payment-provider terms, GST/accounting treatment, revenue recognition,
deposit handling and trademark/legal implications. This artifact does not
invent legal language.

## Evidence and open economics

Field interviews support the problem and interest, but not willingness to pay (`nekurama.babai.research.md`, “What remains unvalidated”). The immediate commercial proof is a completed fixed 90-day paid pilot with measured willingness to pay; no conversion threshold beyond the founder packet has been supplied.

## Questions

- [ ] Final packaging/entitlements
- [ ] Final pricing after pilot
- [ ] Gross contribution model
- [ ] CAC and acquisition assumptions
- [ ] Onboarding/support cost
- [ ] Expansion/upsell model
- [ ] Billing and cancellation policy
- [ ] Pilot fee/deposit amount, refund treatment and end date
- [ ] Trial/pilot commercial terms and billing instrument
- [ ] Cost allocation method per restaurant and per order
- [ ] Failure/refund reserve or remediation policy
- [ ] Margin target and GST treatment with CA/CS
- [ ] 500/1,000 restaurant traffic, request-cost and support-capacity model
- [ ] ₹25L+ income-trigger unit selection (monthly versus annual sensitivity)
