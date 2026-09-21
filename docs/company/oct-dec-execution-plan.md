---
status: planning-only
owner: NEKURAMA founders + evidence owner
planning-horizon: October–December
last-reviewed: 2026-09-21
sources:
  - docs/company/e-setup-checklist.md
  - docs/company/finance-tax-compliance.md
  - docs/company/founders-ownership-governance.md
  - docs/company/ip-brand-legal.md
  - docs/company/security-privacy-controls.md
  - docs/products/babai/architecture-cost-options.md
  - docs/products/babai/economics-model.md
  - nekurama.raw.chat.json
---

# October–December Company & Control Execution Plan

This is a planning artifact, not a completion record, forecast, quote, approval,
or hiring plan. Every line below remains open until the required external
evidence and approval are recorded. The plan does not change
`docs/company/external-entity-register.json` or
`docs/company/external-entity-register.md`.

## Planning guardrails

- Keep three views separate: **company/brand/external setup reserve**,
  **product/POC/pilot cash**, and **founder economic time**.
- Incorporation, CS/lawyer, trademark/brand, accounting, and domain/email are
  external-validation-gated planning lines. `TBD` means that no amount is
  approved until scope, quote, applicability, or provider evidence exists.
- Do not describe an application, certificate, professional engagement,
  clearance, account migration, or control as complete without its evidence.
- No hiring assumption is made. Until a separately approved decision changes
  this posture, founder capacity is the operating constraint.
- Keep BABAI subscription/platform revenue, merchant settlement, provider
  charges, taxes, founder funding, reimbursements, and expenses separately
  classified as required by the finance controls.

## Budget views and reserve treatment

| View / reserve | What it contains | Cash treatment | Economic-cost treatment | Approval boundary |
| --- | --- | --- | --- | --- |
| **Company / brand / external setup reserve** | Incorporation, CS/lawyer, trademark/brand, accounting, domain and email | Separate cash envelope; each line is `TBD` until externally validated; record quote, tax, currency and payment owner | Add founder time spent obtaining advice, preparing evidence, and migrating control, but do not treat it as salary or a cash payment | Founders approve scope and material spend; CS/lawyer/CA/trademark counsel/provider evidence is required before commitment |
| **Product / POC / pilot cash** | Right-sized hosting, storage, database, queue, provider usage, tooling, pilot onboarding, refunds/credits and other approved pilot cash | Separate from company setup; use an approved pilot record and actual invoices/provider exports; the existing base/controlled pilot infrastructure range of **₹25,000–₹60,000/month** is a repository planning range, not a quote | Add attributable founder onboarding, support, incident, reconciliation and recovery time; keep merchant pass-through/customer-order funds outside BABAI contribution unless a validated contract says otherwise | Dual founder approval for material payments; CA/legal validation before payment launch or custody/settlement changes; provider/account ownership evidence required |
| **Founder economic time** | Time spent on company setup, controls, onboarding, support, incidents, reconciliation and recovery | Zero cash by default; cash appears only if a separately approved reimbursement, salary, fee or accrual exists | Hours × an approved internal sensitivity value. The economics model's ₹500/₹1,000/₹2,000 per hour cases are planning sensitivities, not salary, consultant quotes or accounting treatment | Founders approve the time categories and rate used for a planning view; actual hours require time-log evidence |

### 15% contingency

1. **Cash plan:** hold a separate, uncommitted contingency equal to **15% of
   the externally validated cash subtotal** across the company/brand/external
   setup reserve and product/POC/pilot cash. Do not spread it silently across
   line items or count it as committed spend.
2. **Economic plan:** show a separate 15% sensitivity on the priced economic
   subtotal (cash plus recorded founder time) when presenting a downside view.
   This is not a second cash reserve and is not an accounting entry.
3. Release contingency only against a ledger line with evidence, owner,
   dependency and the same approval level as the underlying spend. Never use it
   to bypass an incorporation, professional-review, tax, payment, or
   account-control gate.
4. If a line has no validated base amount, its contingency remains `TBD`; do not
   invent a percentage-derived amount from an unpriced placeholder.

## October–December sequence

