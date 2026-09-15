# NEKURAMA Knowledge Base

This directory is the durable, current knowledge base for NEKURAMA and its products.

## Source-of-truth model

- **Issues** = battles, questions, decisions, evidence, execution and history.
- **Files** = current durable truth.
- **Code/config** = implementation truth.

Knowledge files should stay focused. Split a file when a dimension becomes materially large or independently changes.

## Status

- `confirmed` — decision/current truth is established.
- `partial` — some answer exists; open questions remain.
- `unknown` — dimension identified but not yet researched/answered.
- `living` — continuously maintained current truth.

## References

- NEKURAMA company battle tracker: `nekurama/Bulb#2`
- BABAI strategy/architecture decision log: `nekurama/Bulb#1`
- Historical decision evidence: `ManojVysyaraju/bulb#1`

## Coverage rule

Start with the highest-leverage dimensions. Existing decisions are migrated first; partial decisions retain their unanswered questions. New dimensions are added only when needed.
