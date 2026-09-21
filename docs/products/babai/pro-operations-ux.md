---
status: proposed-review-packet
owner: BABAI Product / UX
last-reviewed: 2026-09-22
---

# BABAI WhatsApp and Pro Operations UX

## 1. Surface split

| Surface | Best for | Must not become |
|---|---|---|
| Customer WhatsApp | Browse, cart, payment link, status, delivery and feedback | A dense order-management console |
| Restaurant WhatsApp | Onboarding, menu/promotion changes, lightweight order actions, support assignment | The only tool for high-volume operations |
| Pro web UI | High-volume conditions: simultaneous queues, multiple staff/branches, bulk actions, reconciliation, analytics and recovery | A second source of truth |
| BABAI/NEKURAMA admin UI | Tenant support, DLQ/reconciliation, audit and platform operations | A restaurant-facing shortcut around authorization |

The previously discussed **more than 10 orders/minute** threshold is a
proposed UX hypothesis, not an approved cutoff or capacity claim. The actual
Pro trigger should be measured from simultaneous queues, staff count, branch
complexity, support/reconciliation load, bulk-action need and operator
response time. A restaurant may buy the Pro UI earlier when those conditions
appear.

## 2. WhatsApp card/message rules

Every interactive message should have:

- a clear actor label (`BABAI`, `CUSTOMER`, `OWNER`, `STAFF`);
- one intent per card;
- current order/menu/promotion identifier;
- visible state (`PENDING`, `PAID`, `PREPARING`, `READY`, `DELIVERED`);
- no hidden state mutation;
- explicit success/failure response after an action;
- a safe fallback to a human or Pro UI;
- no more than three primary actions where possible.

Card actions and chat replies must call the same typed command. A card click
must not be a special shortcut:

```text
WhatsApp text -> command parser -> policy -> domain command
WhatsApp card -> typed command -> policy -> domain command
Pro UI button -> typed command -> policy -> domain command
```

If a command succeeds, all channels receive the same event-derived status.
If it conflicts, each surface shows a review/refresh state rather than a
success-shaped fallback.

## 3. Pro order-management UI

### Primary layout

```text
branch selector | channel health | queue age | staff availability
----------------------------------------------------------------
NEW | NEEDS SUPPORT | PREPARING | READY | OUT FOR DELIVERY | DONE
----------------------------------------------------------------
order row/card:
  order id, age, customer alias, items, payment, fulfillment,
  current owner, exception badge, last event, actions
----------------------------------------------------------------
right drawer:
  conversation, order snapshot, payment timeline, support case,
  audit trail, correction/refund/retry actions
```

### Required views

1. **Live queue:** newest/oldest, payment state, order state, SLA age.
2. **Needs support:** unassigned cases, pending payment, replacement,
   refund/correction, provider failure.
3. **Kitchen board:** accepted, preparing, ready with bulk-safe actions.
4. **Delivery board:** quoted, assigned, picked up, in transit, delivered.
5. **Conversation drawer:** exact customer and BABAI messages with takeover.
6. **Reconciliation:** payment/provider/order mismatches and authorized fixes.
7. **Reports:** orders, acceptance, preparation time, delivery, vouchers,
   support minutes and unresolved cases.

### Commands allowed from Pro

```text
AcceptOrder
RejectOrder
StartPreparation
MarkReady
CompleteOrder
RequestCancellation
RequestOrderCorrection
AssignSupportCase
RequestPaymentCorrection
IssueVoucher
RequestRefund
RetryNotification
OpenReconciliationCase
```

Each command requires role, branch scope, current aggregate version and a
reason where it can affect money, customer communication or order history.

## 4. Restaurant workflow UX

### Onboarding

1. BABAI asks whether the owner wants to onboard.
2. Owner sends business details, location, menu and operating hours.
3. BABAI displays a checklist with missing/received items.
4. Owner selects the approved plan; payment/start terms remain explicit.
5. Human review is required before production channel activation.

### Menu and promotions

- Owner can request price, availability, item and modifier changes in chat.
- Menu changes create a draft revision; publish is a distinct action.
- A combo is a priced sellable construct; a promotion applies a defined benefit.
- Every promotion shows start time, expiry, eligible items, branch and funding
  owner.
- Expiry is a durable event and a visible status, not a hidden timer.

### Orders and support

- Dedicated restaurant channel receives new-order cards with accept,
  preparing, ready and reject actions.
- Support notification includes order, issue, payment delta and deadline.
- Owner assigns Staff 1/2/3; staff receives a scoped conversation and order
  snapshot.
- Staff can request a replacement amount; customer receives a payment link.
- Main channel updates only after payment/provider reconciliation.

### Pickup and delivery

- Owner marks ready.
- BABAI issues a short-lived pickup code.
- Delivery actor presents the code; restaurant verifies once.
- Status changes to picked up and then delivered through verified events.
- Failed/mismatched code creates a support/reconciliation case.

## 5. HTML prototype rules

The current static prototype should remain mock-only:

- keep all actions local and deterministic;
- use fixture IDs, not real customer data;
- show the exact state transition after every action;
- keep conversation viewport height stable and scroll to the newest message;
- render action cards only at the message where an action is requested;
- make action-card behavior identical to Next Message;
- preserve pricing as a separate section, not as an operational chat footer;
- test keyboard, mobile width, reduced motion, focus, contrast and no-network.

## 6. Accessibility and safety

- use real buttons for actions and tabs for scenario selection;
- expose message progress and actor through accessible labels;
- announce state changes in an `aria-live` region;
- never rely on color alone for payment/order/support state;
- preserve focus after card actions and scenario transitions;
- show stale projection/conflict states explicitly;
- do not expose phone numbers, payment secrets or full customer data in
  screenshots, logs or fixtures.
