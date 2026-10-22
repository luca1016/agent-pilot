/**
 * agent-pilot: 無人ランナーの検証用の小さなライブラリ。
 * Issue で機能を 1 つずつ足していき、ランナーが「Issue → 実装 → レビュー → 人の merge」を通せるかを試す。
 */

/** 2 つの整数を足す。 */
export function add(a: number, b: number): number {
  return a + b;
}

/** 文字列を逆順にする(サロゲートペアは考慮しない)。 */
export function reverse(s: string): string {
  return [...s].reverse().join("");
}
