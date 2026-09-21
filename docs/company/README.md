---
status: partial
owner: NEKURAMA
last-reviewed: 2026-09-20
sources:
  - admin decision packet (2026-09-20)
  - nekurama.raw.chat.json
  - nekurama.chatgpt.md
  - docs/company/e-setup-checklist.md
---

# NEKURAMA Company Knowledge

This directory records company-level truth, decisions, open questions, and execution controls. BABAI product architecture and implementation detail belongs under `docs/products/`.

## Status vocabulary

- **Confirmed** — explicit in the current admin packet or supported by the founder discussion; it is not necessarily evidence that a filing or control is complete.
- **Proposed / intended** — the direction to execute, subject to founder approval, professional advice, or evidence.
- **Unknown / open** — the source does not settle the matter.
- **Professional validation required** — CS, lawyer, CA, accountant, employer-policy, or other specialist review is required before acting.
- **Historical / superseded** — retained only to prevent stale material from being mistaken for current truth.

Raw citations use the chronological index of non-empty messages in `nekurama.raw.chat.json` as the stable turn number, plus the message UUID.

## Current company spine

| Area | Current position | Status |
| --- | --- | --- |
| Company identity | NEKURAMA is the umbrella/company identity; BABAI is a product/brand. | Confirmed direction |
| Entity | Private Limited application has already been applied. The incorporation certificate is the transition point for company execution. | Confirmed packet state |
| Founders | Manoj Vysyaraju and Vinay. | Confirmed discussion |
| Founder ownership | Manoj 55% / Vinay 45%. | Confirmed decision |
| Founder vesting | Four-year vesting with a one-year cliff. | Confirmed packet decision; documents pending |
| IP | Company owns only new NEKURAMA/BABAI work, excluding employer and third-party IP. | Confirmed policy; adoption docs pending |
| Finance | GST/tax setup is handled with the CA; books and controlled accounting start from incorporation. | Confirmed packet state |
| Incentives | DPIIT, T-Hub, and incubator applications remain eligibility-gated. | Open/professional validation |
| Account control | Founder-owned domain, GitHub, AWS, Meta, billing, and recovery accounts are to migrate to company control with MFA. | Required execution |

## Transition rule

Before the incorporation certificate: do not treat the company as incorporated, execute major contracts, hire, or perform formal IP transfer. Prepare the documents and evidence. After the certificate: execute the founder/shareholder agreement immediately, before material contracts, and complete company adoption/assignment documents with CS/lawyer review.

## Workstreams

The cross-dimension sequence and owners are maintained in [`e-setup-checklist.md`](e-setup-checklist.md). The [`oct-dec-execution-plan.md`](oct-dec-execution-plan.md) adds the October–December reserve, cash/economic-cost, founder-time and internal-evidence-ledger controls without closing any external gate. The [`external-entity-register.json`](external-entity-register.json) file is the evidence register for certificates, professional reviews, clearances, registrations, programme decisions and provider approvals. The five dimension files retain durable truth and detailed checklists:

- `identity-and-strategy.md`
- `founders-ownership-governance.md`
- `ip-brand-legal.md`
- `finance-tax-compliance.md`
- `security-privacy-controls.md`

## Evidence boundary

The founder discussion records decisions and research directions, not certificates, executed agreements, trademark clearance, tax rulings, account transfers, or enabled controls. Link evidence before changing a pending item to complete. No secrets, passwords, tokens, recovery codes, or unverified credentials belong in this repository.
