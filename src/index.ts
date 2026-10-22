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

/** n を [min, max] の範囲に収めて返す(min > max なら RangeError)。 */
export function clamp(n: number, min: number, max: number): number {
  if (min > max) {
    throw new RangeError(`min (${min}) must not be greater than max (${max})`);
  }
  return Math.min(Math.max(n, min), max);
}
