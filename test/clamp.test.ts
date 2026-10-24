import { describe, expect, it } from "vitest";
import { clamp } from "../src/index.js";

describe("clamp", () => {
  it("範囲内の値はそのまま返す", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it("min 未満は min に収める", () => {
    expect(clamp(-1, 0, 10)).toBe(0);
  });

  it("max 超過は max に収める", () => {
    expect(clamp(11, 0, 10)).toBe(10);
  });

  it("min > max のときは RangeError を投げる", () => {
    expect(() => clamp(5, 10, 0)).toThrow(RangeError);
  });
});
