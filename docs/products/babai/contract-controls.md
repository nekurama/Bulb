---
status: proposed-review-packet
owner: NEKURAMA Company / BABAI Product
last-reviewed: 2026-09-22
---

# BABAI Contract and E-Contract Control Surface

This is a requirements checklist, not legal advice or contract wording.
CS/lawyer, CA, privacy counsel, payment/provider and trademark gates remain
explicit before execution.

## 1. Contract packet

Each restaurant/business onboarding should have a versioned packet:

1. pilot/SaaS agreement;
2. order-form or plan/fee schedule;
3. data processing/privacy schedule;
4. WhatsApp/channel authorization;
5. provider/payment/delivery responsibility schedule where applicable;
6. support/SLA and escalation schedule;
7. staff access and offboarding record;
8. e-signature execution record and version hash.

## 2. Mandatory commercial fields

- legal business/customer identity and authorized signatory;
- tenant/branch/channel scope;
- pilot term and start/payment gate;
- plan, monthly price, onboarding fee, limits and pass-through costs;
- support hours, response targets and excluded work;
- cancellation, minimum-paying term, renewal and refund/credit rules;
- voucher funding, expiry, redemption and liability;
- customer data export and termination handover;
- governing law/dispute language after counsel review.

## 3. Data and privacy fields

- controller/processor/subprocessor roles;
- WhatsApp/customer/staff/order/payment-related data map;
- purpose and minimisation;
- retention/deletion/export;
- cross-border/provider/model processing;
- breach/incident notification path;
- staff access, branch scope and offboarding;
- customer consent and marketing/transactional template policy.

## 4. Required boundaries

The initial agreement must state:

- BABAI is a software/service provider, not a marketplace or customer-funds
  custodian;
- restaurant/customer payment settles through the restaurant/provider;
- BABAI subscription billing is separate;
- AI may assist, classify, draft and recommend but does not own payment,
  order, permission, refund, consent or fulfillment state;
- restaurant staff own operational corrections and customer-impacting
  exceptions;
- delivery and payment are separate provider-dependent modules;
- provider suspension, channel disconnection and outage handling are explicit.

## 5. Evidence and e-sign controls

Store:

```text
agreementId
customer/tenantId
documentVersion
contentHash
signatory identity and authority evidence
signedAt
execution method/provider
approval records
supersededBy / termination record
```

Chat messages and draft documents are not execution evidence. Keep the signed
copy, approvals, invoices, support records, refund/voucher records and
incident evidence in a controlled ledger.

## 6. Professional gates

| Topic | Gate |
|---|---|
| SaaS/pilot agreement, IP, termination and execution | CS/lawyer |
| GST, invoicing, refunds, vouchers and settlement accounting | CA |
| Controller/processor, DPA, retention, cross-border and incidents | Privacy/legal |
| WhatsApp/Meta/BSP authorization and templates | Provider + legal/privacy |
| Delivery responsibilities and service levels | Provider + business owner |
| NEKURAMA/BABAI name and trademark | Trademark counsel |
| Employer/IP/conflict and founder adoption | Employer/CS/lawyer |

## 7. Operational contract events

Contract execution and changes should emit auditable internal events:

```text
ContractDrafted
ContractApproved
ContractSent
ContractSigned
EntitlementActivated
SubscriptionPaymentRecorded
ContractAmended
ContractSuspended
ContractTerminated
DataExportRequested
DataDeletionCompleted
```

These events do not replace legal records; they connect commercial state to
operational entitlements and audit evidence.
