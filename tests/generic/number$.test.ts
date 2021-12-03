import { number$ } from "../../lib/generic/number$";

describe("isBoolean", () => {
  it("returns true if value is Bool", () => {
    expect(number$(1)).toBe(true);
  });
  it("returns false if value is NOT Bool", () => {
    expect(number$("23")).toBe(false);
  });
});
