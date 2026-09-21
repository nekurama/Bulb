---
status: proposed-review-packet
owner: BABAI Product / Architecture
last-reviewed: 2026-09-22
---

# BABAI Technical Requirements Document (TRD)

This TRD translates the BRD and architecture packet into testable technical
requirements. Thresholds marked **proposed** must be validated during the
paid pilot and scale rehearsals.

## 1. Functional technical requirements

| ID | Requirement | Verification |
|---|---|---|
| TR-001 | Resolve every inbound/outbound message to tenant, branch, channel and actor scope | Contract tests with branch/shared-number fixtures |
| TR-002 | Store inbound provider events idempotently before acknowledging the webhook | Duplicate webhook test |
| TR-003 | Treat conversation, cart, order, payment and fulfillment as separate lifecycles | State-machine tests |
| TR-004 | Route WhatsApp text, cards and Pro UI actions through the same typed command path | Contract parity test |
| TR-005 | Keep order/payment/fulfillment authority in deterministic domain modules | Unauthorized mutation and AI-tool tests |
| TR-006 | Support human takeover without losing order/payment/fulfillment processing | Handoff/release test |
| TR-007 | Support menu revisions, availability overrides, combos and expiring promotions | Revision/expiry tests |
| TR-008 | Support payment links, callbacks, pending deltas, reconciliation and refunds through adapters | Provider fake and replay tests |
| TR-009 | Support pickup codes and delivery provider state without changing payment truth | Handoff/provider callback tests |
| TR-010 | Support restaurant staff assignment and scoped support cases | Permission and cross-branch tests |
| TR-011 | Provide a Pro operations surface for high-volume order queues and recovery | Browser/command contract tests |
| TR-012 | Provide owner reports from derived, tenant-isolated projections | Projection/rebuild tests |

## 2. Non-functional requirements

| Area | Proposed requirement | Evidence |
|---|---|---|
| Availability | Pilot availability target is measured; no public SLA until evidence exists | Incident/uptime ledger |
| Webhook acknowledgement | Acknowledge only after durable inbox/queue acceptance | Integration test |
| Idempotency | Duplicate provider events and command retries produce one business outcome | Replay test |
| Consistency | Aggregate writes use optimistic version and transactionally write outbox/audit | DB test |
| Projection freshness | Every Pro view exposes `lastUpdatedAt` and stale/rebuilding state | Browser/API test |
| Security | Tenant/branch authorization on every command/query; secrets never in logs | Security test and log scan |
| Privacy | Minimise model/context payloads; support tenant-scoped deletion/export | Privacy test |
| Recovery | DLQ, reconciliation, replay authorization and restore drill exist before scale expansion | Recovery evidence |
| Observability | Correlation ID across edge, command, event, queue, provider and UI action | Trace/log assertion |
| Cost | Track runtime, provider, AI, failure and support cost separately | Economics ledger |
| Accessibility | Keyboard, focus-visible, reduced motion, responsive and screen-reader labels | Browser QA |
| Portability | Provider/cloud integrations sit behind ports; no domain dependence on one vendor | Contract tests |

## 3. Capacity requirements

Planning references:

```text
50 completed orders/day/restaurant ceiling
54 average requests/completed order
90 heavy-case requests/completed order
500 and 1,000 restaurant scenarios
```

The system must measure, rather than assume:

- API p50/p95/p99 latency and error rate;
- database connections, lock waits, transaction duration and storage;
- queue depth/age, worker throughput and retry/DLQ rate;
- provider throttling, callback delay and notification delivery;
- AI latency, tokens, cost/task and fallback rate;
- Pro projection freshness and command conflict rate;
- support minutes, human takeover and recovery effort.

The 500/1,000 scenarios are architecture test envelopes, not a claim that the
pilot will reach those volumes.

## 4. Security requirements

- Verify webhook signatures and provider event identity.
- Use least-privilege workload/service identities and secret rotation.
- Enforce tenant, branch, staff role and case scope server-side.
- Encrypt data in transit and at rest.
- Redact phone numbers, payment identifiers, tokens and message content from
  logs unless a restricted audit record explicitly requires them.
- Store uploads in private encrypted object storage with signed bounded access.
- Treat model prompts, outputs and traces as classified data.
- Maintain audit records for payment, refund, access, staff assignment,
  promotion, menu publication and replay.

## 5. Data and retention requirements

Each data class needs owner, purpose, retention, deletion/export behavior and
subprocessor/provider location:

```text
identity and membership
customer relationship and consent
messages and media
menu revisions and uploads
cart/order/payment/fulfillment
support cases and staff actions
provider callback/reconciliation
audit and security history
analytics/projections
AI prompts/outputs/usage
```

Financial/order/audit retention cannot be silently deleted by a customer
conversation request. Tenant-scoped relationship deletion and platform/legal
retention must be separate policy decisions.

## 6. Testing requirements

Minimum suites:

1. unit tests for state transitions and commercial calculations;
2. property/duplicate tests for idempotency;
3. contract tests for provider adapters and event schemas;
4. authorization tests for every role/branch/case command;
5. queue/outbox/DLQ/reconciliation tests;
6. migration and backup/restore tests;
7. AI evaluation and prompt-injection tests;
8. browser accessibility/responsive/no-network tests;
9. pilot smoke: onboarding → menu → order → payment → restaurant → delivery;
10. scale rehearsal using the 500/1,000 request/order envelopes.

## 7. Acceptance gates

Do not move from pilot to materially larger onboarding unless:

- no unresolved customer-funds, privacy or authorization exception exists;
- accepted orders, payment and fulfillment reconciliation are complete;
- base contribution and runtime/provider/AI cost ledger are populated;
- Pro/WhatsApp command parity is demonstrated;
- support and queue/recovery limits are measured;
- restore and replay drills are evidenced;
- external provider/legal/tax approvals are separately recorded.

