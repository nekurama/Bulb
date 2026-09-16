# NEKURAMA Knowledge Base

This directory is the durable, current knowledge base for NEKURAMA and its products.

## Source-of-truth model

- **Issues** = battles, questions, decisions, evidence, execution and history.
- **Files** = current durable truth.
- **Code/config** = implementation truth.

Knowledge files should stay focused. Split a file when a dimension becomes materially large or independently changes.

## Mining method

For each knowledge file:
1. Mine all four issue sources chronologically: `ManojVysyaraju/bulb#1`, `nekurama/Bulb#1`, `nekurama/Bulb#2`, `nekurama/Bulb#3`.
2. Include relevant exported research/conversation sources such as `nekurama.md`, `nekurama.mht` and the final `nekurama.chatgpt.md` / raw export where available.
3. Identify decision evolution and conflicts.
4. Treat the latest explicit decision as the current candidate.
5. Challenge weak, contradictory or unsupported decisions.
6. Record confirmed decisions first.
7. Record partial decisions with open questions; do not invent answers.
8. Discuss pending items only after known decisions are captured.
9. Update the relevant file, then mark the roadmap item complete.

A historical `RESOLVED` label is not automatically authoritative. Later evidence or decisions can supersede it.

## Status

- `confirmed` — decision/current truth is established.
- `partial` — some answer exists; open questions remain.
- `unknown` — dimension identified but not yet researched/answered.
- `challenge-required` — an existing decision needs another battle.
- `living` — continuously maintained current truth.

## Step-by-step roadmap

### Phase 1 — Product truth

- [x] **1.1 Thesis & positioning** → `products/babai/thesis-and-positioning.md` — core thesis, promise, ICP, buyer, differentiation and positioning committed; refinements deferred
- [x] **1.2 Product definition** → `products/babai/product-definition.md` — MVP boundary and first pilot workflow committed; detailed journeys, production cut and post-pilot roadmap remain open

### Phase 2 — Architecture / domain

- [ ] **2.1 Domain model** → `products/babai/domain-model.md`
- [ ] **2.2 Architecture** → `products/babai/architecture.md`

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

### Phase 6 — Remaining dimensions

- [ ] **6.1 Operations** — create focused file when mined
- [ ] **6.2 Research & evidence** — create focused file when mined
- [ ] **6.3 Additional product dimensions** — create only when a new dimension becomes material
- [ ] **6.4 Additional company dimensions** — create only when a new dimension becomes material

## File rules

- Keep files focused and reasonably small.
- Partial decisions may contain questions and partial answers.
- Unknown dimensions do not need files until we reach them, unless a placeholder is useful.
- Never copy a giant issue into a file.
- Issues remain the battle/decision/execution history.
- Files contain the current durable knowledge.
- Cross-reference the relevant issue(s) rather than duplicating reasoning.
