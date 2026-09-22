---
status: proposed-review-packet
owner: BABAI Operations / Architecture
last-reviewed: 2026-09-22
---

# BABAI Operations Runbook

This runbook describes the runtime/operator controls for the pilot and the
hybrid evolution path. It does not create a 24x7 support promise or replace
provider/legal/finance procedures.

## 1. Ownership

| Area | Primary | Secondary / escalation |
|---|---|---|
| Runtime/API/worker | Technical owner | Architecture/recovery reviewer |
| Restaurant onboarding/operations | Merchant operations owner | Restaurant owner/cashier |
| Payment/reconciliation | Finance/operations owner | Payment provider/CA gate |
| Privacy/security incident | Security/privacy owner | Legal/provider gate |
| Customer-impacting order | Restaurant staff/owner | BABAI support case |
| Contract/commercial | Founder/commercial owner | CS/lawyer/CA |

No shared account or undocumented operator action may be used for recovery.

## 2. Severity

| Severity | Examples | Immediate action |
|---|---|---|
| P0 | Cross-tenant exposure, false payment/refund, duplicate charged order, data loss | Stop affected capability, preserve evidence, notify owners, no blind retry |
| P1 | Order flow blocked, provider outage, queue/DLQ growth, restore/reconciliation risk | Open incident, contain scope, assign owner, customer/restaurant update |
| P2 | Single order/support failure, stale projection, delayed notification | Case assignment, bounded retry/reconciliation, visible status |
| P3 | Copy/UI issue, non-blocking report delay, prototype issue | Normal backlog with evidence |

Severity is based on customer/business impact, not only infrastructure health.

## 3. Baseline telemetry and alerts

Alert on:

- webhook signature failures and inbound event age;
- oldest outbox/inbox/queue item;
- retry count, DLQ/quarantine growth;
- payment unknown/mismatch age;
- delivery callback age and duplicate events;
- database connection/lock/transaction pressure;
- projection freshness and rebuild failure;
- AI schema-invalid output, fallback rate and spend;
- backup age and restore-test failure;
- provider/channel disconnect;
- tenant-scope authorization denial spikes;
- founder support ceiling and unresolved support cases.

Every alert includes tenant/branch/correlation scope where safe, runbook link,
last known good deployment, owner and evidence destination.

## 4. Standard incident sequence

```text
detect -> classify -> contain -> preserve evidence
       -> reconcile/restore/retry only with authorization
       -> communicate -> verify recovery
       -> close with root cause and prevention
```

Do not:

- mark payment/order success to make a dashboard green;
- replay provider callbacks blindly;
- delete a DLQ item without a decision record;
- broaden tenant/branch permissions during an incident;
- expose raw customer/payment/provider payloads in chat or logs.

## 5. Queue, outbox and DLQ

1. Check oldest item, delivery count, visibility timeout and worker health.
2. Classify failure: transient, provider, schema, authorization, data,
   customer-action or code regression.
3. Retry only transient/provider-available failures within the bounded policy.
4. Quarantine poison/schema/auth failures with reason and payload reference.
5. Create a support/reconciliation case for customer-impacting work.
6. Authorize replay with event ID, scope, reason and expected effect.
7. Verify idempotency, audit, projection and outbound notification.

Recovery commands are `AcknowledgeException`, `ResolveDLQ`,
`CreateRecoveryTask`, `OpenReconciliationCase` and `AuthorizeReplay`; events
are past-tense and recorded in the event catalog.

## 6. Payment reconciliation

For `UNKNOWN`, mismatch or delayed provider callbacks:

1. Freeze customer-facing paid/failed claim.
2. Query provider using merchant/provider reference.
3. Compare amount, currency, order, merchant and callback signature.
4. Record a reconciliation result and operator identity.
5. Apply the smallest authorized state transition.
6. Notify customer/restaurant with a factual status.
7. Route refund/chargeback/accounting consequences to the payment/CA gate.

No payment reconciliation action accepts an order automatically. Order
acceptance remains a separate restaurant command.

## 7. Provider/channel disconnect

- Mark the channel `DISCONNECTED` or `SUSPENDED`; do not silently switch
  tenants, numbers or providers.
- Keep existing order/payment/fulfillment history available.
- Queue only safe outbound work with expiry; do not accumulate unbounded sends.
- Show owner a reconnect checklist and pending customer-impacting actions.
- Reconcile provider callbacks after reconnect before resuming automation.
- Record provider account/number ownership and approval evidence outside secrets.

## 8. Backup and restore

Baseline:

- daily encrypted backup;
- RPO 24 hours / RTO 8 hours planning target;
- isolated restore test before expansion;
- restore a known-good image and schema version;
- replay only authorized outbox/projection work;
- reconcile payment and fulfillment after restore;
- record elapsed restore, data gap, failed steps and follow-up.

Restore success is not proven by a backup file existing; it requires a usable
application, correct tenant scope, projection rebuild and reconciliation
evidence.

## 9. Cost and enrollment stop gates

Pause expansion and review when:

- pre-credit runtime spend leaves the low/base envelope without approval;
- provider/AI costs are unknown or unallocated;
- queue/DB/provider retry cost grows without a bounded cause;
- founder support exceeds the approved pilot envelope;
- restore/reconciliation evidence is overdue;
- a provider contract, rate or approval changes materially.

Credits reduce cash spend but do not erase pre-credit cost, failure risk,
support work or future renewal liability.

## 10. Incident closure

Close only when:

- customer/restaurant state is correct or explicitly unresolved;
- payments/refunds/order/fulfillment are reconciled;
- DLQ/retry backlog is understood;
- customer-impacting communication is complete;
- audit/evidence links exist;
- root cause, containment and prevention are recorded;
- any contract, privacy, CA/CS or provider gate is assigned.
