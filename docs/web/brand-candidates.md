---
status: candidate exploration — not approved for public publication
owner: NEKURAMA / BABAI
last-reviewed: 2026-09-21
scope: Candidate logo/lockup directions and asset QA; no trademark or publication decision
sources:
  - FOUNDER PACKET — WEB/QA BRAND CANDIDATES (2026-09-21)
  - docs/company/identity-and-strategy.md
  - docs/products/babai/thesis-and-positioning.md
  - docs/company/ip-brand-legal.md
  - assets/branding/logo/nekurama-cat.svg
  - assets/branding/logo/nekurama-kurama.svg
  - nekurama.raw.chat.json
---

# NEKURAMA / BABAI brand candidates

These are exploratory SVG directions for internal review. They are candidate
inputs, not approved marks, trademark evidence, public claims or legal
clearance. Do not replace the landing-page placeholders or publish these assets
without founder, product and legal approval.

The candidate set follows the current relationship:

```text
NEKURAMA  →  BABAI
parent/company   product/brand candidate
```

The lockups use **“BABAI — Business Automation by AI”** only as the
founder-approved wording supplied for this exercise. Its presence in a
candidate SVG does not settle whether it is the final public expansion,
tagline, category or legal name.

## Candidate directions

| ID | Direction | Source intent | Main risk to test |
| --- | --- | --- | --- |
| 01 | **Orbit lockup** | Makes the parent/product relationship visible; the orbit and spark suggest enabling technology without making an AI claim. | Could feel corporate or infrastructure-led rather than locally approachable. |
| 02 | **Friendly operator spark** | Uses a warm face/operator badge with a spark; supports the “friendly, familiar, human and locally approachable” personality direction. | The face may over-personify the product or imply a chatbot. |
| 03 | **Menu signal** | Combines a menu/card, conversational signal lines and a spark; nods to the restaurant wedge while staying abstract enough for future verticals. | Menu imagery may narrow the brand to restaurants permanently. |
| 04 | **Cat relay** | Explores NEKURAMA mascot energy and a speech relay, informed by the existing cat candidate asset. | Mascot recognition may overpower BABAI or introduce an unintended character commitment. |

## Asset inventory

Each direction has a transparent SVG for light and dark surfaces:

Repository-relative paths are:

```text
assets/branding/candidates/01-orbit-lockup-light.svg
assets/branding/candidates/01-orbit-lockup-dark.svg
assets/branding/candidates/02-operator-spark-light.svg
assets/branding/candidates/02-operator-spark-dark.svg
assets/branding/candidates/03-menu-signal-light.svg
assets/branding/candidates/03-menu-signal-dark.svg
assets/branding/candidates/04-cat-relay-light.svg
assets/branding/candidates/04-cat-relay-dark.svg
```

No PNGs were generated. SVG is preferred here because it keeps the candidate
mark inspectable, scalable and easy to provenance-review.

## Usage and accessibility notes

- `*-light.svg` is intended for light/paper surfaces; `*-dark.svg` is intended
  for dark/ink surfaces.
- All SVGs have transparent backgrounds. Do not place a light variant on an
  ink background or a dark variant on a paper background without rechecking
  contrast.
- The lockups contain text and must not be used as a substitute for live,
  selectable HTML text in an accessible public page.
- Recommended alt text for a visible candidate:
  `Candidate [ID], [direction name] logo lockup for internal review.`
- If the logo is decorative beside an adjacent text heading, use empty alt text
  and keep the product/company names in HTML.
- Do not communicate the parent/product relationship with color alone; the
  lockup text and surrounding context must carry it.
- The spark, cat, tray/menu and orbit are visual metaphors only. They do not
  assert AI capability, restaurant scope, trademark meaning or legal status.

### Contrast review

The candidate palette was checked against the intended paper/ink surfaces:

| Pair | Ratio | Use |
| --- | ---: | --- |
| `#17221D` on `#F4EFE4` | 14.27:1 | Light-variant wordmark and small text; passes WCAG AA/AAA contrast thresholds. |
| `#F4EFE4` on `#17221D` | 14.27:1 | Dark-variant wordmark and small text; passes WCAG AA/AAA contrast thresholds. |
| `#D8F06B` on `#17221D` | 12.94:1 | Dark-surface accent and emphasis; passes. |
| `#BFC8BE` on `#17221D` | 9.53:1 | Dark-surface supporting label; passes. |
| `#5C665C` on `#F4EFE4` | 5.22:1 | Light-surface supporting label; passes WCAG AA for normal text. |
| `#F3654B` on `#F4EFE4` | 2.70:1 | Decorative accent only; do not use for small standalone text. |

The red/coral and blue marks are accents, not the sole carrier of meaning.
Contrast must be rechecked if the palette, size, typeface or background changes.

## Provenance

- **Parent/product structure:** `docs/company/identity-and-strategy.md`
  identifies NEKURAMA as umbrella/company identity and BABAI as product/brand;
  `docs/products/babai/thesis-and-positioning.md`, section 19, records the
  same relationship.
- **Product personality:** `docs/products/babai/thesis-and-positioning.md`,
  section 16, calls for a friendly, familiar, human and locally approachable
  feel rather than a corporate tool or AI gimmick.
- **Restaurant/operator direction:** the thesis sections 3, 11 and 12 establish
  restaurants as the initial wedge and the owner/operator as economic buyer;
  the candidate set treats that as a wedge, not a permanent logo boundary.
- **Name selection, not clearance:** the thesis section 18 records BABAI’s
  human-feedback selection and separately keeps trademark clearance open.
- **Mascot input:** `assets/branding/logo/nekurama-cat.svg` is an existing
  candidate visual input for Direction 04; the new asset is an exploratory
  reinterpretation, not a claim of ownership or clearance.
- **Raw anchors:** NEKURAMA/BABAI company-product relationship is recorded in
  raw Turn 537 / ID `aad46dc0-5d23-4a75-bcd7-7fc1076bacb7` and Turn 756 / ID
  `ac6e5b2c-5ebd-4d2b-9813-d72297a2afff`; the founder’s BABAI naming feedback
  appears in Turn 618 / ID `bbb21699-9902-40fc-9815-72621981d0a6`. The
  founder-approved wording is anchored at Turn 386 / mapping
  `bbb21347-433a-45d7-b022-6a9a210f8a4c`, with the source phrase at mapping
  `078f95a4-5e81-4488-ad45-5de38830c874`; it remains wording/intent only,
  pending professional trademark and public-copy validation.

## QA and publication gates

- [ ] Founder selects or rejects directions; no candidate is treated as final.
- [ ] Product confirms whether parent/company and product/brand hierarchy should
      appear together in public-facing lockups.
- [ ] Legal/trademark review covers word marks, visual marks, phonetics,
      classes, ownership and opposition risk before publication.
- [ ] Final public wording, tagline, testimonials, pricing, contact routes and
      legal/privacy text remain separately approved.
- [ ] Accessibility review verifies live HTML text, contrast, focus behavior,
      `alt` handling and reduced-motion behavior wherever an asset is used.
- [ ] Provenance records are retained for any selected direction, derivative
      artwork, font, icon or third-party asset.
- [ ] Candidate assets remain outside the deployed `site/` allowlist until
      explicitly approved.
