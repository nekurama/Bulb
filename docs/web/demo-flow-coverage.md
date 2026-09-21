---
status: internal-demo-mapped / founder-review-pending
owner: web-qa
last-reviewed: 2026-09-21
---

# BABAI internal demo flow coverage

This is an internal QA/prototype record for the static site. It is not a product
specification, public feature list, pricing document, availability statement or
implementation commitment. Every fixture is invented. The page has no account,
customer, restaurant, staff, payment, delivery, analytics or network integration.

## Coverage grouping

The requested 14-family QA map combines feedback with reorder, separates owner
and staff setup, and keeps pickup and delivery in one fulfillment family:

1. Restaurant onboarding
2. Owner setup
3. Staff setup
4. Customer discovery
5. Menu
6. Cart and order
7. Payment
8. Pickup and delivery
9. Promo and combo
10. Human takeover
11. Notifications
12. Feedback and reorder
13. Exceptions and recovery
14. Admin and analytics

The map is exposed as a collapsed-by-selection internal panel in `index.html`.
The richer deterministic journey runner is the primary interactive surface;
the current selected record is rendered locally by `app.js`. Neither
surface submits, persists, fetches, authenticates or calls an endpoint.

## Raw-chat citation legend

The citations below use the committed founder transcript
`nekurama.chatgpt.md`. `line` is the transcript line, `turn` is the
chronological User/Assistant block ordinal used for this QA record, and `UUID`
is the corresponding message UUID in `nekurama.raw.chat.json`.

- **R1** — `nekurama.chatgpt.md:L22364-L22600`, `turn=341`,
  `UUID=128e9fdc-9032-4a5d-b627-4f0118fc3ba3`: discovery telemetry, menu
  version lineage, cart state and order commitment.
- **R2** — `nekurama.chatgpt.md:L22692-L22920`, `turn=344`,
  `UUID=5ec0497b-76d4-4977-bc62-179f63f51edc`: payment initiation and
  completion, order status, modification and cancellation.
- **R3** — `nekurama.chatgpt.md:L23084-L23220`, `turn=356`,
  `UUID=3e8555a9-1abd-4aed-9f41-1f9e877531fc`: pickup, delivery quote and
  booking, tracking and generic notifications.
- **R4** — `nekurama.chatgpt.md:L23347-L23620`, `turn=362`,
  `UUID=b9268887-30dc-4aae-8605-fbd2dfe383ab`: human takeover, verified
  feedback, reorder, owner identity and restaurant-group creation.
- **R5** — `nekurama.chatgpt.md:L8786-L9370`, `turn=138`,
  `UUID=9f8c36ea-dfaf-4b9b-b02e-793ea4b4d6ba`: menu ingestion as a
  candidate/review/publish pipeline.
- **R6** — `nekurama.chatgpt.md:L9374-L9940`, `turn=145`,
  `UUID=4c5f1fee-fb57-4468-a341-08a6f86bad0c`: progressive menu schema,
  offers, combos, availability and verification.
- **R7** — `nekurama.chatgpt.md:L12325-L12995`, `turn=190`,
  `UUID=15581a74-d6e9-49d7-86ff-4aafb31f1922`: generalized state/workflow
  engine, transitions, retries, human waits, audit and recovery.
- **R8** — `nekurama.chatgpt.md:L27846-L27980`, `turn=451`,
  `UUID=f71fa2df-8093-4a5f-a692-9ad4ba465008`: web as the dense
  configuration, analytics and recovery surface.
- **R9** — `nekurama.chatgpt.md:L42484-L42620`, `turn=682`,
  `UUID=81bd047d-e419-4355-b34a-764975ab7c79`: owner/manager/staff as
  personas and scoped operating relationships.

## Scenario records

### 01 — Restaurant onboarding

- **Actor:** Invented founder/operator in a controlled setup review.
- **Precondition:** A fictional restaurant name and branch fixture exist; no
  identity or channel is connected.
