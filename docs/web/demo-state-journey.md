---
status: internal-demo-implemented / founder-review-pending
owner: web-qa
last-reviewed: 2026-09-21
---

# BABAI richer deterministic local-state journey

This record defines the screen/state map behind the static journey runner in
`index.html` and `app.js`. It deliberately does not reuse `01 / THE MOCK
FLOW`; the runner is a local state-machine prototype, not a conversational
story. Every fixture is invented and every transition is deterministic.

The UI must keep these labels visible:

- `STATIC MOCK`
- `NOTHING SUBMITS`
- `LOCAL READY`, `REVIEW`, `ATTENTION`, `GATED`, `BLOCKED`, `DONE`

There is no form, auth flow, payment action, file upload, backend, endpoint,
provider, tracker, customer record, staff record or network request.

## Journey matrix

| Journey | States implemented | Required coverage |
|---|---|---|
| Admin onboarding | Admin intake → owner invite sent → invite pending → owner acknowledged → onboarding ready | Admin onboarding, owner invite/status |
| Menu ingestion | Image source → PDF source → text source → extraction review → correction → publish review → published revision | Menu image/PDF/text, extraction, correction, publish |
| Staff access | Role review → permission scope → handoff ready → staff attention | Roles, permissions, handoff |
| Customer order | Discovery → menu → item/variant → cart → order review | Customer discovery, menu, item/variant, cart, review |
| Fulfillment | LITE payment pending → BASE payment failure → retry → PRO reconciliation → LITE pickup → BASE delivery pending → PRO provider failure → reconciled | Payment, pickup/delivery tiers, pending/failure/retry/reconciliation |
| Order desk | New → accepted → preparing → ready → completed | Order lifecycle and attention cues |
| Takeover | Automated → requested → active → released → automated again | Human takeover lifecycle |
| Promo/combo | LITE simple offer → BASE combo review → BASE expired → PRO gated capability | Tier limits and expiry |
| Notifications/recovery | Order-ready notification → reorder preview → cancel request → refund review → provider failure → disconnected channel → recovery review | Notifications, reorder, cancel/refund, provider/channel recovery |
| Analytics | Funnel empty → funnel activity → attention queue → scoped analytics → reconciliation | Admin funnel and analytics |

## State contract

Each state carries:

1. A screen label and state kicker.
2. A deterministic title and summary.
3. An invented actor.
4. A permission/data boundary.
5. A next-transition label.
6. An attention cue explaining what requires review.
7. A status badge showing whether the fixture is ready, pending, gated,
   blocked, attention-required or complete.

The journey runner uses only local constants. Selecting a state changes text
and focusable controls in the current document; it does not mutate storage,
make a request or create an identifier.

## Boundary decisions

- **Admin/owner:** invite and status are display-only; no address, token,
  identity or membership is created.
- **Menu:** image/PDF/text are source-type fixtures; no file chooser, bytes,
  OCR, extraction service or catalog publish occurs.
- **Staff:** role, permission and handoff are separate display states; no
  account, credential, branch authorization or notification exists.
- **Customer/order:** discovery and cart are not checkout; no customer profile,
  order, invoice, address or menu service is connected.
- **Payment:** pending, failure, retry and reconciliation never charge or
  refund; payment success is not order acceptance.
- **Fulfillment:** pickup and delivery states do not create quotes, bookings,
  addresses, drivers or tracking links.
- **Order desk:** lifecycle states are operational fixtures; no kitchen,
  inventory, SLA or customer message is implied.
- **Takeover:** automation pauses only in the illustrated state model; no
  conversation, staff identity or WhatsApp message exists.
- **Promo/combo:** LITE/BASE/PRO are internal gated labels; no pricing,
  entitlement, API or expiry engine is active.
- **Notifications/recovery:** reorder, cancel, refund, provider failure and
  disconnected channel are review states; no external effect occurs.
- **Analytics:** funnel and scoped analytics are synthetic fixtures; no
  tracking, customer cohort, sales metric or export is available.

## QA acceptance

- Selecting all ten journey families changes the state rail and screen without
  console errors.
- Arrow keys, Home and End move through the state rail; Tab reaches the
  scenario selector, rail, reset and advance controls in order.
- The first state disables Previous; the final state disables Advance and
  exposes `Journey complete`.
- Reset returns to the first state of the selected family.
- Attention, gated and blocked states are visually distinct and text-labeled.
- No state contains a real identity, credential, customer, restaurant,
  payment, provider, endpoint or network result.
- The screen remains usable at 320px, 375px, 768px, 1024px and 1440px, with
  no intentional horizontal overflow.

The earlier actor/precondition/acceptance and raw-chat citation records remain
in `docs/web/demo-flow-coverage.md`.