| Month | Company/control execution | Product/POC/pilot cash | Founder-time capture | Exit evidence / unresolved gate |
| --- | --- | --- | --- | --- |
| **October** | Create the internal evidence ledger; obtain scopes/quotes or applicability advice for incorporation, CS/lawyer, trademark/brand, accounting, and domain/email; preserve the application record; inventory control owners without copying credentials | Freeze the pilot cash categories and measurement fields; use existing repository planning ranges only as labeled planning inputs; no provider or payment commitment without the required review | Start a time log split between setup/control work and product/pilot work; use the founder-only support proposal as a capacity guardrail, not an accepted rota or SLA | Evidence ledger exists; external quotes/advice and incorporation evidence remain pending unless supplied outside the repository |
| **November** | If the incorporation certificate and related evidence exist, route post-certificate founder/company adoption, account-control, books, and professional-review actions through the documented approvals; otherwise carry them forward as pending | Release only approved, right-sized pilot cash against an approved pilot record, invoice/provider evidence, and payment-flow review; keep contingency uncommitted | Reconcile actual hours to the planned categories and founder caps; pause or re-scope when capacity limits are exceeded; do not replace the founders with assumed hires | Certificate, professional reviews, clearances, account-control records, books setup, and pilot approvals are still external gates |
| **December** | Reconcile company setup spend, pending controls, evidence links, and approval exceptions; refresh the next-quarter reserve without converting pending items into completion claims | Reconcile invoices, provider exports, refunds/credits, pass-through treatment and unused reserve; update cash and economic views separately | Review time logs, opportunity-cost sensitivity and workload against the founder-only capacity proposal; record unresolved items and stop/continue decisions | No line closes without evidence; any missing external evidence or approval remains explicitly unresolved |

## Validation-gated planning lines

All rows are **planning only**. The evidence column names what must exist
before the line can be treated as an approved execution item.

| ID / line | Owner | Evidence required | Budget treatment | Approval / dependency | Cash view | Economic-cost view |
| --- | --- | --- | --- | --- | --- | --- |
| **C-01 Incorporation and company identifiers** | Founders + CS/company secretary | Incorporation certificate, company identifiers, registered-office and director records, and a safe evidence reference | Company/external reserve; `TBD` until CS confirms applicable fees and scope; include tax/filing treatment separately | Depends on application process and CS confirmation; no post-certificate execution before evidence | Cash only when an evidenced fee is approved and paid | Add founder preparation/follow-up hours from the ledger; no claim that incorporation is complete |
| **C-02 CS/lawyer incorporation and governance review** | Founders + CS/lawyer | Written scope/quote or review, approved drafts, and confirmation covering entity, directors, founder/shareholder terms, vesting, approvals and contract sequence | Company/external reserve; quote-led, with any filing fee separately identified; no assumed retainer | Depends on incorporation evidence and founder decisions; material spend requires founder approval | Validated professional fee plus tax/payment evidence | Add founder review and decision time; professional advice is not replaced by repository text |
| **C-03 NEKURAMA/BABAI trademark and brand clearance** | Founders + trademark counsel | Name/MCA search where applicable, Indian trademark search, phonetic/visual analysis, goods/services scope, counsel opinion and filing decision | Company/brand reserve; `TBD` until counsel scope, official fees and filing decision are known; domain purchase is separate | Depends on final applicant/entity details and mark scope; no “cleared” status without counsel evidence | Evidenced counsel/official filing payment only | Add founder briefing, review and brand-decision hours; research is not clearance |
| **C-04 Accounting, books, GST/tax and compliance setup** | Finance owner + CA/accountant, with CS where applicable | CA confirmation, engagement/scope, books setup plan, controlled software decision, tax calendar, registrations/filings where applicable, and reconciliation evidence | Company/external reserve; `TBD` until CA scope and software/provider terms are validated; separate recurring operating cost from setup cost | Depends on incorporation/company identifiers and actual activities; CA validation required before accounting or payment-flow conclusions | Evidenced CA, software and bookkeeping costs; preserve invoices and approvals | Add founder/finance-owner setup and reconciliation time; no claim that tax or GST work is complete |
| **C-05 Domain and company email reserve** | Technical/account owner + founders + finance owner | Registrar/provider invoice, company-controlled ownership/admin, MFA/recovery record, billing ownership and safe migration evidence; no credentials in the repo | Company/external reserve; `TBD` until provider quote and company-control path are known; domain and email are distinct line items | Depends on incorporation/account-control decision and security controls; approval required before ownership or billing change | Evidenced purchase/renewal/provider charges only | Add inventory, migration, access-review and recovery-test hours; account ownership remains pending until evidence |
| **P-01 Product/POC/pilot cash envelope** | Product/technical owner + finance owner; founders approve | Approved pilot record, scope/end date, provider/account evidence, invoices/exports, usage, refunds/credits, reconciliation and CA/legal payment-flow review | Separate product cash reserve; existing ₹25,000–₹60,000/month infrastructure range is a planning range only; no public price or vendor quote is implied | Depends on product readiness, provider approval, payment-flow review and founder capacity; no hiring assumption | Hosting, tools, provider usage, onboarding cash and approved refunds/credits; merchant settlement/pass-through remains separate | Add founder onboarding/support/incident/recovery hours and any approved internal sensitivity |
| **F-01 Founder economic time** | Manoj and Vinay, with evidence owner | Date/period, founder, work category, hours, related line/pilot, decision or incident reference, and approval/review record | Not a cash reserve by default; reimbursements, salary, fees or accruals require a separate approved transaction and CA treatment | Depends on founder agreement/approval policy and the pilot capacity guardrails; no assumed employee or contractor | Zero unless separately approved and evidenced as paid/accrued | Hours × selected planning sensitivity; preserve the low/base/high value as a sensitivity, not a commitment |

