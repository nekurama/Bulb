---
status: partial — SaaS direction confirmed; pricing, pilot terms and economics remain open
owner: BABAI
last-reviewed: 2026-09-20
sources:
  - nekurama/Bulb#1
  - historical ManojVysyaraju/bulb#1
  - nekurama.babai.research.md
  - nekurama.raw.chat.json (ordered turns 70, 276, 278; mappings `4bbdb489-0a0d-45d5-af27-70535c5d4acc`, `04cc446b-3a6d-4c19-adc7-4d94ab17d21b`)
  - Admin decision packet (2026-09-20; current task input)
---

# Business Model

## Current answer

BABAI is a SaaS business. Restaurant order payments and BABAI subscription billing are separate flows; BABAI should not depend on transaction/delivery margin as its initial economic foundation.

The initial business-value hypothesis is that restaurants have a meaningful pain around commission costs on existing platforms. Initial research found this concern recurring among restaurant businesses. BABAI's intended model is to avoid a marketplace commission and instead charge the restaurant a subscription fee. This is a value and pricing hypothesis, not yet paid validation.

The next commercial validation should be a **paid or deposit-backed pilot with an explicit end date**. A deposit may be refundable or applied according to terms that are not yet decided. The amount, refund treatment, billing instrument and calendar end date are unknown and must be fixed before enrollment. Paid continuation remains a validation hypothesis, not an assumption of success.

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

## Evidence and open economics

Field interviews support the problem and interest, but not willingness to pay (`nekurama.babai.research.md`, “What remains unvalidated”). The immediate commercial proof is a completed paid or deposit-backed pilot with an explicit end date and measured willingness to pay; no conversion threshold beyond the admin packet has been supplied.

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
