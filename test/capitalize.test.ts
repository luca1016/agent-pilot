import { describe, expect, it } from "vitest";
import { capitalize } from "../src/index.js";

describe("capitalize", () => {
  it("先頭 1 文字を大文字にする", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("空文字は空文字を返す", () => {
    expect(capitalize("")).toBe("");
  });

  it("すでに大文字ならそのまま返す", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("2 文字目以降は変更しない", () => {
    expect(capitalize("hELLO")).toBe("HELLO");
  });
});
