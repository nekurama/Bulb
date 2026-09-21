---
status: proposed-review-packet
owner: BABAI QA / Architecture
last-reviewed: 2026-09-22
---

# BABAI Test and Validation Plan

## 1. Test layers

| Layer | Purpose | Required tooling/evidence |
|---|---|---|
| Pure domain | State transitions, calculation capsule, permissions, quotas | Unit/property tests |
| Application contracts | Command/query/event schemas and parity across WhatsApp/web | Contract tests |
| Persistence | Transactions, optimistic version, outbox/inbox, migrations | PostgreSQL integration tests |
| Adapter | Meta/payment/delivery callbacks, retry and reconciliation | Provider fakes + sandbox evidence |
| Worker/recovery | Duplicate delivery, visibility timeout, DLQ, replay | Queue integration tests |
| AI | Extraction, grounding, schema, injection, handoff, cost | Versioned eval dataset |
| Browser | Conversation/card UX, Pro queue, focus, responsive, offline/error | Playwright/browser checks |
| Runtime | Latency, queue age, DB pool, burst and failure behavior | Load/recovery test report |
| Pilot smoke | Onboarding → menu → order → payment → kitchen → delivery | Synthetic/approved pilot rehearsal |

## 2. Contract parity cases

Each action below must be executable through every enabled surface or explicitly
marked unsupported:

| Action | WhatsApp card/text | Pro UI | Expected authority |
|---|---|---|---|
| Submit order | Yes | Optional | Order module |
| Accept/reject | Restaurant channel | Yes | Staff/owner |
| Start preparation/ready/complete | Restaurant channel | Yes | Staff/owner |
| Request cancellation | Customer | Yes | Policy + staff review |
| Cancel order | Staff/owner | Yes | Order module |
| Create payment/refund | Payment link/request | Yes | Payment module/provider |
| Create/expire promotion | Owner chat | Yes | Commercial/catalog |
| Assign support | Owner/staff chat | Yes | Support module |
| Issue voucher | Staff/owner chat | Yes | Commercial/support |
| Retry notification | Limited operator action | Yes | Notification module |
| Reconcile/replay/DLQ | No | Admin only | Recovery module |

For every parity case, test:

1. valid command;
2. duplicate command;
3. stale aggregate version;
4. unauthorized actor;
5. wrong tenant/branch;
6. provider timeout or callback mismatch;
7. audit record and emitted event;
8. visible success/failure state.

## 3. State-machine test matrix

### Order

- submit from valid cart;
- reject unavailable item;
- accept only from submitted;
- prevent payment callback from accepting order;
- prevent customer/AI direct correction;
- staff correction creates a new commercial/payment effect;
- prevent ready before preparing;
- prevent complete before ready;
- cancellation policy by current order state;
- duplicate/out-of-order command returns current state.

### Payment

- amount/currency/merchant match;
- valid signed callback confirms once;
- duplicate callback is idempotent;
- unknown provider state enters reconciliation;
- failed callback cannot mark paid;
- manual confirmation requires scoped staff reason/evidence;
- refund cannot exceed paid amount;
- refund mismatch enters reconciliation.

### Fulfillment

- pickup code is short-lived and single-use;
- wrong code does not advance pickup;
- delivery callback cannot change payment;
- duplicate delivered event is harmless;
- provider outage preserves order and creates visible recovery state.

## 4. AI evaluation set

Maintain redacted synthetic fixtures covering:

- English, Hindi/Indian-English, spelling noise and code switching;
- menu item aliases, quantities, variants, modifiers and ambiguous names;
- unavailable item, expired promotion and price mismatch;
- payment/refund/cancellation requests;
- prompt injection and instruction-confusion attempts;
- cross-tenant ID attempts;
- customer complaint and human-takeover request;
- staff/owner authorization confusion;
- malformed provider payloads;
- long conversation summarization and reorder changes.

Release gates:

```text
unauthorized state mutation                         = 0
false payment/refund confirmation                   = 0
cross-tenant data exposure                         = 0
invalid state transition accepted                  = 0
schema-invalid command proposal                   = 0 after validation
high-risk human-handoff recall                    >= agreed threshold
grounded answer accuracy                           >= agreed threshold
model cost/latency                                 <= route budget
```

The threshold values remain a product/QA decision; the zero-severity safety
gates are non-negotiable.

## 5. Reliability and recovery drills

Inject:

- duplicate inbound webhook;
- out-of-order webhook;
- provider signature failure;
- queue redelivery;
- worker crash after domain commit and before outbound send;
- worker crash after provider call;
- payment callback delay/duplicate/mismatch;
- delivery callback delay/duplicate;
- database failover/restore;
- projection rebuild;
- DLQ poison message;
- authorized replay;
- channel disconnect/reconnect.

Evidence must show:

- no false success;
- no duplicate order/payment/refund;
- bounded retries;
- visible quarantine/DLQ;
- reconciliation result;
- audit trail;
- restored projection freshness;
- recovery time and data-loss window.

## 6. Load and capacity plan

Run the same scenario at:

| Band | Restaurants | Orders/day | Request scenario |
|---|---:|---:|---|
| Pilot | 1–3 controlled | measured | actual pilot distribution |
| Sensitivity | 10 | up to 500 | 54/90 requests per order |
| Scale A | 500 | up to 25,000 | average + heavy + burst |
| Scale B | 1,000 | up to 50,000 | average + heavy + burst |

Replay restaurant dayparts, not flat traffic. Include message retries,
provider callbacks, queue redelivery, AI calls, DB writes, notifications and
Pro UI reads/writes. Record p50/p95/p99 latency, error rate, queue age,
connection pool, lock waits, provider throttles, AI cost and projection
freshness.

## 7. Browser/UX validation

### WhatsApp mock

- action cards appear only at the relevant conversation message;
- card action and Next Message execute the same state transition;
- Previous/Next crosses scenario boundaries correctly;
- chat viewport stays fixed and scrolls to newest content;
- actor labels and status announcements are accurate;
- pricing remains outside the operational conversation;
- no real network, auth, payment or customer data exists.

### Pro UI

- queue sorting/filter/search;
- keyboard next/previous/claim/close;
- bulk selection with confirmation;
- stale projection warning;
- conflict refresh;
- staff assignment;
- payment/reconciliation drawer;
- empty/loading/error/offline/permission-denied states;
- 390px, tablet and desktop layouts;
- focus-visible, contrast, reduced motion and screen-reader labels.

## 8. Evidence record

Each test run records:

```text
testRunId
commitSha
environment
provider/model versions
fixture/eval version
scenario and scale band
start/end time
result
failure classification
logs/traces/artifact references
owner and approval
```

No test report is a provider/legal/tax approval. External gates remain in
`contract-controls.md` and the company external-entity register.

