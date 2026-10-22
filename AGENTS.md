# AGENTS.md

(Codex 用。内容は CLAUDE.md と同じ)

This is a pilot repository for the unattended runner (nas-platform/runner): a tiny TypeScript library (`src/index.ts`) that grows one tested function at a time.

## Conventions

- pnpm; tests with vitest (`pnpm test`); types with `pnpm typecheck`; lint/format with Biome (`pnpm check`).
- Export functions from `src/index.ts`; tests live in `test/<name>.test.ts`. One-line Japanese JSDoc on public functions.
- Do not add dependencies unless the issue says so.
- Commit messages in Japanese: what and why.

## For agents

- Done means every acceptance criterion in the issue is met — nothing more.
- If ambiguous, ask and stop; do not guess.
- Never touch `main`; a human merges the PR.

Respond in Japanese.
