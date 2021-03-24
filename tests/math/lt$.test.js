const { lt$ } = require("../../lib/math/lt$");

describe("lt$", () => {
  it("returns true if nums are in monotonically increasing order", () => {
    expect(lt$(1, 2, 3, 4)).toBe(true);
  });
  it("returns false if nums are NOT in monotonically increasing order", () => {
    expect(lt$(1, 2, 1, 3)).toBe(false);
  });
  it("should return true if only one number is provided", () => {
    expect(lt$(1)).toBe(true);
  });
});
