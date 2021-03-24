const { lte$ } = require("../../lib/math/lte$");

describe("lte$", () => {
  it("returns true if nums are in monotonically increasing order", () => {
    expect(lte$(1, 2, 3, 4)).toBe(true);
  });
  it("returns true if nums are in monotonically increasing order, or adjacent values are equal", () => {
    expect(lte$(1, 2, 2, 3, 4)).toBe(true);
  });
  it("returns false if nums are NOT in monotonically increasing order", () => {
    expect(lte$(1, 2, 1, 3)).toBe(false);
  });
  it("should return true if only one number is provided", () => {
    expect(lte$(1)).toBe(true);
  });
});
