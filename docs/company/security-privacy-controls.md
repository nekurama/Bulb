---
status: partial
owner: NEKURAMA
last-reviewed: 2026-09-20
sources:
  - nekurama/Bulb#2
  - nekurama/Bulb#1
  - nekurama/Bulb#5
  - raw chat node 39e2f9bb-f490-461b-a7c0-ddc8baf13701
  - raw chat node 2cbff692-fc78-42d6-b97b-7c6ae9256876
  - raw chat node 43953802-8fdc-4ee4-a329-782796871b42
---

# Security, Privacy & Company Controls

## Current durable answer

NEKURAMA should use company-owned domains, repositories, cloud accounts, provider accounts and
secrets. Access follows least privilege and zero-trust principles, with explicit offboarding.
Personal accounts may be used only as a temporary bootstrap exception with an owner, transfer
date and recovery path.

BABAI must support tenant isolation, scoped authorization, auditability, retention/deletion
controls, privacy obligations, backup/recovery and cross-border data assessment. The research-level
identity model is global platform identity plus restaurant-scoped relationships; restaurant
operations must authorize against the restaurant tenant first.

Privacy roles are not decided. For each processing purpose, the restaurant may be the relevant
Data Fiduciary and NEKURAMA a Data Processor, but future platform processing could change that
analysis. This requires a data map and professional privacy review.

## Company control baseline

- Company-controlled email/domain, source control, cloud, Meta/provider, finance and registrar
  accounts.
- MFA on every privileged account; named users rather than shared credentials.
- Password/secret management with rotation and emergency recovery; no secrets in repository,
  issue, chat export or documentation.
- Least privilege, tenant-scoped authorization, auditable admin access and explicit offboarding.
- Backups and restore tests for operational data, configuration and required audit records.
- Incident triage, notification/escalation and provider-contact runbooks before pilot.

## Action checklist

| Checklist item | Owner | Required input/evidence | Status |
|---|---|---|---|
| Inventory company accounts and transfer ownership | Operations/security owner | Domain, repo, cloud, Meta/provider, finance and registrar list | Not started |
| Enforce MFA and named access | Security owner | Account inventory, recovery contacts and break-glass procedure | Not started |
| Define secrets/key management | Engineering/security owner | Provider tokens, encryption keys, rotation/revocation and audit requirements | Not started |
| Define joiner/mover/leaver process | Operations/security owner | Roles, approval chain, offboarding checklist and device/access inventory | Not started |
| Map data and tenant boundaries | Product/security/privacy owners | Customer, restaurant, staff, payment, message, audit and backup data flows | Open |
| Determine Fiduciary/Processor roles and notices | Privacy counsel + founders | Data map, contracts, purposes, consent/notice and subprocessors | Challenge required |
| Define retention, deletion, export and legal holds | Privacy/security/finance owners | Data categories, statutory/accounting needs, backups and audit requirements | Open |
| Threat-model pilot flows | Security owner | Meta/webhooks, payments, admin, staff takeover, tenant isolation and abuse cases | Before pilot |
| Define incident response and vendor escalation | Security/operations owner | Contacts, severity levels, evidence handling and notification decisions | Before pilot |
| Test backup restore and credential revocation | Engineering/security owner | Recovery objectives, backup scope and test record | Before production |
| Review vendors and cross-border processing | Security/privacy owners | Provider list, locations, subprocessors, terms and transfer mechanisms | Open |

## Explicit privacy boundaries

- A customer request to delete/withdraw a restaurant relationship is not automatically a request
  to delete every platform identity or another restaurant's relationship.
- Restaurant APIs and staff views must not gain cross-restaurant customer access merely because a
  global identity exists.
- Payment, financial, audit and security records may have different retention/deletion treatment;
  do not promise immediate erasure without a documented policy and legal review.
- Human takeover changes conversation ownership; it does not grant staff unrestricted access to
  orders, payments or other tenants.

## Citations and historical context

- The identity/privacy record defines global identity plus restaurant-scoped customer relationships,
  tenant-first authorization and unresolved Fiduciary/Processor roles (raw chat node
  `39e2f9bb-f490-461b-a7c0-ddc8baf13701`).
- The production queue explicitly leaves retention/deletion, threat model, secrets, tenant
  isolation, incident response and India/privacy obligations open (raw chat node
  `2cbff692-fc78-42d6-b97b-7c6ae9256876`).
- The human-takeover history warns that staff channels and Meta coexistence still need exact
  validation (raw chat node `43953802-8fdc-4ee4-a329-782796871b42`).

## Retained prior handoff status boundaries

- **Confirmed direction:** company-owned infrastructure, least privilege/zero trust, explicit
  offboarding and BABAI data-control requirements.
- **Professional validation required:** controller/processor allocation, privacy/DPA terms,
  subprocessors, retention/deletion obligations and cross-border transfer assessment.
- **Unknown:** whether any company-owned MFA, secrets, offboarding, backup, incident or
  vendor-review controls are currently implemented.
- **Pending:** security baseline, identity policy, secrets system, device controls, incident plan,
  recovery objectives, privacy/DPA documents, retention schedule, transfer assessment and vendor
  process.

The earlier source record also requires company-owned infrastructure, least privilege, explicit
offboarding, tenant isolation, auditability, retention/deletion, backup/recovery and
cross-border assessment; this is a required control direction, not evidence that the controls
are implemented.
