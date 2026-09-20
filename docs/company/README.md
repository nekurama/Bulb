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
