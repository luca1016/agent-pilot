# agent-pilot

無人ランナー(`nas-platform/runner`)の検証用リポ。本番案件を巻き込まずに
「Issue → Claude が実装 → Codex がレビュー → 修正 → 最終検証 → 人が merge」を通す。

- `src/index.ts` — 小さな関数群。Issue で 1 つずつ足す
- `test/` — vitest
- CI: PR に `test` check(型・lint・テスト)。ブランチ保護で必須

検証シナリオ(設計書 Phase 3): 成功 / Codex 指摘あり / 強制失敗(timeout)の 3 周。
