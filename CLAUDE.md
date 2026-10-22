# CLAUDE.md

無人ランナー(nas-platform/runner)の検証用リポ。小さな TypeScript ライブラリ(`src/index.ts`)にテスト付きで関数を足していく。

## 規約

- パッケージ管理は pnpm。テストは vitest(`pnpm test`)。型は `pnpm typecheck`、lint/format は Biome(`pnpm check`)。
- 関数は `src/index.ts` に export し、テストは `test/<name>.test.ts`。公開関数には 1 行の JSDoc(日本語)。
- 依存は増やさない(Issue に明記がある場合のみ)。
- コミットメッセージは日本語で「何を・なぜ」。

## ランナーへの注意

- Issue の受け入れ条件がすべて満たされたら終わり。それ以上のことはしない。
- 曖昧なら質問して止まる(推測で進めない)。
- `main` には触らない。PR は人が merge する。

## 応答

日本語。
