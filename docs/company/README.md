# NEKURAMA Company Knowledge

## Current decision source

The **2026-09-20 ADMIN DECISION PACKET** is the current administrative decision source for
company setup. It supersedes earlier working assumptions where it is more specific, but it does
not replace a certificate, signed instrument, filing receipt or professional advice. Raw-chat
citations below are retained where they corroborate the packet; packet-only decisions are
explicitly marked as such in the e-setup checklist.

Current durable company-level truth. Product-specific detail belongs under `docs/products/`.

## Status vocabulary

- **confirmed** — current direction or principle is explicit in the source record
- **partial** — direction exists, but execution details or open questions remain
- **unknown** — the dimension is identified but no reliable current answer is recorded
- **professional-validation-required** — legal, tax, accounting, employment or regulatory confirmation is required before acting
- **stale** — a file conflicts with a later source decision and must not be used as current truth

## Core dimensions

- Identity and strategy
- Corporate structure and governance
- Founders and ownership
- IP, brand and legal
- Finance, tax and compliance
- Privacy, security and company controls
- Operations, vendors and capital

## E-setup workstream

`e-setup-checklist.md` is the bounded cross-dimension checklist for incorporation, founder/governance, IP/brand/legal, finance/tax/compliance and security/privacy setup. It records actionable work without turning unresolved questions into company decisions.

`external-entity-register.json` is the durable evidence register for external certificates, professional reviews, trademark clearances, registrations, programme decisions and provider approvals. It records owners, dependencies, next actions and control boundaries; it does not claim completion without evidence.

## Current handoff status

| Dimension | Status | Immediate evidence or action |
| --- | --- | --- |
| Identity and strategy | **partial** | Private Limited has already been applied for; the incorporation certificate is the transition point. Major commitments remain deferred until incorporation. |
| Founders, ownership and governance | **partial** | Manoj 55% / Vinay 45% with four-year vesting and a one-year cliff is the current packet direction; CS/lawyer review and execution remain. |
| IP, brand and legal | **partial** | New NEKURAMA/BABAI work is intended for the company, excluding employer/third-party IP; clearance and post-incorporation adoption documents remain. |
| Finance, tax and compliance | **partial** | CA/bookkeeper-led books begin at incorporation with controlled software and monthly reconciliation; GST/tax and scheme eligibility require validation. |
| Security, privacy and controls | **partial** | Migrate founder-owned assets to company control with MFA; implementation evidence and privacy/security reviews remain. |

No row above means that incorporation, ownership issuance, trademark registration, tax eligibility or control implementation has already occurred.

## Sources

Primary decision/history: `nekurama/Bulb#2` and current company specification `nekurama/Bulb#5`; supporting product/company decisions may reference `nekurama/Bulb#1` and historical `ManojVysyaraju/bulb#1`.

Conversation evidence is anchored in `nekurama.raw.chat.json` by message UUID, including:

- `bbb2179b-ab78-4f20-98ef-1bf49a0702f7` — Pvt Ltd vs LLP costs, roles and founder participation questions
- `bbb21d97-c664-432c-9a10-f74d42232df7` — spouse funding as loan versus equity
- `bbb214cb-4959-4878-b6a9-2358ddbf2b07` — BABAI/product boundary versus NEKURAMA technology/IP
- `bbb21ece-7bb6-4a1f-9798-9ebd4ed6bcbd` — legal brand clearance and domain direction
- `bbb217ee-01a7-4f44-a207-116c50531b56` — acquiring the company domain and subdomain structure
- `bbb21621-2657-4cf5-a886-3d3079042f08` — startup rebates and GST questions
- `bbb21e3d-91a3-48de-90a7-986c6beb716b` — DPIIT and government-procurement/ONDC question

Raw messages are founder-history evidence, not executed agreements or professional advice. A raw message can record a proposal, question or historical option; the later issue decision and implementation evidence determine whether it is current.

## Thin-file inventory

- `README.md` is intentionally a thin index, not a company decision record.
- The five dimension files are compact **partial** durable-truth files. Their question lists are deliberate open work, not empty placeholders.
- `external-entity-register.json` is the focused cross-dimension evidence register for external gates and approvals.
- The cross-dimension checklist remains separate so the dimension files remain focused.

## Handoff rule

Before acting on a company item, retain the relevant evidence artifact: certificate or filing receipt, signed agreement, cap-table/register entry, clearance report, invoice/ledger entry, access-control proof, or tested recovery/incident record. If the artifact does not exist, keep the item **partial**, **unknown** or **professional-validation-required** rather than upgrading its status.
