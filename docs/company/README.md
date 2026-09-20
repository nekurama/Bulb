# NEKURAMA Company Knowledge

Current company-level working truth. Product-specific requirements belong under `docs/products/`.
These pages preserve founder intent while clearly separating decisions, working hypotheses,
and matters that require professional or founder confirmation.

## Status meanings

- **Confirmed direction**: repeated founder intent or a company-level principle; not necessarily
  an executed legal instrument.
- **Working intent**: the current operating assumption; do not treat it as an incorporated,
  filed, registered, or contractually binding fact.
- **Hypothesis**: a commercial or operating assumption that must be tested.
- **Partial / open**: evidence exists, but an important dependency or decision is missing.
- **Challenge required**: a CA/CS, corporate/IP/privacy counsel, security owner, or the founders
  must validate it before reliance or execution.

## Artifact map

| Artifact | Durable scope |
|---|---|
| [Identity & Strategy](identity-and-strategy.md) | NEKURAMA/BABAI relationship, entity direction, e-setup gates |
| [Founders, Ownership & Governance](founders-ownership-governance.md) | Founder status, working ownership, roles, funding and reserved matters |
| [IP, Brand & Legal](ip-brand-legal.md) | IP provenance, assignments, brands, domains and contract workstreams |
| [Finance, Tax & Compliance](finance-tax-compliance.md) | Books, money flows, tax/benefit workstreams and commercial hypotheses |
| [Security, Privacy & Company Controls](security-privacy-controls.md) | Company controls, privacy boundaries, access and pilot-readiness gaps |

## Company-level durable direction

- NEKURAMA is the intended operating and IP-holding company; BABAI is a product/brand of
  NEKURAMA, not currently a separate legal entity.
- Bootstrap-first remains the funding posture; funding is optional, not assumed.
- Founder equity, founder funding, salary/compensation and future employee equity are separate
  concepts.
- BABAI's initial payment direction is direct merchant payment with a separate SaaS
  subscription; NEKURAMA should not accidentally become the custodian or settlement
  intermediary for restaurant funds.
- Company-owned domains, repositories, cloud/provider accounts and secrets are required;
  access must be least-privilege and offboarding-capable.

## Source hierarchy and citation convention

1. `nekurama.raw.chat.json` is the primary founder intent/history source. Raw-chat citations use
   the exact conversation node UUID, for example `raw chat node 23a95bbe...`.
2. `nekurama.chatgpt.md` is the final markdown export. Cite the heading and line range when
   quoting an exported decision.
3. `nekurama.babai.research.md` is field evidence, not legal or financial proof. Cite the
   section and line range and retain its validation limits.
4. Existing GitHub issue references (`nekurama/Bulb#1` and `nekurama/Bulb#2`) are historical
   context; an issue status is not a substitute for an executed agreement, filing, clearance,
   or professional opinion.

No page in this directory is legal, tax, accounting, privacy, or security advice. Open items
are written as checklists rather than filled with unsupported conclusions.

## Retained prior handoff vocabulary and inventory

The earlier handoff used the following labels, which remain valid alongside the expanded status
meanings above: **confirmed** means the current direction is explicit in the source record;
**partial** means direction exists while execution details or open questions remain; **unknown**
means no reliable current answer is recorded; and **professional-validation-required** means
legal, tax, accounting, employment, regulatory, privacy or security confirmation is required
before acting.

`e-setup-checklist.md` remains the bounded cross-dimension checklist for incorporation,
founder/governance, IP/brand/legal, finance/tax/compliance and security/privacy setup.

Prior source anchors remain part of the evidence record: `nekurama/Bulb#5`,
`nekurama.raw.chat.json#bbb2179b-ab78-4f20-98ef-1bf49a0702f7`,
`nekurama.raw.chat.json#bbb21d97-c664-432c-9a10-f74d42232df7`,
`nekurama.raw.chat.json#bbb214cb-4959-4878-b6a9-2358ddbf2b07`,
`nekurama.raw.chat.json#bbb21ece-7bb6-4a1f-9798-9ebd4ed6bcbd`,
`nekurama.raw.chat.json#bbb217ee-01a7-4f44-a207-116c50531b56`,
`nekurama.raw.chat.json#bbb21621-2657-4cf5-a886-3d3079042f08`, and
`nekurama.raw.chat.json#bbb21e3d-91a3-48de-90a7-986c6beb716b`.

The thin-file inventory is deliberate: the five dimension files are partial durable-truth
records, their open questions are not empty placeholders, and the cross-dimension checklist is
kept separate so each dimension remains focused.
