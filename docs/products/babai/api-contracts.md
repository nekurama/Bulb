---
status: proposed-review-packet
owner: BABAI Architecture / API
last-reviewed: 2026-09-22
---

# BABAI API and Edge Contracts

## 1. Edge routes

These are logical contracts, not deployed endpoints.

| Route | Purpose | Authority |
|---|---|---|
| `POST /webhooks/whatsapp/{channelId}` | Verify and enqueue provider webhook | Channel/inbox |
| `GET /webhooks/whatsapp/{channelId}` | Provider verification challenge | Channel adapter |
| `GET /v1/pro/branches/{branchId}/orders` | Freshness-labelled order board | Order projection |
| `GET /v1/pro/orders/{orderId}` | Order/conversation/payment/fulfillment detail | Read models + authoritative refs |
| `POST /v1/pro/orders/{orderId}/commands` | Staff/owner order command | Order policy/domain |
| `POST /v1/pro/support/{caseId}/commands` | Assign/resolve/payment correction | Support/payment policy |
| `POST /v1/pro/catalog/commands` | Menu/availability/promotion command | Catalog/commercial policy |
| `GET /v1/pro/reports/{reportId}` | Derived report status/result | Analytics projection |
| `POST /v1/internal/reconciliation/{aggregateId}` | Authorized reconciliation request | Recovery/operator policy |

The web route is a surface, not a provider. Domain commands are the same
whether initiated by WhatsApp card, restaurant chat or Pro UI.

## 2. Webhook acknowledgement

```text
receive request
  -> verify signature/timestamp/channel
  -> validate envelope size/content class
  -> insert inbox/provider-event idempotency record
  -> enqueue normalized event
  -> return provider-compatible acknowledgement
```

Do not wait synchronously for AI, database projections, payment, delivery or
outbound messages before acknowledging a valid webhook. Invalid signature,
malformed envelope or unknown channel receives explicit rejection and a
security/audit record.

## 3. Command request

```json
{
  "commandId": "cmd_01",
  "type": "AcceptOrder",
  "aggregateId": "ord_1048",
  "expectedVersion": 7,
  "idempotencyKey": "restaurant:branch:accept:ord_1048:7",
  "reason": "Kitchen accepted",
  "payload": {}
}
```

The server derives tenant, branch, actor, role, entitlement and policy from
trusted authentication/context. It does not accept these as authority from
the browser or model output.

### Success

```json
{
  "accepted": true,
  "aggregateId": "ord_1048",
  "aggregateVersion": 8,
  "emittedEventIds": ["evt_01"]
}
```

### Failure

```json
{
  "accepted": false,
  "aggregateId": "ord_1048",
  "aggregateVersion": 8,
  "emittedEventIds": [],
  "failure": {
    "code": "CONFLICT",
    "message": "Order changed; refresh before retrying.",
    "retryable": false
  }
}
```

Failure codes include `UNAUTHENTICATED`, `FORBIDDEN`, `CONFLICT`,
`INVALID_TRANSITION`, `UNAVAILABLE`, `QUOTA`,
`RECONCILIATION_REQUIRED` and `VALIDATION`.

## 4. Query/read-model response

Every Pro query returns freshness:

```json
{
  "data": {},
  "source": "order_board_v3",
  "lastUpdatedAt": "2026-09-22T04:10:00Z",
  "freshness": "stale",
  "checkpoint": "evt_123",
  "actionsMayRequireRefresh": true
}
```

The UI may display stale data but cannot hide the stale state or bypass the
authoritative version check on write.

## 5. Error and retry policy

| Error | Client behavior | Server behavior |
|---|---|---|
| Invalid signature | Do not retry | Audit/security event |
| Invalid input | Show correction | No state change |
| Unauthorized/scope | Show permission state | Audit denial |
| Conflict/stale | Refresh/review | No blind retry |
| Provider timeout | Show pending/checking | Queue/reconcile |
| Rate/quota | Show bounded unavailable | Retry only per policy |
| Unknown payment | Do not claim success | Reconciliation case |
| Worker/DLQ | Show operational pending | Operator recovery |

Responses must not expose provider secrets, raw payment payloads, internal
stack traces or cross-tenant existence information.

## 6. Authentication and headers

Required metadata:

```text
Authorization/session identity
X-Request-Id
X-Correlation-Id
Idempotency-Key for mutations
If-Match / expectedVersion for aggregate mutations
provider signature/timestamp for webhooks
```

Use CSRF/origin protection for browser mutations, rate limits by tenant,
branch, actor and channel, and separate internal/operator credentials from
restaurant credentials.

## 7. Versioning

- Version external APIs under `/v1`.
- Version event schemas independently.
- Add fields compatibly; do not silently change meaning.
- Keep old consumers working through migration windows.
- Record API/event schema and deployment version in audit/outbox.
- Deprecate with owner, date and migration evidence.