- **Happy path:** Review tenant → branch → channel placeholders and mark the
  setup ready for internal demo.
- **Alternate/error path:** A second branch remains draft, or an incomplete
  channel check keeps the workspace in review.
- **State transition:** `DISCOVERED → AUTHORIZING → CONFIGURING → READY`
  (illustrative only).
- **Permission/data boundary:** Tenant/branch fixtures only; no credentials,
  WhatsApp identifiers, customer records or secrets.
- **Acceptance check:** A reviewer can explain the shown state and confirm that
  no external connection occurred.
- **Implementation/demo status:** Prototype state is mapped in the internal
  panel; production onboarding is not implemented. **Citation:** R4.

### 02 — Owner setup

- **Actor:** Invented owner/operator.
- **Precondition:** A fictional identity and restaurant-group fixture are shown.
- **Happy path:** Show owner membership, branch scope and a provisional
  capability without authenticating.
- **Alternate/error path:** A multi-branch owner starts with a narrower branch
  scope before an explicit review change.
- **State transition:** `IDENTITY_ESTABLISHED → MEMBERSHIP_REVIEW →
  SCOPED_ACCESS` (illustrative only).
- **Permission/data boundary:** No login, token, personal data or real access
  decision; membership is display-only.
- **Acceptance check:** Owner, tenant and branch are visibly distinct.
- **Implementation/demo status:** Prototype state is mapped; authentication and
  authorization runtime are not implemented. **Citation:** R4.

### 03 — Staff setup

- **Actor:** Invented owner or manager.
- **Precondition:** An invented restaurant group and branch scope are shown.
- **Happy path:** Choose an operator role, assign one branch and preview the
  resulting review boundary.
- **Alternate/error path:** A missing branch or unclear permission leaves the
  invitation in review.
- **State transition:** `INVITED → SCOPE_REVIEW → READY_FOR_APPROVAL`
  (illustrative only).
- **Permission/data boundary:** Role labels and scopes are synthetic; no email,
  phone, credential or invitation is sent.
- **Acceptance check:** A reviewer can identify the staff scope and excluded
  actions.
- **Implementation/demo status:** Prototype state is mapped; no staff
  directory, RBAC service or invite endpoint exists. **Citation:** R9.

### 04 — Customer discovery

- **Actor:** Invented customer.
- **Precondition:** A fictional restaurant card and branch context are local.
- **Happy path:** Open the restaurant summary, inspect hours and choose to view
  the menu.
- **Alternate/error path:** Unavailable hours or a missing branch returns a
  neutral review state rather than a promise.
- **State transition:** `DISCOVERED → RESTAURANT_VIEWED → MENU_REQUESTED`
  (illustrative only).
- **Permission/data boundary:** No location, identity, customer profile or
  tracking event leaves the page.
- **Acceptance check:** Discovery telemetry is distinct from durable order
  state.
- **Implementation/demo status:** Journey runner plus coverage state; no search
  or analytics service. **Citation:** R1.

### 05 — Menu

- **Actor:** Invented customer; restaurant reviewer for the source state.
- **Precondition:** A synthetic menu revision contains one item, one variant and
  an availability flag.
- **Happy path:** Inspect the revision, select an available item and carry its
  menu context forward.
- **Alternate/error path:** A stale revision or unavailable item requires
  review rather than silent substitution.
- **State transition:** `CANDIDATE → REVIEW → PUBLISHED`; selection carries
  `menuVersion` (illustrative only).
- **Permission/data boundary:** No uploaded menu, inventory, allergen claim,
  image, restaurant record or customer preference.
- **Acceptance check:** Menu context is visibly different from committed order
  truth.
- **Implementation/demo status:** Journey runner and coverage record only; no
  catalog ingestion or publish path. **Citation:** R5 and R6.

### 06 — Cart and order

