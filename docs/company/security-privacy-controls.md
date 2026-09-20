---
status: partial
owner: NEKURAMA
last-reviewed: 2026-09-20
sources:
  - admin decision packet (2026-09-20)
  - nekurama.raw.chat.json
  - docs/company/README.md
---

# Security, Privacy & Company Controls

## Company account-control decision

Founder-owned domain, GitHub, AWS, Meta, billing, and recovery accounts are to migrate to company control after incorporation, with MFA and company-controlled recovery. The existing GitHub direction keeps BABAI inside the NEKURAMA organization. [raw turn 809 / ID 98947e13-1b0d-4d3f-b9d1-869f51bddd0f; raw turn 841 / ID e8a40bae-4fa2-427b-9e9f-c2d349b05cc2]

Required posture:

- no passwords, tokens, recovery codes, secrets, or unverified credentials in this repository, issues, screenshots, or normal data;
- MFA/2FA, named accounts, least privilege, separate admin access, recovery controls, access review, and offboarding;
- auditable account ownership, billing ownership, provider access, and banking/account-change approvals; and
- scoped, auditable support/security access without unrestricted cross-tenant access. [raw turn 711 / ID 44d1fcec-99bf-4882-9f0f-bfa7acda49d7]

## Security and privacy checklist

- [ ] **Technical owner:** inventory domain, GitHub, AWS, Meta, billing, email, CI/CD, analytics, support, and recovery accounts.
- [ ] **Founders:** migrate ownership/admin and recovery channels after incorporation; preserve evidence and do not expose credentials.
- [ ] **Technical owner:** enable MFA, RBAC, audit logs, secret management, branch protection, environment separation, and break-glass procedures.
- [ ] **Founders + finance owner:** apply hybrid approvals to banking changes, billing ownership, material payments, contracts, hiring, and IP transfers.
- [ ] **Technical owner:** document joiner/mover/leaver, device revocation, token rotation, backup-code, and vendor-offboarding procedures.
- [ ] **Security owner:** define incident severity, reporting, evidence preservation, notification decisions, recovery, and review.
- [ ] **Security/privacy owner:** maintain data map, retention/deletion, data-subject requests, subprocessors, cross-border review, and breach obligations with counsel.
- [ ] **Manager:** keep BABAI tenant isolation, authorization, privacy UX, backups, deletion, and product security in product docs; this file records company gates.

## Professional validation

CS/lawyer/privacy counsel review is required for director and approval authority, privacy/DPA terms, data roles, retention, cross-border transfers, incident obligations, and regulated data handling. A listed control is not evidence that it is implemented.

## Historical / demoted claims

- “The company owns all accounts,” “MFA is enabled,” and “BABAI controls are implemented” remain unsupported until migration and control evidence are linked.
