---
status: internal prototype inventory — not a product specification
owner: web-qa / Track 5
last-reviewed: 2026-09-21
scope: Founder-flow coverage map for the native mock; no public claims or production implementation
sources:
  - FLOW INVENTORY — WEB/QA PROTOTYPE (2026-09-21)
  - nekurama.chatgpt.md
  - docs/web/landing-page.md
  - docs/products/babai/product-definition.md
  - docs/products/babai/experience-and-channels.md
  - docs/products/babai/validation.md
---

# Founder flow inventory

This inventory maps the internal prototype to the founder-flow source in the
committed `nekurama.chatgpt.md`. It intentionally ignores the existing
`01 / THE MOCK FLOW` label and covers the 14 additional flow slices below.

`POC` means a static interaction or state can be reviewed now. `Pilot` means
the flow is a candidate for synthetic pilot rehearsal after the POC boundary
is accepted. `Later` means the source describes a product/architecture
direction that must not be represented as implemented capability.

## Coverage matrix

| ID | Founder-flow slice | Source anchor | Mock screen/state | Maturity | Acceptance criterion |
| --- | --- | --- | --- | --- | --- |
| F01 | Admin → owner onboarding | `nekurama.chatgpt.md:L1233-L1309` | Admin invite / awaiting owner setup | POC | A synthetic restaurant can be created as an initiated invitation without collecting or submitting real data. |
| F02 | Owner invitation and welcome | `nekurama.chatgpt.md:L1309-L1321` | Owner welcome / start setup | POC | The mock clearly separates an invitation from an active restaurant and exposes a safe next step. |
| F03 | Owner menu submission and verification | `nekurama.chatgpt.md:L1321-L1375` | Menu received / review fixture | POC | A synthetic menu can move from received to review without file upload, extraction service or customer data. |
| F04 | Ordering options, plan and activation | `nekurama.chatgpt.md:L1377-L1438` | Options / activation held | Later | The mock shows a gated placeholder only; no pricing, payment, plan entitlement or “live” claim is allowed. |
| F05 | Onboarding state tracker | `nekurama.chatgpt.md:L1444-L1478` | Invited → menu → verification → held | POC | State labels are deterministic, resettable and visibly mock-only, including a failed/held state. |
| F06 | Customer discovery and ordering | `nekurama.chatgpt.md:L1478-L1520` | Customer menu → cart → pickup/delivery placeholder | Pilot | Synthetic steps are reviewable without a real customer, address, payment or delivery integration. |
| F07 | Restaurant order lookup through WhatsApp | `nekurama.chatgpt.md:L1522-L1578` | Orders / order detail / action placeholder | Pilot | A fictional order can be inspected and its action buttons remain non-submitting placeholders. |
| F08 | Restaurant dashboard operations | `nekurama.chatgpt.md:L1588-L1620` | Orders dashboard / summary cards | Pilot | The mock shows a bounded operational view without live metrics, account access or data persistence. |
| F09 | Proactive order notification | `nekurama.chatgpt.md:L1621-L1667` | New-order notification / review | Pilot | A synthetic notification is announced accessibly and contains no real contact or order data. |
| F10 | Order state lifecycle | `nekurama.chatgpt.md:L1666-L1674` | New → accepted → preparing → ready → completed | Pilot | Every state transition is local, reversible and announced; no fulfillment or payment side effect exists. |
| F11 | Staff accounts and permissions | `nekurama.chatgpt.md:L1678-L1737` | Owner/staff role boundary | Later | Roles are shown as placeholders only; no authentication, invite, authorization or account creation is implemented. |
| F12 | Restaurant/tenant identity model | `nekurama.chatgpt.md:L1740-L1775` | Restaurant identity / boundary note | Later | The mock keeps restaurant, owner, staff and customer concepts distinct without storing any records. |
| F13 | Admin restaurant oversight | `nekurama.chatgpt.md:L1778-L1818` | Restaurant list / pending state | Pilot | Synthetic restaurants can be filtered by mock status without reminder, payment, cancellation or account actions. |
| F14 | Menu ingestion and V1 chain | `nekurama.chatgpt.md:L1885-L1949` | Menu → order → notify → accept → complete → confirmation | POC | The prototype can explain the intended chain as labeled mock states while keeping delivery, payment and production integrations out of scope. |

## Shared acceptance gates

- Every screen identifies itself as **MOCK**, **POC**, **PILOT REVIEW** or
  **LATER / NOT IMPLEMENTED**.
- All fixture names, messages, menus, order numbers, timestamps, statuses and
  capability differences are invented and locally defined.
- No real form submit, auth, payment, customer record, restaurant record,
  WhatsApp connection, backend, analytics or external request exists.
- Every selector is keyboard-operable with visible focus, one active tab stop,
  `aria-selected`/`aria-current` where applicable and a live announcement for
  state changes.
- The 14 states remain usable at narrow responsive widths, with no horizontal
  page overflow and a text alternative for visual-only concepts.
- Source line references remain attached to the inventory; they do not convert
  founder discussion into approved product behavior.

## Gaps and deferrals

- Meta/WABA onboarding, provider choice, pricing, payment economics and
  privacy/legal terms remain unresolved in the founder source and are not
  implemented here.
- Delivery, customer analytics, campaigns, exports, staff authorization and
  multi-tenant production behavior remain later-stage or architecture work.
- The inventory is a coverage map, not evidence that any flow is validated,
  generally available or safe for public marketing.
