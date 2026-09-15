# NEKURAMA Knowledge Base

This directory is the durable, current knowledge base for NEKURAMA and its products.

## Source-of-truth model

- **Issues** = battles, questions, decisions, evidence, execution and history.
- **Files** = current durable truth.
- **Code/config** = implementation truth.

Knowledge files should stay focused. Split a file when a dimension becomes materially large or independently changes.

## Mining method

For each knowledge file:

1. Mine all four issue sources chronologically:
   - `ManojVysyaraju/bulb#1` — historical research/decision history
   - `nekurama/Bulb#1` — BABAI strategy/architecture decisions
   - `nekurama/Bulb#2` — NEKURAMA company battles/decisions
   - `nekurama/Bulb#3` — BABAI execution/validation
2. Identify decision evolution and conflicting decisions.
3. Treat the latest explicit decision as the current candidate.
4. Challenge it if it is weak, contradictory, unsupported or amateurish.
5. Record confirmed decisions first.
6. Record partial decisions with open questions; do not invent answers.
7. Discuss pending/challenge-required items only after known decisions have been captured.
8. Update the relevant file, then mark the roadmap item complete.

A historical `RESOLVED` label is not automatically authoritative. Later evidence or decisions can supersede it.

## Status

- `confirmed` — decision/current truth is established.
- `partial` — some answer exists; open questions remain.
- `unknown` — dimension identified but not yet researched/answered.
- `challenge-required` — an existing decision needs another battle before becoming durable truth.
- `living` — continuously maintained current truth.

## Step-by-step roadmap

### Phase 1 — Product truth

- [x] **1.1 Thesis & positioning** → `products/babai/thesis-and-positioning.md` — known decisions mined; pending items remain for discussion
- [ ] **1.2 Product definition** → `products/babai/product-definition.md`

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
