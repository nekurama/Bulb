---
status: internal static-mock coverage record
owner: web-qa
last-reviewed: 2026-09-21
---

# BABAI internal demo flow coverage

This record describes the deterministic browser-only mock in `index.html`,
`script.js` and `styles.css`. It is not a product specification, availability
statement, pricing document or implementation commitment. Every fixture is
invented. The page has no form, upload control, account, customer record,
payment method, backend, storage, analytics tracker or network request.

## Coverage matrix

| Family | Deterministic states exercised | Boundary evidence |
| --- | --- | --- |
| 01 Admin onboarding | invited → awaiting owner setup → owner setup → blocked/expired | Admin invitation is not a tenant, identity or channel. |
| 02 Owner menu setup | owner invited → image/PDF/text ready → extracting → review candidate → correction required → publish held → published revision | Source types and extraction are labels; no file upload or extraction service exists. |
| 03 Staff permissions | invite pending → role review → branch scope → handoff ready → revoked | Identity, membership, role, permission and scope remain distinct display concepts. |
| 04 Customer discovery | discovered → menu view → item detail → cart started → order review | No location, profile, customer record or tracking event exists. |
| 05 Menu and variants | source received → extract candidate → item review → variant review → correction → published | Menu version, item and variant context are invented and reviewable. |
| 06 Cart and order review | cart open → cart review → order draft → payment pending | Draft is never presented as a submitted order or durable record. |
| 07 Payment recovery | LITE/not enabled → BASE/payment pending → provider failure → retrying → reconciling | Payment never accepts an order; no provider, method, amount, receipt or refund exists. |
| 08 Pickup and delivery | pickup pending → ready for pickup → delivery pending → provider failure → retry/manual pickup | No address, driver, quote, tracking URL or delivery request exists. |
| 09 Promotions and combos | LITE/excluded → BASE/3 per day → PRO/gated → offer active → expired → not applied | Tier labels, limit and expiry are internal fixtures, not commercial claims. |
| 10 Order desk cues | new/attention → accepted → preparing → ready/attention → completed | Attention cues identify a next owner; no live queue or kitchen integration exists. |
| 11 Human takeover | automated → human requested → human active → resolved → human released | Takeover is reversible display state; no staff identity or message is sent. |
| 12 Notifications and reorder | notification queued → disconnected channel → provider failure → retry preview → reorder review → cancel/refund review | Notification, reorder, cancellation and refund are preview-only recovery states. |
| 13 Exceptions and recovery | extraction correction → order mismatch → provider failure → retry → reconciliation → held/manual review | Failure never falls through to a success-shaped result. |
| 14 Admin funnel and analytics | funnel/invited → funnel/menu review → attention queue → analytics fixture → stale/gated | Counts are static examples; no analytics collection, export or credential exists. |

## Interaction contract

- The 14-family tablist has one active tab stop and supports ArrowUp,
  ArrowDown, Home and End.
- Each selected family advances through a finite, deterministic state list.
- `Reset selected family` returns the selected family to its first state.
- `Reset all mock state` returns family 01 and focuses its tab.
- State changes are announced in the live status region and remain in memory
  only; refresh clears them.
- The page exposes **STATIC MOCK / NOTHING SUBMITS** at the top and above the
  coverage lab.
- The implementation contains no form element, file input, fetch/XHR call,
  storage API, external URL, auth flow, payment SDK, customer record or
  provider/network boundary.

## Existing flow-artifact relationship

This coverage record complements, and does not replace, the preserved
Product/Architecture artifacts:

- `docs/web/flow-inventory.md`
- `docs/products/babai/flow-architecture.md`

Those documents retain founder-source anchors and architecture state-machine
boundaries. This page only demonstrates safe local review fixtures.
