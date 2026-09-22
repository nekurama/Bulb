---
status: proposed-review-packet
owner: BABAI SDLC
last-reviewed: 2026-09-22
---

# BABAI SDLC Standard for Human and Bot Coders

This is the minimum engineering standard for changes to BABAI. It applies to
human contributors, coding agents, reviewers and overnight subagents.

## 1. Non-negotiable rules

1. Preserve authoritative domain ownership; never let UI, AI or provider
   callbacks mutate another module's state directly.
2. No silent success, broad catch, invalid-input fallback or hidden downgrade.
3. Every state-changing path has authorization, tenant/branch scope,
   idempotency, audit and a deterministic transition check.
4. Payment, order and fulfillment remain separate state machines.
5. AI proposes; deterministic application code decides.
6. External provider effects are adapter calls behind a port with retries,
   reconciliation and a safe failure state.
7. Customer/order/payment data must be minimised, classified and redacted.
8. Tests must verify the requirement itself, not a proxy.

## 2. Work intake

Every task starts with:

```text
goal -> affected surfaces -> source evidence -> acceptance criteria
     -> risks/open decisions -> implementation plan -> validation plan
```

The task record must identify whether the change affects:

- domain state or event contracts;
- provider/payment/WhatsApp behavior;
- pricing/entitlements;
- privacy/security/legal controls;
- customer or restaurant UX;
- runtime cost/capacity;
- deployment or migration.

## 3. Branch and commit standard

- Use a task branch such as `feat/<scope>` or `fix/<scope>`.
- Never work directly on `main` for feature changes.
- Commit before deployment.
- One commit should represent one reviewable decision where practical.
- Commit messages state the behavior change and include the required Copilot
  co-author trailer when Copilot authored the change.
- Do not commit secrets, credentials, customer data, generated local state or
  unreviewed candidate brand assets.
- Preserve dirty/unrelated worktree state; never reset or discard it silently.

## 4. Bot coding contract

An agent must provide:

1. files read and source evidence;
2. assumptions and unresolved decisions;
3. changed files and why;
4. tests/checks run and results;
5. known limitations and rollback path.

Agents may not:

- invent provider approval, legal clearance, price validation or production
  capability;
- change a contract/event/schema without updating consumers and tests;
- broaden scope because a tool or model suggested it;
- use `as any`/unsafe casts to bypass type safety;
- hide failures behind fallback content;
- delete or rewrite unrelated work;
- claim deployment without live verification.

## 5. Review gates

| Change | Required review |
|---|---|
| Domain/event/state transition | Architecture + QA |
| Payment/refund/settlement | Architecture + finance/legal gate |
| WhatsApp/provider/consent | Product + security/privacy + provider gate |
| AI prompt/model/tool policy | AI architecture + security/privacy + eval evidence |
| Pro UI command | UX/accessibility + domain authorization + QA |
| Pricing/entitlements | Product + economics + finance/legal gate |
| Schema/migration | Architecture + rollback/restore test |
| Deployment/workflow | DevOps/QA + live smoke |

## 6. Validation ladder

```text
format/lint/type/syntax
  -> unit/domain transition tests
  -> contract/event/schema tests
  -> provider adapter fakes and idempotency tests
  -> accessibility/responsive/browser tests
  -> no-network/privacy boundary tests
  -> migration/restore/reconciliation tests
  -> pilot smoke and live deployment verification
```

Any skipped layer must be recorded with reason and follow-up owner.

## 7. Definition of done

A change is done only when:

- acceptance criteria are demonstrated;
- error and retry paths are explicit;
- security/privacy boundary is preserved;
- docs and code contracts agree;
- tests cover normal, duplicate, stale, unauthorized and provider-failure
  cases;
- observability/audit fields exist for production paths;
- rollback or feature-gate behavior is known;
- branch diff is reviewed and unrelated files remain untouched.
