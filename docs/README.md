# NEKURAMA Knowledge Base

This directory is the durable, current knowledge base for NEKURAMA and its products.

## Source-of-truth model

- **Issues** = battles, questions, decisions, evidence, execution and history.
- **Files** = current durable truth.
- **Code/config** = implementation truth.

Knowledge files should stay focused. Split a file when a dimension becomes materially large or independently changes.

## Mining method

The authoritative source set for knowledge mining is now:

1. `nekurama.raw.chat.json` — primary structured founder export; use its chronology, message roles and metadata as the first authority
2. `nekurama.chatgpt.md` — chronological Markdown export used to corroborate and make decisions readable
3. `nekurama.babai.research.md` — consolidated BABAI field research and validation evidence
4. `nekurama/Bulb#1` — BABAI strategy/architecture decision log
5. `nekurama/Bulb#2` — NEKURAMA company battle/decision log
6. `nekurama/Bulb#3` — BABAI product execution tracker
7. Existing `docs/` knowledge files — current durable truth, to be challenged against the authoritative source set rather than treated as unquestionable history
8. `ManojVysyaraju/bulb#1` — historical decision/research source, used when required to reconstruct earlier evolution

For the BABAI product-intent pass, `nekurama.raw.chat.json` is the primary
founder discussion source. `products/babai/brd.md` records the conversation
title, message/node anchors, decision status and disposition of thin files.

### Mining rules

For each knowledge file:

1. Start with the raw founder export and field research relevant to the dimension.
2. Use the Markdown export to corroborate and make the founder discussion readable; use raw JSON line ranges when ordering, role or message structure matters.
3. Read the relevant GitHub issue history to reconstruct explicit decisions, rationale and unresolved battles.
4. Compare existing knowledge-file content against the source evidence; do not blindly preserve earlier conclusions.
5. Identify decision evolution and conflicts.
6. Treat the latest explicit, evidence-supported decision as the current candidate.
7. Challenge weak, contradictory, unsupported or prematurely generalized decisions.
8. Record confirmed decisions first.
9. Record partial decisions with open questions; do not invent answers.
10. Keep historical reasoning in issues; keep only current durable truth in knowledge files.
11. Update the relevant knowledge file only after the source review is complete.
12. Then mark the corresponding roadmap item complete in the execution tracker.

A historical `RESOLVED` label is not automatically authoritative. Later evidence or decisions can supersede it.

## Status

- `confirmed` — decision/current truth is established.
- `partial` — some answer exists; open questions remain.
- `unknown` — dimension identified but not yet researched/answered.
- `challenge-required` — an existing decision needs another battle before becoming durable truth.
- `living` — continuously maintained current truth.

## Step-by-step roadmap

### Phase 1 — Product truth

- [x] **1.1 Thesis & positioning** → `products/babai/thesis-and-positioning.md` — core thesis, promise, ICP, buyer, differentiation and positioning committed; refinements deferred
- [x] **1.2 Product definition** → `products/babai/product-definition.md` — MVP boundary and first pilot workflow committed; detailed journeys, production cut and post-pilot roadmap remain open
- [ ] **1.3 Product BRD / gap register** → `products/babai/brd.md` — **partial**; confirmed truth is separated from pilot evidence, challenge-required decisions and unknowns

### Phase 2 — Architecture / domain

- [ ] **2.1 Domain model** → `products/babai/domain-model.md` — **partial**; core aggregates, cart/order separation, catalog/menu structure, customer boundary, commercial engine boundaries and immutable transaction-result principle established; invariants, state transitions, stacking and remaining edge cases are open
- [x] **2.2 Architecture** → `products/babai/architecture.md` — **partial**; HLD/LLD capability boundaries, domain ownership, integration seams, runtime/data/reliability direction and evidence-backed open questions captured; deployment topology, physical storage, workflow/policy engines, providers, SLOs and DR remain open

### Phase 3 — Customer / experience

- [ ] **3.1 Customer & market** → `products/babai/customer-market.md`
- [ ] **3.2 Experience & channels** → `products/babai/experience-and-channels.md`

### Phase 4 — Commercial / validation

- [ ] **4.1 Business model** → `products/babai/business-model.md`
- [ ] **4.2 Validation / pilot** → `products/babai/validation.md`

### Phase 5 — Company

- [ ] **5.1 Identity & strategy** → `company/identity-and-strategy.md`
- [ ] **5.2 Founders, ownership & governance** → `company/founders-ownership-governance.md`
- [ ] **5.3 IP, brand & legal** → `company/ip-brand-legal.md`
- [ ] **5.4 Finance, tax & compliance** → `company/finance-tax-compliance.md`
- [ ] **5.5 Security, privacy & company controls** → `company/security-privacy-controls.md`
- [ ] **5.6 October–December company/control execution plan** → `company/oct-dec-execution-plan.md` — planning-only reserve, cash/economic-cost and evidence-ledger treatment; external gates remain open

### Phase 6 — Remaining dimensions

- [ ] **6.1 Operations** — create focused file when mined
- [ ] **6.2 Research & evidence** — create focused file when mined
- [ ] **6.3 Additional product dimensions** — create only when a new dimension becomes material
- [ ] **6.4 Additional company dimensions** — create only when a new dimension becomes material
- [ ] **6.5 Web publication** → `web/landing-page.md` — GitHub Pages landing-page scope, claim gates, publication constraints and static-site QA plan; implementation remains out of scope

## File rules

- Keep files focused and reasonably small.
- Partial decisions may contain questions and partial answers.
- Unknown dimensions do not need files until we reach them, unless a placeholder is useful.
- Never copy a giant issue into a file.
- Issues remain the battle/decision/execution history.
- Files contain the current durable knowledge.
- Cross-reference the relevant issue(s) rather than duplicating reasoning.
- When a conversation claim matters, cite the raw export's conversation title
  plus a message/node anchor; do not promote an assistant recommendation to a
  confirmed decision without supporting evidence.
