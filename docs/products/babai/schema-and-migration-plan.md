---
status: proposed-review-packet
owner: BABAI Architecture / Data
last-reviewed: 2026-09-22
---

# BABAI Schema and Migration Plan

## 1. Database ownership

Use one managed PostgreSQL primary during the pilot, with schema/module
ownership and no cross-module table writes.

| Schema/module | Core tables |
|---|---|
| `identity` | identity, membership, role_assignment |
| `tenant` | billing_account, tenant, branch, channel, tenant_customer |
| `catalog` | menu, menu_revision, menu_item, modifier, availability_override |
| `conversation` | conversation, message, takeover_case |
| `commercial` | price_rule, promotion, combo, calculation_snapshot |
| `cart` | cart, cart_item |
| `ordering` | order, order_item, order_correction |
| `payment` | payment_intent, payment_event, refund, reconciliation_case |
| `fulfillment` | fulfillment, delivery_attempt, pickup_handoff |
| `billing` | subscription, invoice, entitlement |
| `notification` | notification_intent, template, delivery_attempt |
| `support` | support_case, support_assignment, voucher |
| `platform` | outbox, inbox, idempotency_key, audit_event |
| `projection` | order_board, support_queue, daily_metrics, report_job |

Projections never become write authority. Cross-module references use IDs and
typed application contracts, not foreign-key cascades that cross ownership
boundaries.

## 2. Required invariants and indexes

### Tenant and channel

```text
unique(provider, provider_account_ref, phone_ref)
index(channel_id, connection_state)
index(tenant_id, branch_id, created_at)
```

### Conversation and messages

```text
unique(channel_id, provider_message_id)
index(tenant_customer_id, updated_at desc)
index(conversation_id, sequence_no)
```

### Orders

```text
unique(tenant_id, external_order_ref) where external_order_ref is not null
index(tenant_id, branch_id, order_state, created_at desc)
index(tenant_id, payment_state, created_at desc)
index(tenant_id, fulfillment_state, created_at desc)
index(support_case_id, updated_at desc)
```

### Payments and callbacks

```text
unique(merchant_account_id, provider, provider_event_id)
unique(order_id, attempt_no)
index(payment_state, updated_at)
index(reconciliation_state, updated_at)
```

### Outbox/inbox/idempotency

```text
unique(event_id)
unique(consumer_name, idempotency_key)
index(outbox_state, available_at)
index(outbox_state, created_at)
index(inbox_received_at)
index(idempotency_expires_at)
```

Every tenant-scoped table includes `tenant_id`; branch-scoped operational
tables include `branch_id`. Application authorization remains mandatory even
when a query has the right tenant predicate.

## 3. Migration rules

1. Every migration is immutable, ordered and reviewed.
2. Use expand → backfill → dual-read/dual-write if needed → contract →
   contract-cleanup.
3. Never make an old deployment unable to start before the new deployment is
   healthy.
4. Add indexes concurrently for large tables where PostgreSQL permits it.
5. Avoid long transactions during deploy.
6. Record migration checksum, author, deploy version, start/end and rollback
   note.
7. Back up and test restore before destructive/data-shape changes.
8. Migrations must be tenant-safe and idempotent in CI.
9. Never rewrite immutable order/payment/audit history; append correction
   records instead.

## 4. Outbox and inbox processing

The transaction that changes an aggregate writes an outbox row:

```text
outbox(
  event_id,
  event_type,
  schema_version,
  aggregate_type,
  aggregate_id,
  aggregate_version,
  tenant_id,
  branch_id,
  correlation_id,
  causation_id,
  payload_ref_or_encrypted_payload,
  available_at,
  attempts,
  state
)
```

Workers claim rows with a bounded lease, publish to the queue, and mark the
outbox only after the publish result is recorded. Consumers insert an inbox
deduplication record before applying a side effect. A worker crash can cause
duplicate delivery; it must not cause duplicate business outcome.

## 5. Retention and partitioning

Start without premature partitioning; add it based on row count, vacuum,
index and query evidence.

Likely partition candidates:

- `message` by month after sustained high volume;
- `audit_event` by month with restricted retention;
- `provider_event` by month;
- `outbox`/`inbox` by time after processed rows are archived;
- high-volume telemetry separately from domain tables.

Retention must distinguish:

| Data | Treatment |
|---|---|
| Order/payment/invoice/audit | Legal/accounting retention gate; never silently delete |
| Message/media | Purpose/consent/retention policy; delete or redact when eligible |
| Outbox/inbox | Keep replay/reconciliation window, then archive |
| Projection rows | Rebuildable; purge/rebuild by policy |
| AI prompts/outputs | Minimise, classify, redact and retain only required evidence |
| Logs/traces | Shortest useful retention; never raw secrets/payment data |

## 6. Backup and restore

- Daily encrypted backup at minimum for pilot.
- Restore into isolated environment before declaring backup success.
- Run schema migrations and projection rebuild against the restored copy.
- Reconcile payment, fulfillment and outbox/inbox state after restore.
- Record RPO/RTO, missing events, replay actions and operator approval.
- Keep portable logical exports for provider migration.

## 7. Scale evolution

| Trigger | First response | Do not jump directly to |
|---|---|---|
| Slow reads | Index/query/read-model/cache review | A new service/database |
| DB connection pressure | Pooling, query budget, worker concurrency | Microservice per table |
| Queue age | Worker capacity and visibility tuning | Kafka/EKS without evidence |
| Provider retries | Adapter isolation and reconciliation | Domain service split |
| Projection lag | Separate projection worker/read store | Event-sourced rewrite |
| Security/data isolation | Separate schema/runtime or service | Broad unrestricted access |