- **Actor:** Invented customer, then restaurant staff.
- **Precondition:** A synthetic menu selection and menu version are available.
- **Happy path:** Create cart → validate current context → draft order → show
  the next review action.
- **Alternate/error path:** A changed price, unavailable item or stale
  projection pauses commitment for revalidation.
- **State transition:** `CART_OPEN → CART_REVIEW → ORDER_DRAFT →
  PAYMENT_PENDING` (illustrative only).
- **Permission/data boundary:** No order ID, address, customer profile,
  invoice, endpoint or durable event is created.
- **Acceptance check:** The state says draft/review and never implies an order
  was submitted.
- **Implementation/demo status:** Journey runner plus coverage state; no
  ordering service. **Citation:** R1.

### 07 — Payment

- **Actor:** Invented customer; restaurant staff for manual review.
- **Precondition:** A fictional order candidate exists in payment-pending.
- **Happy path:** Show payment initiation as pending, then return control to
  order review.
- **Alternate/error path:** Provider confirmation, manual confirmation or
  failure remains a separate fact requiring review.
- **State transition:** `PAYMENT_PENDING → PAID / FAILED / REFUND_REVIEW`
  (illustrative only).
- **Permission/data boundary:** No payment provider, card, UPI, bank, amount,
  receipt, refund or webhook data.
- **Acceptance check:** Payment success is never equated with restaurant
  acceptance.
- **Implementation/demo status:** Coverage mapping only; no payment UI,
  provider integration or payment state engine. **Citation:** R2.

### 08 — Pickup and delivery

- **Actor:** Invented customer, restaurant staff and an imagined provider.
- **Precondition:** A fictional accepted-order state and fulfillment choice are
  available.
- **Happy path:** Choose pickup or delivery, show the next operational state
  and expose a reviewable tracking placeholder.
- **Alternate/error path:** An expired quote, provider failure or missing
  pickup verification holds the state for recovery.
- **State transition:** `ACCEPTED → PREPARING → READY → PICKUP_COMPLETE` or
  `DELIVERY_PENDING` (illustrative only).
- **Permission/data boundary:** No address, driver, quote, tracking URL,
  partner domain, location or delivery request exists.
- **Acceptance check:** The reviewer can name each state owner and see that
  booking is not implied.
- **Implementation/demo status:** Coverage prototype only; no fulfillment or
  delivery service. **Citation:** R3.

### 09 — Promo and combo

- **Actor:** Restaurant owner configuring an invented offer; customer reviewing
  it.
- **Precondition:** A synthetic item, date window and offer rule are present.
- **Happy path:** Apply the eligible combo to the current cart and show the
  resulting draft calculation.
- **Alternate/error path:** An expired, ineligible or conflicting offer remains
  visible as not applied.
- **State transition:** `OFFER_DRAFT → OFFER_ACTIVE → EVALUATED` or
  `NOT_APPLIED` (illustrative only).
- **Permission/data boundary:** No real price, tax, coupon, customer eligibility,
  redemption counter or commercial promise.
- **Acceptance check:** The state says whether the offer was applied and keeps
  the invented source context.
- **Implementation/demo status:** Coverage mapping only; no pricing,
  promotion or tax engine. **Citation:** R6.

### 10 — Human takeover

- **Actor:** Invented customer and restaurant staff.
- **Precondition:** A fictional conversation contains ambiguity or an explicit
  help request.
- **Happy path:** Request → claim → human active → resolve → release back to
  automation.
- **Alternate/error path:** No staff claim, conflicting claim or unresolved
  exception keeps the conversation human-requested.
- **State transition:** `AUTOMATED → HUMAN_REQUESTED → HUMAN_ACTIVE →
  HUMAN_RELEASED → AUTOMATED`.
- **Permission/data boundary:** No personal WhatsApp, staff identity, message,
  customer conversation or outbound send.
- **Acceptance check:** Automation is visibly paused for the conversation while
  other state work remains separate.
