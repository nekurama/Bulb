---
status: partial — control principles confirmed; baseline implementation and privacy decisions pending
owner: NEKURAMA
last-reviewed: 2026-09-20
sources:
  - nekurama/Bulb#2
  - nekurama/Bulb#1
  - nekurama/Bulb#5
  - nekurama.raw.chat.json#bbb213b8-d58c-403e-b858-bdaa1ac750b8
  - nekurama.raw.chat.json#bbb2129e-e9fa-43bf-adca-b0bc7a956664
  - nekurama.raw.chat.json#bbb21426-5f7e-4c38-82e4-e288b9aae01c
  - nekurama.raw.chat.json#98947e13-1b0d-4d3f-b9d1-869f51bddd0f
  - nekurama.raw.chat.json#fbd76d92-2a25-44fe-a156-f18abe966639
  - 2026-09-20 ADMIN DECISION PACKET
---

# Security, Privacy & Company Controls

## Current answer

NEKURAMA should use company-owned domains, repositories, cloud accounts, provider accounts and secrets. Access follows least privilege and zero-trust principles, with explicit offboarding.

The current packet requires migration of founder-owned domain, GitHub, AWS, Meta, billing and
recovery accounts to company control, with MFA and retained transfer evidence. The GitHub
organization is controlled through named personal accounts, not a fictitious shared company login;
at least two appropriate owners should be maintained.

BABAI must support tenant isolation, scoped authorization, auditability, retention/deletion controls, privacy obligations, backup/recovery and cross-border data assessment.

## Questions

- [ ] Company security baseline and migration evidence
- [ ] Identity/SSO/MFA policy
- [ ] Secrets management
- [ ] Device/access/offboarding controls
- [ ] Incident response
- [ ] Backup and disaster recovery
- [ ] Privacy policy and DPA baseline
- [ ] Data retention/deletion schedule
- [ ] Cross-border data transfer assessment
- [ ] Vendor security review process

Evidence: later company decisions preserve the company-owned operating model and require company-owned infrastructure, least privilege, explicit offboarding, tenant isolation, auditability, retention/deletion, backup/recovery and cross-border assessment. This is a required control direction, not evidence that the controls are implemented.

## Raw founder-message citations

- `nekurama.raw.chat.json#bbb213b8-d58c-403e-b858-bdaa1ac750b8`: “Our services should be oauthed imo, kind of decentralized auth with zero trust.” The same message requires hard flow/identity boundaries; this supports the control principle, not a deployed design.
- `nekurama.raw.chat.json#bbb2129e-e9fa-43bf-adca-b0bc7a956664`: proposes public/scoped/sensitive/restrictive data classes, restaurant tenancy, sensitive logging and Vault-style secret handling.
- `nekurama.raw.chat.json#bbb21426-5f7e-4c38-82e4-e288b9aae01c`: says deletion depends on agreed terms and applicable law; this is why retention/deletion remains professional-validation-required rather than a fixed policy.

## E-setup checklist

- [ ] **Ownership:** migrate founder-owned domain, GitHub, AWS, Meta, billing and recovery accounts to company control; retain transfer, named-owner and recovery evidence.
- [ ] **Identity:** enforce MFA, recovery methods, SSO where practical, least privilege, privileged-access review and a dated access recertification cadence.
- [ ] **Secrets:** use managed secrets storage, environment separation and rotation; prohibit secrets in source, tickets, chat and personal accounts.
- [ ] **Lifecycle:** define device security, joiner/mover/leaver, immediate revocation, asset-return and emergency-access procedures.
- [ ] **Application controls:** document tenant/branch isolation, scoped authorization, audit-log access/retention, production-access review and sensitive-data redaction.
- [ ] **Data map:** inventory and classify customer, employee, operational, payment-related and provider data with owners, purposes, locations and retention candidates.
- [ ] **Privacy/legal review:** define privacy notice, DPA/subprocessors, retention/deletion/export, user/restaurant requests and cross-border transfer decisions with qualified advice.
- [ ] **Resilience:** establish incident response, breach assessment, notification/escalation, evidence preservation, backup/restore testing and disaster-recovery objectives.
- [ ] **Vendors:** review critical messaging, payment, AI, hosting, analytics and support vendors for security, privacy, availability, concentration, pricing and offboarding risk.

## Status boundaries

- **Confirmed direction:** company-owned infrastructure, least privilege/zero trust, explicit offboarding, and BABAI data-control requirements.
- **professional-validation-required:** controller/processor allocation, privacy/DPA terms, subprocessors, retention/deletion obligations, and cross-border transfer assessment.
- **unknown:** whether any company-owned MFA, secrets, offboarding, backup, incident, or vendor-review controls are currently implemented; the packet sets migration direction, not completion evidence.
- **partial:** the control principles and product boundary are documented, but implementation evidence, policy owners and review cadence are not recorded here.
- **stale:** none identified; provider capabilities, applicable law and security standards must be rechecked before implementation.
