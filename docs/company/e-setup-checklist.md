---
status: living
owner: NEKURAMA
last-reviewed: 2026-09-20
sources:
  - nekurama/Bulb#2
  - nekurama/Bulb#5
  - nekurama.raw.chat.json
---

# NEKURAMA Company E-Setup Checklist

This is an evidence-backed execution checklist for company setup. It does not replace legal, tax, accounting, employment or security advice, and it does not close a decision that the source record leaves open.

## Status key

- **confirmed** — explicit current direction/principle
- **partial** — direction exists; execution or details remain
- **unknown** — no reliable current answer is recorded
- **professional-validation-required** — obtain qualified legal, tax, accounting, employment or regulatory confirmation before acting

## Current company baseline

| Area | Current status | Evidence |
| --- | --- | --- |
| Company/product boundary | **confirmed** — NEKURAMA is the intended operating company and BABAI is a product/brand, not a separate company | `nekurama/Bulb#2` comment `IC_kwDOUYGptM8AAAABUPMg3A`; `nekurama/Bulb#5` §§1, 5; raw `bbb214cb-4959-4878-b6a9-2358ddbf2b07` |
| Legal form | **partial; professional-validation-required** — Private Limited is preferred, but incorporation is not legally locked | `nekurama/Bulb#2` comment `IC_kwDOUYGptM8AAAABUPKU-w`; `nekurama/Bulb#5` §§1, 7; raw `bbb2179b-ab78-4f20-98ef-1bf49a0702f7` |
| Founder ownership | **confirmed** — latest issue record is Manoj 55% / Vinay 45%; earlier 60:40 discussion is historical and superseded | `nekurama/Bulb#2` comment `IC_kwDOUYGptM8AAAABURgwyw`; earlier principle `IC_kwDOUYGptM8AAAABUQCQ1w`; raw `bbb21a4e-30b7-44bf-a04e-12e206e2411c` |
| Founder funding | **confirmed principle; partial execution** — funding is separate from equity and must be documented as capital and/or a loan | `nekurama/Bulb#2` comments `IC_kwDOUYGptM8AAAABUQCQ1w`, `IC_kwDOUYGptM8AAAABUfqjQw`; raw `bbb21d97-c664-432c-9a10-f74d42232df7` |
| IP architecture | **confirmed direction; partial execution** — NEKURAMA is intended IP holder; background, company, third-party/OSS and customer material/data remain distinct | `nekurama/Bulb#2` comments `IC_kwDOUYGptM8AAAABURBgOA`, `IC_kwDOUYGptM8AAAABURk3QA`, `IC_kwDOUYGptM8AAAABURlsyA`; `nekurama/Bulb#5` §3 |
| Brand/domain | **confirmed direction; professional-validation-required** — company-owned NEKURAMA/BABAI marks and domain control are intended; clearance and filing remain work | `nekurama/Bulb#2` comment `IC_kwDOUYGptM8AAAABURuSLQ`; raw `bbb21ece-7bb6-4a1f-9798-9ebd4ed6bcbd`, `bbb217ee-01a7-4f44-a207-116c50531b56` |
| Startup benefits | **partial** — DPIIT and SIPP/IPR are post-incorporation objectives; DeepTech and 80-IAC need later validation; GeM is optional and ONDC is a product/architecture track | `nekurama/Bulb#2` comments `IC_kwDOUYGptM8AAAABUqUflw`, `IC_kwDOUYGptM8AAAABUrXTVw`; raw `bbb21e3d-91a3-48de-90a7-986c6beb716b` |

## Workstream checklists

### 1. Identity, entity and governance

- [ ] **professional-validation-required** Confirm name availability, entity form, registered office, incorporation documents, director/promoter eligibility and statutory filings with a qualified CS/lawyer.
- [ ] **professional-validation-required** Review current/future employment, outside-business, conflict-of-interest and invention-assignment restrictions before founder appointment or company work. The issue record specifically flags Manoj's Qualcomm employment for review (`nekurama/Bulb#2`, comment `IC_kwDOUYGptM8AAAABUPKU-w`).
- [ ] **partial** Execute founder/shareholder agreement and align it with the Articles: 55:45 ownership, reserved matters, voting thresholds, transfer restrictions, leaver provisions, vesting/lock-in if chosen, deadlock resolution and founder exit.
- [ ] **partial** Record each founder's role separately from founder/shareholder/director/employee status; do not infer titles or ownership for other contributors.
- [ ] **partial** Choose and document founder funding instruments (share capital versus properly documented founder loan), approval authority and reimbursement rules.
- [ ] **unknown** Decide whether and when an ESOP/equity incentive pool is needed; obtain legal/tax implementation advice before issuing anything.

### 2. IP, brand and legal stack