- **Implementation/demo status:** Journey runner plus coverage state; no chat
  service or staff console. **Citation:** R4.

### 11 — Notifications

- **Actor:** Notification-policy reviewer and an invented customer.
- **Precondition:** A synthetic event such as `OrderReady` exists in the map.
- **Happy path:** Event → notification policy → approved fixture message →
  local preview.
- **Alternate/error path:** Outside a messaging window or missing consent
  selects a held/template-review state.
- **State transition:** `EVENTED → ELIGIBILITY_REVIEW → QUEUED → PREVIEWED`
  (illustrative only).
- **Permission/data boundary:** No phone number, template, provider token,
  opt-in record, message delivery or notification log.
- **Acceptance check:** The preview is local and names why a send would be
  gated.
- **Implementation/demo status:** Coverage mapping only; no notification
  service or channel adapter. **Citation:** R3.

### 12 — Feedback and reorder

- **Actor:** Invented customer; restaurant staff for moderation.
- **Precondition:** A fictional completed order and current menu revision exist.
- **Happy path:** Invite feedback → mark it local-only → rebuild a new cart from
  current menu context for review.
- **Alternate/error path:** A deleted item, changed price or unavailable
  modifier requires a choice rather than substitution.
- **State transition:** `COMPLETED → FEEDBACK_REVIEW → REORDER_CART →
  ORDER_REVIEW` (illustrative only).
- **Permission/data boundary:** No review publication, customer photo,
  identity, loyalty record, historical price or repeat order.
- **Acceptance check:** Current price/availability and explicit review are
  visible before any new order state.
- **Implementation/demo status:** Coverage prototype only; no feedback, review
  or reorder service. **Citation:** R4.

### 13 — Exceptions and recovery

- **Actor:** Restaurant staff or an internal reviewer.
- **Precondition:** A synthetic flow has a stale menu, sold-out item, payment
  mismatch or provider timeout.
- **Happy path:** Record the reason → choose a bounded action → retry safely or
  create a correction state.
- **Alternate/error path:** Repeated failure moves to held/manual review; no
  silent substitution or invented success is shown.
- **State transition:** `ACTIVE → BLOCKED → HUMAN_REVIEW → RETRY` or
  `COMPENSATE` or `CLOSED` (illustrative only).
- **Permission/data boundary:** No real refund, invoice, provider callback,
  secret, log payload or customer contact.
- **Acceptance check:** Every error state names its next owner and avoids a
  success-shaped fallback.
- **Implementation/demo status:** Coverage mapping only; no workflow engine,
  retry worker or reconciliation runtime. **Citation:** R7.

### 14 — Admin and analytics

- **Actor:** Invented owner/admin reviewer.
- **Precondition:** Synthetic state summaries and event counts are local
  fixtures.
- **Happy path:** Inspect branch scope, state health, exception queue and
  funnel placeholders without changing data.
- **Alternate/error path:** Missing permission or stale projection shows a
  gated/unknown state instead of fabricated metrics.
- **State transition:** `EVENTS → PROJECTION → REVIEW →
  ACTION_REQUIRES_SCOPE` (illustrative only).
- **Permission/data boundary:** No analytics tracker, customer cohort, sales
  number, staff record, export or admin credential.
- **Acceptance check:** The reviewer can distinguish a planning fixture from an
  observed metric or live dashboard.
- **Implementation/demo status:** Coverage panel only; no admin app, analytics
  store or tracking request. **Citation:** R8.

## Open gates

- Founder/product review of the grouping and labels is pending.
- The panel is not a claim that any mapped flow exists in production.
- LITE/BASE/PRO remain collapsed internal concepts with no public pricing,
  entitlement, API, service-level or availability claim.
- CTA destinations, authentication, privacy notice, retention, tenant
  controls, provider integrations and any real pilot evidence remain outside
  this static artifact.
