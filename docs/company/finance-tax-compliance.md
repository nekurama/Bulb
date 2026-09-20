---
status: partial
owner: NEKURAMA
last-reviewed: 2026-09-20
sources:
  - nekurama/Bulb#2
  - nekurama/Bulb#1
  - nekurama/Bulb#5
  - nekurama.raw.chat.json#bbb21621-2657-4cf5-a886-3d3079042f08
  - nekurama.raw.chat.json#bbb21e3d-91a3-48de-90a7-986c6beb716b
  - nekurama.babai.research.md
  - raw chat node 0410d7b4-9ea0-48e1-b850-d4583a4f8f00
  - raw chat node 2012055b-4f07-4db1-9f2d-d6c6202bce07
  - raw chat node 1a7e5861-74a7-4600-bdaa-94a4c95993ca
  - raw chat node 4bbf0607-15de-4631-998e-5310643ecb1a
---

# Finance, Tax & Compliance

## Current durable answer

Company finance must distinguish founder capital, expenses/reimbursements, company operating
revenue, SaaS revenue, customer payment flows, provider charges, taxes and FX. NEKURAMA should
maintain double-entry books and one authoritative ledger; the accounting product is intentionally
deferred.

BABAI customer payments to restaurants are not company revenue/custody by default. BABAI
subscription billing is separate from restaurant order settlement. The MVP direction is direct
merchant payment through a regulated provider, with BABAI receiving status/reconciliation rather
than holding or settling restaurant funds.

Current company opportunity/compliance direction includes DPIIT recognition and IPR support.
DeepTech status and 80-IAC eligibility require separate professional validation. GeM is optional.
ONDC is deliberately not an immediate company workstream. Central and state schemes belong in an
opportunity register, not in forecast revenue.

## Commercial hypotheses (not decisions)

- Field research proposed subscription hypotheses of ₹999 / ₹2,499 / ₹4,999 before GST and a
  possible onboarding/training fee. This is demand-testing input, not approved pricing.
- Earlier modelling also used a temporary ₹499 / ₹999 / ₹1,999 plan mix. The conflict is retained:
  no price is durable until paid pilots establish willingness to pay, usage and cost.
- Delivery, payment processing, Meta, AI and other provider charges must be measured and classified
  before a margin claim is relied upon.

## E-setup and compliance checklist

| Checklist item | Owner | Required input/evidence | Status |
|---|---|---|---|
| Choose entity and accounting/tax operating model | Founders + CA/CS | Entity decision, expected activities, funding and employment facts | Open |
| Open company bank account and approval workflow | Finance owner + CA/CS | Incorporation/KYC, authorised signatories, board approval | Post-incorporation |
| Set up double-entry books and funding ledger | Finance owner | Bank feeds, chart of accounts, founder funding instruments, receipt policy | Not started |
| Decide GST registration/applicability and invoice model | CA/CS | Supply types, place of supply, turnover and compulsory-registration triggers | Challenge required |
| Separate SaaS billing from merchant order settlement | Product/finance owners | Provider contracts, settlement reports, refund flows and reconciliation fields | Design required |
| Document founder compensation/reimbursement policy | Founders + CA/counsel | Employment status, approvals, expense evidence and tax treatment | Open |
| Apply for DPIIT recognition when eligible | Finance/ops owner | Incorporation proof, innovation/scalability narrative, URL/deck and eligibility evidence | Post-incorporation |
| Validate DeepTech eligibility | Founders + DPIIT/CA adviser | Current criteria mapped to BABAI's actual technology and R&D evidence | Open |
| Validate 80-IAC separately from DPIIT | CA/tax adviser | Entity, incorporation date, turnover, profit timing and tax-regime analysis | Open |
| Maintain schemes/opportunity register | Finance/ops owner | Official scheme source, eligibility, deadline, benefit, owner and evidence | Ongoing |
| Decide GeM/government sales only when commercially relevant | Founders | Target customer, procurement requirements, support burden and economics | Deferred |
| Record actual provider/message/payment costs per restaurant | Finance/product owners | Provider invoices, message categories, order/campaign IDs and settlement data | Before paid scale |

## Guardrails

- Do not treat a consultant quote, market estimate or founder conversation as statutory tax/legal
  advice.
- Do not assume DPIIT recognition makes 80-IAC automatic; they are separate eligibility questions.
- Do not assume “GST” is universally required at incorporation; obtain an applicability analysis.
- Do not forecast payment/delivery margin until pass-through, custody, refunds, settlement, fees and
  tax treatment are documented.

## Citations and historical context

- The payment boundary and direct-merchant MVP principle are recorded in raw chat nodes
  `0410d7b4-9ea0-48e1-b850-d4583a4f8f00` and
  `4bbf0607-15de-4631-998e-5310643ecb1a`.
- Accounting software was explicitly deferred while double-entry books and compliance architecture
  remain required (raw chat node `2012055b-4f07-4db1-9f2d-d6c6202bce07`).
- DPIIT is a post-incorporation objective, while DeepTech and 80-IAC remain validation workstreams
  (raw chat node `1a7e5861-74a7-4600-bdaa-94a4c95993ca`).
- Field evidence records the 19-business interview signal, proposed pricing and the fact that
  willingness to pay, payment verification, refunds and provider costs remain unvalidated
  (`nekurama.babai.research.md`, “Pricing hypothesis”, “What remains unvalidated” and “Success
  criteria”, lines 65-165).

## Retained prior handoff status boundaries

- **Confirmed direction:** finance categories remain separate; subscription billing is not
  restaurant settlement; bootstrap-first incentives are optional.
- **Professional validation required:** entity/tax structure, GST/TDS/payroll/audit triggers,
  revenue recognition, 80-IAC/DeepTech eligibility and any state-incentive claim.
- **Unknown:** accounting software, exact filing dates, selected CA/CS provider and first-year
  transaction volumes.
- **Pending:** incorporation, bank/accounting setup, registrations, filing model, founder policy,
  treatment validation and scheme execution.

The earlier founder evidence anchors are retained: history `[250]` separates BABAI subscription
billing from restaurant customer payments; `[70]` warns that custody/settlement creates additional
regulatory and reconciliation complexity; `[527]` identifies accounting/tax as an active
workstream; and `[554]` records Hyderabad/Telangana as the intended company ground and no AP
entity merely for incentives.
