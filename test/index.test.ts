import { describe, expect, it } from "vitest";
import { add, reverse } from "../src/index.js";

describe("add", () => {
  it("足し算", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
  });
});

describe("reverse", () => {
  it("逆順", () => {
    expect(reverse("abc")).toBe("cba");
    expect(reverse("")).toBe("");
  });
});
