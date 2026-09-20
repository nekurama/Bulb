---
status: partial — control principles confirmed; baseline implementation and privacy decisions pending
owner: NEKURAMA
last-reviewed: 2026-09-20
sources:
  - nekurama/Bulb#2
  - nekurama/Bulb#1
  - nekurama/Bulb#5
---

# Security, Privacy & Company Controls

## Current answer

NEKURAMA should use company-owned domains, repositories, cloud accounts, provider accounts and secrets. Access follows least privilege and zero-trust principles, with explicit offboarding.

BABAI must support tenant isolation, scoped authorization, auditability, retention/deletion controls, privacy obligations, backup/recovery and cross-border data assessment.

## Questions

- [ ] Company security baseline
- [ ] Identity/SSO/MFA policy
- [ ] Secrets management
- [ ] Device/access/offboarding controls
- [ ] Incident response
- [ ] Backup and disaster recovery
- [ ] Privacy policy and DPA baseline
- [ ] Data retention/deletion schedule
- [ ] Cross-border data transfer assessment
- [ ] Vendor security review process

Evidence: founder history [572] preserves company continuity and the company-owned operating model; the source decision trail also requires company-owned infrastructure, least privilege, explicit offboarding, tenant isolation, auditability, retention/deletion, backup/recovery, and cross-border assessment. This is a required control direction, not evidence that the controls are implemented.

## E-setup checklist

- [ ] Move domains, repositories, cloud projects, provider accounts, billing, and secrets to company ownership.
- [ ] Enforce MFA, SSO where practical, least privilege, privileged-access review, and quarterly access recertification.
- [ ] Use managed secrets storage; prohibit secrets in source, tickets, chat, and personal accounts.
- [ ] Define device security, joiner/mover/leaver, immediate revocation, and asset-return procedures.
- [ ] Document tenant isolation, scoped authorization, audit-log access/retention, and production-access review.
- [ ] Inventory and classify customer, employee, operational, payment-related, and provider data.
- [ ] Define privacy notice, DPA/subprocessors, retention/deletion/export, and cross-border transfer decisions.
- [ ] Establish incident response, breach assessment, notification, evidence preservation, backup/restore testing, and disaster recovery objectives.
- [ ] Review critical vendors for security, privacy, availability, concentration, pricing, and offboarding risk.

## Status boundaries

- **Confirmed direction:** company-owned infrastructure, least privilege/zero trust, explicit offboarding, and BABAI data-control requirements.
- **professional-validation-required:** controller/processor allocation, privacy/DPA terms, subprocessors, retention/deletion obligations, and cross-border transfer assessment.
- **unknown:** whether any company-owned MFA, secrets, offboarding, backup, incident, or vendor-review controls are currently implemented.
- **Pending:** security baseline, identity policy, secrets system, device controls, incident plan, recovery objectives, privacy/DPA documents, retention schedule, transfer assessment, and vendor process.