- [ ] **confirmed direction / partial execution** Prepare the background-IP disclosure and exclusion schedule, including the pre-incorporation `nekurama.com` asset, then document transfer/control by NEKURAMA after incorporation (`nekurama/Bulb#2`, comments `IC_kwDOUYGptM8AAAABURLh-Q`, `IC_kwDOUYGptM8AAAABURc-DQ`).
- [ ] **professional-validation-required** Execute founder, employee and contractor confidentiality and IP-assignment documents; exclude employer, third-party and unrelated personal material.
- [ ] **partial** Maintain IP provenance for code, designs, prompts/workflows, documentation, inventions, trademarks, dependencies and customer-provided material.
- [ ] **partial** Create a third-party/OSS and AI-provider register: licence, attribution, SBOM/provenance, service terms, data retention/training use, commercial-use rights and security review.
- [ ] **professional-validation-required** Run separate NEKURAMA and BABAI trademark clearance; decide word/device marks, classes and filing owner/timing. Domain ownership is not trademark clearance.
- [ ] **professional-validation-required** Draft and review founder/shareholder, employment/contractor, SaaS/customer, Terms of Service, privacy notice/DPA, vendor/provider and partner agreements.
- [ ] **unknown** Confirm whether any customer, payment, messaging, AI or infrastructure provider contract imposes data-location, audit, indemnity, retention or subprocessor obligations.

### 3. Finance, tax and compliance

- [ ] **confirmed direction / partial execution** Engage a CA/CS operating model covering bookkeeping, monthly close, GST/TDS/income-tax assessment, ROC/MCA calendar, statutory records and management reporting (`nekurama/Bulb#2`, comment `IC_kwDOUYGptM8AAAABUWdirQ`).
- [ ] **professional-validation-required** Confirm incorporation-time tax structure, GST registration trigger, invoicing, TDS/payroll obligations, audit applicability, tax regime and revenue-recognition treatment.
- [ ] **partial** Open a company current account and maintain separate books for founder capital, founder loans, reimbursements, operating expenses, SaaS revenue, provider charges, taxes and FX.
- [ ] **partial** Keep restaurant customer order money separate from NEKURAMA/BABAI SaaS revenue unless a reviewed contract/payment design makes the company a collection or settlement party.
- [ ] **unknown** Select accounting software and define approval, payment, reconciliation and month-end close controls (`nekurama/Bulb#2`, comment `IC_kwDOUYGptM8AAAABUdl6sg`).
- [ ] **confirmed direction / partial execution** Apply for DPIIT recognition promptly after incorporation and use SIPP/IPR support only for genuine qualifying filings (`nekurama/Bulb#2`, comment `IC_kwDOUYGptM8AAAABUqUflw`).
- [ ] **professional-validation-required** Validate DeepTech eligibility and 80-IAC timing/eligibility with current evidence and a CA/tax adviser; do not claim either from AI usage or from the DPIIT ceiling alone.
- [ ] **partial** Maintain a small opportunity register for Telangana/AP/state and central schemes; evaluate eligibility, operating-presence requirements and net economics before acting. Do not create an entity solely for incentives.
- [ ] **confirmed direction** Keep GeM as an optional future channel and ONDC as a separate BABAI product/architecture workstream, not company compliance (`nekurama/Bulb#2`, comments `IC_kwDOUYGptM8AAAABUqUflw`, `IC_kwDOUYGptM8AAAABUrXTVw`).

### 4. Security, privacy and company controls

- [ ] **confirmed principle / unknown implementation** Put domains/DNS, repositories, cloud, messaging/provider accounts, billing, documentation, backups and secrets under company-controlled ownership rather than one founder's personal identity.
- [ ] **unknown** Establish company identity with MFA, recovery methods, least-privilege roles, break-glass access and an access review cadence; use SSO where proportionate.
- [ ] **unknown** Create a secrets-management, credential-rotation and environment-separation baseline. Never place secrets in repositories or shared personal accounts.
- [ ] **unknown** Define joiner/mover/leaver and emergency-offboarding procedures, including transfer of domains, repositories, provider accounts, billing and recovery assets.
- [ ] **partial** Define incident ownership, notification/escalation, evidence preservation, vulnerability handling and customer/provider communication.
- [ ] **unknown** Test backup restoration and document recovery objectives for source, configuration, data, audit logs and company records.
- [ ] **partial / professional-validation-required** Map controller/processor roles, lawful purposes, data categories, retention/deletion, export/correction, subprocessors and cross-border transfers; reflect the result in privacy/DPA terms.
- [ ] **confirmed product boundary / partial company control** Preserve tenant isolation, scoped authorization and auditability without treating customer data as unrestricted NEKURAMA-owned IP (`nekurama/Bulb#2`, comment `IC_kwDOUYGptM8AAAABURlsyA`).
- [ ] **unknown** Create a lightweight vendor-security review and renewal register for messaging, payments, AI, hosting, analytics and support providers.

## Completion evidence to retain

- Incorporation certificate, PAN/TAN/GST and statutory records where applicable
- Signed founder/shareholder, employment/contractor and IP/confidentiality documents
- Background-IP schedule and domain transfer/control record
- Trademark clearance and filing decisions
- Company bank, accounting policy, chart of accounts and reconciliation evidence
- DPIIT/SIPP applications or eligibility decisions
- Asset/access register, MFA/recovery proof, offboarding record and backup-restore test
- Privacy/data map, retention schedule, DPA/subprocessor register and incident runbook

## Explicitly not decided here

- Final incorporation date, directors, reserved-matter thresholds, vesting/leaver terms or ESOP design
- Tax regime, GST timing, 80-IAC claim years, DeepTech status or state incentive claim
- Trademark registration outcome, legal contract wording or data-protection role allocation
- Specific accounting software, CA/CS firm, cloud/provider selection or security certification
