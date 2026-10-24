import { describe, expect, it } from "vitest";
import { isEven } from "../src/index.js";

describe("isEven", () => {
  it("偶数は true を返す", () => {
    expect(isEven(2)).toBe(true);
  });

  it("奇数は false を返す", () => {
    expect(isEven(3)).toBe(false);
  });

  it("0 は true を返す", () => {
    expect(isEven(0)).toBe(true);
  });

  it("負の偶数は true を返す", () => {
    expect(isEven(-4)).toBe(true);
  });

  it("整数でない値は TypeError を投げる", () => {
    expect(() => isEven(1.5)).toThrow(TypeError);
    expect(() => isEven(Number.NaN)).toThrow(TypeError);
  });
});
