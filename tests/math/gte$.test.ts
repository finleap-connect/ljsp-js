import { gte$ } from "../../lib/math/gte$";

describe("gte$", () => {
  it("returns true if nums are in monotonically decreasing order", () => {
    expect(gte$(4, 3, 2, 1)).toBe(true);
  });
  it("returns true if nums are in monotonically decreasing order, or adjacent values are equal", () => {
    expect(gte$(4, 3, 3, 2, 1)).toBe(true);
  });
  it("returns false if nums are NOT in monotonically decreasing order", () => {
    expect(gte$(1, 2, 1, 3)).toBe(false);
  });
  it("should return true if only one number is provided", () => {
    expect(gte$(1)).toBe(true);
  });
});
