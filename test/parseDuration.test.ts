import { describe, expect, it } from "vitest";
import { parseDuration } from "../src/index.js";

describe("parseDuration 正常系", () => {
  it("複数の単位を組み合わせられる", () => {
    expect(parseDuration("1h30m")).toBe(5_400_000);
    expect(parseDuration("1h2m3s")).toBe(3_723_000);
  });

  it("単一の単位でもよい", () => {
    expect(parseDuration("45s")).toBe(45_000);
    expect(parseDuration("2h")).toBe(7_200_000);
    expect(parseDuration("90m")).toBe(5_400_000);
  });

  it("0 と複数桁を扱える", () => {
    expect(parseDuration("0s")).toBe(0);
    expect(parseDuration("0h0m0s")).toBe(0);
    expect(parseDuration("100h")).toBe(360_000_000);
  });

  it("h と s のみなど、間の単位を省略できる", () => {
    expect(parseDuration("1h3s")).toBe(3_603_000);
    expect(parseDuration("2m30s")).toBe(150_000);
  });
});

describe("parseDuration 異常系", () => {
  it("空文字は TypeError", () => {
    expect(() => parseDuration("")).toThrow(TypeError);
  });

  it("数値や単位になっていない文字列は TypeError", () => {
    for (const s of ["abc", "1x", "m1", "h", "10", "1h30", "1,5h"]) {
      expect(() => parseDuration(s), s).toThrow(TypeError);
    }
  });

  it("負数・符号付きは TypeError", () => {
    for (const s of ["-1h", "-45s", "1h-30m", "+1h"]) {
      expect(() => parseDuration(s), s).toThrow(TypeError);
    }
  });

  it("同じ単位の重複は TypeError", () => {
    for (const s of ["1h1h", "1m2m", "1s1s", "1h30m30m"]) {
      expect(() => parseDuration(s), s).toThrow(TypeError);
    }
  });

  it("h → m → s 以外の順序は TypeError", () => {
    for (const s of ["30m1h", "45s1m", "3s2m1h"]) {
      expect(() => parseDuration(s), s).toThrow(TypeError);
    }
  });

  it("小数・空白・大文字は TypeError", () => {
    for (const s of ["1.5h", "1h 30m", " 1h", "1h ", "1H30M", "1H"]) {
      expect(() => parseDuration(s), s).toThrow(TypeError);
    }
  });
});