## Founder capacity input

The current founder execution input is a bounded, founder-only operating proposal:
Manoj owns technical incidents, architecture, provider/integration failures,
recovery and security-sensitive engineering; Vinay owns onboarding,
merchant/business-process support, communication and operational triage. The
proposal states caps of **6 hours/week for Manoj**, **8 hours/week for Vinay**,
and a **10-hour/week planned-load ceiling within a 14-hour combined hard cap**,
with no 24/7 commitment. These are planning guardrails from
[`architecture-cost-options.md`](../products/babai/architecture-cost-options.md#capacity-limits-and-expansion-gates),
not an accepted rota, employment commitment, or customer SLA.

When actual support or setup time exceeds those guardrails, the response is to
pause enrollment, reduce scope, or obtain an explicit founder decision supported
by evidence. Do not silently solve the overage by assuming a hire.

## Internal evidence ledger

Maintain a repository-safe ledger for every line and every contingency release.
The ledger may link to an external system or document location, but must not
contain passwords, tokens, recovery codes, personal payment details, private
customer data, or confidential employer material.

Required fields:

| Field | Requirement |
| --- | --- |
| Ledger ID | Stable ID, such as `C-02-001` or `P-01-001` |
| Planning line / reserve | One of `C-01`–`C-05`, `P-01`, `F-01`, or a clearly approved extension |
| Owner and approver | Named person/role; distinguish preparer from approver |
| Evidence type and safe locator | Quote, invoice, certificate, written professional review, provider export, time log, approval, or reconciliation; link/location must be safe |
| Status | `planning`, `awaiting external evidence`, `approved`, `paid`, `reconciled`, or `unresolved`; never infer `complete` from a chat statement |
| Date/period | Evidence date or time-log period as supplied; do not invent dates |
| Currency, amount and tax | Actual or explicitly labeled estimate; keep tax/GST treatment separate until CA validation |
| Cash/economic classification | Cash, founder economic time, pass-through, or both; record whether a value is paid, accrued, or sensitivity-only |
| Dependency and approval | Precondition, approval decision, and any dual-approval or professional-review requirement |
| Contingency use | `none` or the specific 15% reserve release and its supporting approval |
| Reconciliation / review | Invoice-to-payment, provider-to-ledger, time-log review, exception, and next review owner |

The evidence owner should reconcile the ledger at least once per planning
month and before any reserve is released. Missing external evidence remains an
open gate in the plan and in the relevant company control document.

## Source boundary

The company controls are drawn from the [e-setup checklist](e-setup-checklist.md),
[finance/tax controls](finance-tax-compliance.md),
[founder governance](founders-ownership-governance.md),
[IP/brand/legal controls](ip-brand-legal.md), and
[security/account controls](security-privacy-controls.md). The founder
execution input and cash/economic separation are cross-checked against the
[BABAI cost-options artifact](../products/babai/architecture-cost-options.md)
and [economics model](../products/babai/economics-model.md), which in turn cite
the founder export (`nekurama.raw.chat.json:L192-L205` for cash/economic
boundaries and `nekurama.raw.chat.json:L79721-L79820` for founder-only
execution/capacity input) and distinguish planning inputs from evidence.

No external gate is closed by this file. The external entity register remains
the separate evidence register and is intentionally not edited by this plan.
