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

/** h → m → s の順の期間文字列("1h30m" など)をミリ秒に変換する。 */
export function parseDuration(s: string): number {
  // 各単位は高々 1 回・この順序のみ。全部省略(空文字)は下で弾く。
  const m = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/.exec(s);
  if (m === null || m[0] === "") {
    throw new TypeError(
      `parseDuration: 不正な期間文字列です: ${JSON.stringify(s)}`,
    );
  }
  const [, h, min, sec] = m;
  return (
    (h === undefined ? 0 : Number(h) * 3_600_000) +
    (min === undefined ? 0 : Number(min) * 60_000) +
    (sec === undefined ? 0 : Number(sec) * 1_000)
  );
}

/** n を [min, max] の範囲に収めて返す(min > max なら RangeError)。 */
export function clamp(n: number, min: number, max: number): number {
  if (min > max) {
    throw new RangeError(`min (${min}) must not be greater than max (${max})`);
  }
  return Math.min(Math.max(n, min), max);
}
