---
status: living
owner: NEKURAMA
last-reviewed: 2026-09-20
sources:
  - nekurama.raw.chat.json
  - docs/README.md
---

# Knowledge Inventory

This is the inventory handoff for durable knowledge maintenance. The root
`nekurama.raw.chat.json` is the primary founder-history source of truth. Existing
documentation is compared against it for coverage, but existing files are not
treated as unquestionable history. The durable-file rules are defined in
`docs/README.md`: issues preserve history and decisions, files preserve current
truth, and unknown information must remain explicitly unknown rather than being
invented.

## Disposition summary

| Artifact | Size / condition | Disposition |
|---|---:|---|
| `data/executed_workflows/index.json` | 2 bytes; empty operational index | **Retain** only when required by the workflow runner; it is operational state, not durable founder knowledge. |
| `docs/company/founders-ownership-governance.md` | 875 bytes; thin/partial | **Fill** governance mechanics; retain confirmed founder and ownership facts. |
| `docs/company/identity-and-strategy.md` | 921 bytes; thin/partial | **Fill** legal identity, mission, portfolio principles and objectives; retain parent-company and bootstrap direction. |
| `docs/company/ip-brand-legal.md` | 1,258 bytes; thin/partial | **Fill** provenance, assignments, clearance, contracts and OSS controls; retain current provisional IP/brand direction. |
| `docs/company/finance-tax-compliance.md` | 1,258 bytes; thin/partial | **Fill** accounting, tax and execution evidence; mark eligibility questions unknown pending validation. |
| `docs/company/security-privacy-controls.md` | 898 bytes; thin/partial | **Fill** the security/privacy control baseline; retain least-privilege and isolation principles. |
| `docs/products/babai/customer-market.md` | 750 bytes; thin/partial | **Fill** ICP, segmentation, competition and acquisition evidence; retain the first-10 gate. |
| `docs/products/babai/experience-and-channels.md` | 1,079 bytes; thin but substantively useful | **Fill** journeys, onboarding, notifications and handoff details; retain channel and takeover state decisions. |
| `docs/products/babai/architecture.md` | 1,475 bytes; partial, not a placeholder | **Retain and fill** only after explicit architecture decisions; do not replace research-stage uncertainty with speculation. |
| `docs/products/babai/business-model.md` | 1,784 bytes; partial | **Retain and fill** with pilot evidence; pricing remains a hypothesis. |
| `docs/products/babai/validation.md` | 4,030 bytes; substantive but incomplete | **Retain and fill** measurable thresholds, instrumentation, ROI and conversion criteria. |

No zero-byte Markdown knowledge file was found. No durable `docs/` file was
demonstrably stale as of 2026-09-20; the weak condition is predominantly
partial coverage rather than outdated content.

## Evidence and rationale

### Company files

- `docs/company/founders-ownership-governance.md` has **“Current answer”** and
  **“Questions”**. It records Manoj Vysyaraju and Vinay, intended ownership of
  Manoj 55% / Vinay 45%, and separation of equity, compensation and founder
  funding. Its unanswered checklist covers shareholder terms, reserved matters,
  board structure, vesting/leavers, deadlock, funding documentation and ESOP
  policy. The raw history confirms the ownership checkpoint and one-company
  direction at JSON message indices **21** and **26**.
- `docs/company/identity-and-strategy.md` records under **“Current answer”** and
  **“Decision notes”** that NEKURAMA is the parent operating company, BABAI is the
  first product/brand, bootstrap-first is the current direction, and BABAI is not
  currently a separate subsidiary. Its **“Questions”** remain open. Raw JSON
  indices **21** and **26** contain the checkpoints **“Private Limited”**,
  **“One company, multiple products”**, and BABAI as product/brand.
- `docs/company/ip-brand-legal.md` records under **“Current answer”** the four
  IP provenance categories, NEKURAMA ownership direction, BABAI naming, and
  tentative Class 42 trademark posture. Its **“Questions”** lack executed
  assignments, clearance, contracts and OSS policy. Raw JSON indices **21** and
  **26** include **“IP ownership: NEKURAMA”** and the trademark/IP checkpoints.
- `docs/company/finance-tax-compliance.md` records under **“Current answer”** the
  separation of founder funding, expenses, SaaS revenue, customer settlement,
  provider charges, tax and FX, plus DPIIT/SIPP direction. Its **“Questions”**
  leave incorporation, banking, GST, accounting treatment and eligibility
  validation unresolved. Raw JSON index **21** contains the **“DPIIT / Startup
  India benefits”** checkpoint. These are retained as open questions, not legal
  or accounting conclusions.
- `docs/company/security-privacy-controls.md` records under **“Current answer”**
  company-owned accounts/secrets, least privilege, zero trust, tenant isolation,
  auditability and retention/deletion principles. Its **“Questions”** show that
  MFA, secrets management, incident response, recovery, privacy/DPA and vendor
  review are not yet durable decisions. Retain the principles and fill the
  controls from explicit evidence.

### BABAI files

- `docs/products/babai/customer-market.md` has only an initial restaurant
  customer, Hyderabad learning focus, India-wide posture and first-10 gate under
  **“Current answer”**; its **“Questions”** leave ICP, segmentation, buyer,
  alternatives, competition, market size and acquisition open. The same gate is
  stated under `docs/products/babai/validation.md`, **“Primary gate”**.
- `docs/products/babai/experience-and-channels.md` defines WhatsApp and web
  roles, **“Channel lifecycle”**, and **“Human takeover”** states. Its remaining
  questions concern journeys, onboarding, notifications and context handoff.
  These decisions should be retained while the missing operational detail is
  filled.
- `docs/products/babai/architecture.md` contains coarse-grained boundary,
  reliability, Meta/WhatsApp and ONDC decisions under **“Current answer”**,
  **“WhatsApp / Meta”** and **“ONDC posture”**. Its unanswered deployment,
  storage, AI, SLO, cost and recovery questions are intentional. Raw JSON index
  **0** explicitly says the project is still in research and implementation
  should not yet be locked.
- `docs/products/babai/business-model.md` records SaaS, separate payment flows,
  the commission-cost hypothesis, beta continuation test and indicative pricing
  under **“Current answer”** and **“Unit economics”**. The pricing figures are a
  validation hypothesis, not settled commercial truth.
- `docs/products/babai/validation.md` is not a placeholder: its **“Primary
  gate”**, **“What to validate”** and **“Kill / success signals”** sections are
  substantive. It still needs measurable thresholds, instrumentation, baselines,
  ROI and paid-conversion criteria from the pilot.

## Retained files and operational data

`data/executed_workflows/index.json` is retained conditionally because an empty
index can be a valid initial state for an operational runner. Removing or
populating it with invented records would alter operational behavior or create
false history. It should not be treated as a knowledge artifact.

The existing partial company and BABAI files are retained because they contain
durable, source-supported decisions and explicitly labeled questions. They are
not stale placeholders: replacing them with deletion would lose current truth,
while filling unanswered sections without evidence would violate the knowledge
base rule in `docs/README.md`, **“Partial decisions may contain questions and
partial answers”** and **“Never copy a giant issue into a file.”**

The navigation and governance files are also intentionally retained:
`docs/README.md` (**“Source-of-truth model”**, **“Mining method”**, **“Status”**,
**“File rules”**), `docs/company/README.md` (**“Core dimensions”**) and
`docs/products/babai/README.md` (**“Current product truth”** and **“Knowledge
dimensions”**) define how durable truth is maintained and explicitly require
unknown areas to remain questions.
