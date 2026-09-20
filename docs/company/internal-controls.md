---
status: partial — internal control assumptions recorded; execution evidence and external gates remain open
owner: NEKURAMA
last-reviewed: 2026-09-21
sources:
  - 2026-09-20 ADMIN DECISION PACKET
  - nekurama/Bulb#2
  - nekurama/Bulb#5
  - nekurama.raw.chat.json#98947e13-1b0d-4d3f-b9d1-869f51bddd0f
  - nekurama.raw.chat.json#bbb214cb-4959-4878-b6a9-2358ddbf2b07
  - nekurama.raw.chat.json#bbb21d97-c664-432c-9a10-f74d42232df7
  - nekurama.raw.chat.json#bbb212bc-9e87-4d82-beca-b9afe7f68b52
---

# Internal Company-Control Packet

## Scope and boundary

This file records internal planning assumptions and dependencies needed to operate the
NEKURAMA/BABAI packet. It is not evidence of incorporation, trademark clearance, tax or
employer-policy approval, provider completion, or any other external approval.

The external entity register remains parked and unchanged. External certificates, professional
reviews, filings, registrations, clearances and provider approvals remain separate gates and must
not be represented as complete from an internal plan or checklist.

## Internal identity

- **NEKURAMA** is the intended company/operating identity.
- **BABAI** is the product/brand operated by NEKURAMA, not a separate company in this plan.
- The Private Limited application and the incorporation certificate are external transition
  facts. Until the certificate is evidenced, use the identity for planning only and do not infer
  company authority or completed ownership.

## Control assumptions and dependencies

| Control area | Internal assumption or dependency | Required evidence before marking complete |
| --- | --- | --- |
| Account and control migration | Founder-held domain, GitHub, cloud, provider, billing, documentation and recovery assets are inventoried first, then moved to company control after the incorporation gate. | Dated inventory, transfer/admin record, named owners, billing owner and recovery record |
| MFA and recovery | Every privileged account has MFA and company-controlled recovery. No founder's personal email, phone or device is the sole recovery path. | Provider control evidence, recovery-owner record, backup-code custody record and access review |
| Expense approvals | Routine low-value spend may use a written delegation and limit. Founder, related-party, material, non-routine or commitment spend requires explicit approval before payment where practicable. | Invoice/receipt, purpose, approver(s), payment evidence, classification and exception record |
| Founder support and time | Founder work and support are recorded by person, date, workstream, effort or hours, deliverable and evidence link. Time, expenses, loans, reimbursements, salary and equity remain separate classifications. | Dated time/support log, expense evidence and CA/counsel-reviewed classification where money or ownership is involved |
| IP clean room | Only new work intentionally created for NEKURAMA/BABAI and properly adopted by the company is in scope. Employer, Qualcomm, customer, third-party, restricted and unrelated personal material is excluded. | Provenance entry, source/rights record, exclusion review and post-incorporation adoption document where applicable |
| Evidence ledger | Internal controls are tracked in a ledger with an owner, status, next action and expected evidence; secrets and recovery codes never belong in the ledger. | Ledger row plus linked non-secret evidence artifact |

## Account migration and recovery plan

1. **Inventory:** record the asset, current controller, administrator, billing owner, recovery
   path, data location and intended company owner without copying credentials.
2. **Transition gate:** after the incorporation certificate and required professional review, move
   ownership or administrator control, billing, recovery and audit access to the company.
3. **Named access:** use named personal accounts for GitHub and similar services; do not create a
   shared or fictitious company login. Maintain at least two appropriate organization owners.
4. **Harden and review:** enable MFA, store recovery material in an approved company-controlled
   secret store, apply least privilege, record break-glass ownership and recertify access on a
   dated cadence.
5. **Close out:** retain transfer evidence, rotate exposed or transferred credentials, revoke
   superseded access and record unresolved provider limitations as open dependencies.

This is a migration plan, not a claim that any account, MFA setting, recovery method, provider
control or billing transfer is complete.

## Expense, founder support and time records

The internal operating model is hybrid: delegated routine spend must stay within a documented
limit, while material, non-routine, related-party, founder or commitment spend needs explicit
approval and an evidence trail. The exact limit, approvers and exception process remain open until
the founders and the relevant professional reviewer adopt them.

Founder support records should make work and cash legible without changing legal or tax treatment:

- log work by founder, date, workstream, effort/hours, deliverable and evidence;
- retain receipts and payment proof for founder-paid costs;
- classify each amount separately as expense, reimbursement, loan, capital, salary or other
  reviewed category;
- do not convert time, support or unreimbursed expense into equity automatically; and
- obtain CA/counsel review before relying on a classification for books, payroll, tax or ownership.

## IP clean-room boundary

The clean-room record must identify the origin and rights basis for code, designs, documents,
workflows, data, AI-provider material, dependencies and brand assets. General knowledge and
skills are not silently treated as company IP, and employer or third-party confidential material
must not enter the BABAI workstream. Pre-incorporation work remains a planning/provenance item
until the appropriate company adoption, assignment, licence and confidentiality documents are
reviewed and executed after the certificate.

## Internal evidence ledger

The internal ledger is a control-planning artifact, not the external entity register. Use one row
per dependency with these fields:

`control_id`, `workstream`, `assumption_or_dependency`, `owner`, `status`,
`expected_evidence`, `internal_evidence_location`, `external_gate`, `next_action`,
`last_reviewed`.

Initial ledger:

| Control ID | Workstream | Status | Expected evidence | External gate |
| --- | --- | --- | --- | --- |
| IC-01 | Identity: NEKURAMA / BABAI | partial | Dated internal decision and later certificate evidence | Incorporation certificate and company records |
| IC-02 | Account/control migration | partial | Inventory, transfer, billing and named-owner records | Provider execution and professional/company authority review |
| IC-03 | MFA/recovery ownership | unknown | MFA, recovery-owner, backup-code custody and access-review records | Provider capabilities and company-controlled recovery |
| IC-04 | Expense approvals | partial | Written limit, approver matrix, invoice and payment trail | CA/CS/lawyer review where required |
| IC-05 | Founder support/time records | partial | Dated work/support log and separate expense/funding classifications | CA/counsel classification and employer-policy review where applicable |
| IC-06 | IP clean room | partial | Provenance, exclusion review and adoption/assignment evidence | Employer/IP counsel and post-incorporation execution |

## Non-claims and unresolved gates

This packet does not claim:

- incorporation, share issuance, director appointment or statutory completion;
- NEKURAMA or BABAI trademark clearance or registration;
- GST, tax, payroll, audit, incentive or other filing completion;
- employer-policy, Qualcomm conflict, invention-assignment or confidentiality approval;
- provider account transfer, MFA, recovery, billing, backup or security completion; or
- execution of contracts, IP assignments, adoption documents or external approvals.

Those items remain open until the relevant external artifact and professional review are recorded
in the appropriate evidence system.
