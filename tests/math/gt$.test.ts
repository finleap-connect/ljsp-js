import { gt$ } from "../../lib/math/gt$";

describe("gt$", () => {
  it("returns true if nums are in monotonically decreasing order", () => {
    expect(gt$(4, 3, 2, 1)).toBe(true);
  });
  it("returns false if nums are NOT in monotonically decreasing order", () => {
    expect(gt$(1, 2, 1, 3)).toBe(false);
  });
  it("should return true if only one number is provided", () => {
    expect(gt$(1)).toBe(true);
  });
});
