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
| `docs/README.md` | 5,253 bytes; living navigation/method | **Retain** as the knowledge-base rulebook. |
| `docs/knowledge-inventory.md` | 8,310 bytes before this update; living inventory | **Maintain** from repeatable audits, not from assumptions. |
| `docs/company/README.md` | 4,344 bytes; thin index/partial handoff | **Retain and maintain** status vocabulary, sources and handoff rules. |
| `docs/company/e-setup-checklist.md` | 10,464 bytes; living checklist/partial execution | **Retain** as the cross-dimension execution list; unchecked work is not completed work. |
| `docs/company/identity-and-strategy.md` | 3,618 bytes; partial | **Retain and fill** legal identity, mission, portfolio principles and objectives; keep incorporation unknown until evidenced. |
| `docs/company/founders-ownership-governance.md` | 4,072 bytes; partial | **Retain and fill** governance mechanics; keep agreements, issuance and ESOP terms open. |
| `docs/company/ip-brand-legal.md` | 5,092 bytes; partial | **Retain and fill** provenance, assignments, clearance, contracts and OSS/AI controls. |
| `docs/company/finance-tax-compliance.md` | 5,255 bytes; partial | **Retain and fill** accounting, tax and execution evidence; eligibility remains professional-validation-required or unknown. |
| `docs/company/security-privacy-controls.md` | 4,574 bytes; partial | **Retain and fill** the control baseline; implementation remains unknown until evidence is collected. |
| `docs/products/babai/README.md` | 843 bytes; thin index | **Retain** as product navigation, not as a decision record. |
| `docs/products/babai/thesis-and-positioning.md` | 9,293 bytes; partial | **Retain** current positioning while keeping validation boundaries visible. |
| `docs/products/babai/product-definition.md` | 8,254 bytes; partial | **Retain** MVP boundaries and unresolved product decisions. |
| `docs/products/babai/domain-model.md` | 15,130 bytes; partial | **Retain and challenge** open invariants and state-transition questions. |
| `docs/products/babai/architecture.md` | 8,988 bytes; partial | **Retain** guidance marked as non-final; do not turn research-stage uncertainty into implementation fact. |
| `docs/products/babai/customer-market.md` | 3,028 bytes; thin/partial | **Retain and fill** ICP, segmentation, competition and acquisition evidence. |
| `docs/products/babai/experience-and-channels.md` | 2,674 bytes; thin/partial | **Retain and fill** journeys, onboarding, notifications and handoff details. |
| `docs/products/babai/business-model.md` | 3,727 bytes; partial | **Retain and fill** pilot evidence; pricing and unit economics remain hypotheses. |
| `docs/products/babai/validation.md` | 5,809 bytes; substantive/partial | **Retain and fill** measurable thresholds, instrumentation, ROI and conversion criteria. |
| `docs/products/babai/web-landing-page.md` | 10,966 bytes; untracked/unknown | **Do not treat as durable truth** until reviewed against the founder source and intentionally added. |

### Classification rules

- **thin** — a useful index or small file with limited decision coverage; not a zero-byte placeholder.
- **partial** — some current, source-backed truth exists while execution details or questions remain.
- **stale** — a file conflicts with a later source decision; none is confirmed in this audit.
- **unknown** — the file or dimension has not been reconciled sufficiently to use as current truth.
- **living/substantive** — maintained or meaningful content; it may still contain partial decisions.

### Zero-byte and staleness audit

On 2026-09-20, the audit found **zero zero-byte files in the repository
worktree**, including `docs/`. The operational
`data/executed_workflows/index.json` is 2 bytes, so it is not a zero-byte file
and is not a knowledge artifact. No durable `docs/` file was demonstrably stale
after comparison with the founder exports and current issue decision
references. The main condition is partial coverage, not deletion or invented
completion.

## Evidence and rationale

### Company files

- `docs/company/founders-ownership-governance.md` has **“Current answer”** and
  **“Questions”**. It records Manoj Vysyaraju and Vinay, intended ownership of
  Manoj 55% / Vinay 45%, and separation of equity, compensation and founder
  funding. Its unanswered checklist covers shareholder terms, reserved matters,
  board structure, vesting/leavers, deadlock, funding documentation and ESOP
  policy. Raw history `bbb21145-0b94-4994-987b-69ab82b6ec35` records the earlier
  60:40/future-equity question, while the later issue checkpoint supplies the
  current 55:45 intended split.
- `docs/company/identity-and-strategy.md` records under **“Current answer”** and
  **“Decision notes”** that NEKURAMA is the parent operating company, BABAI is the
  first product/brand, bootstrap-first is the current direction, and BABAI is not
  currently a separate subsidiary. Its **“Questions”** remain open. Raw messages
  `bbb2179b-ab78-4f20-98ef-1bf49a0702f7` and
  `bbb214cb-4959-4878-b6a9-2358ddbf2b07` record the founder's product/entity/IP
  framing; later issue decisions provide the current operating direction.
- `docs/company/ip-brand-legal.md` records under **“Current answer”** the four
  IP provenance categories, NEKURAMA ownership direction, BABAI naming, and
  tentative Class 42 trademark posture. Its **“Questions”** lack executed
  assignments, clearance, contracts and OSS policy. Raw messages
  `bbb214cb-4959-4878-b6a9-2358ddbf2b07` and
  `bbb21ece-7bb6-4a1f-9798-9ebd4ed6bcbd` record the founder's starting boundary
  and request for legal brand clearance.
- `docs/company/finance-tax-compliance.md` records under **“Current answer”** the
  separation of founder funding, expenses, SaaS revenue, customer settlement,
  provider charges, tax and FX, plus DPIIT/SIPP direction. Its **“Questions”**
  leave incorporation, banking, GST, accounting treatment and eligibility
  validation unresolved. Raw messages `bbb21621-2657-4cf5-a886-3d3079042f08`
  and `bbb21e3d-91a3-48de-90a7-986c6beb716b` are questions about rebates, DPIIT
  and ONDC. These are retained as open questions, not legal or accounting
  conclusions.
- `docs/company/security-privacy-controls.md` records under **“Current answer”**
  company-owned accounts/secrets, least privilege, zero trust, tenant isolation,
  auditability and retention/deletion principles. Its **“Questions”** show that
  MFA, secrets management, incident response, recovery, privacy/DPA and vendor
  review are not yet durable decisions. Raw messages
  `bbb213b8-d58c-403e-b858-bdaa1ac750b8` and
  `bbb2129e-e9fa-43bf-adca-b0bc7a956664` support the zero-trust,
  data-classification and tenant-boundary principles. Retain the principles and
  fill the controls from explicit evidence.

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
  storage, AI, SLO, cost and recovery questions are intentional. The founder
  export's opening research-stage decision explicitly says implementation
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
