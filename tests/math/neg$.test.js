const { neg$ } = require("../../lib/math/neg$");

describe("neg$", () => {
  it("returns true if provided a negative number", () => {
    expect(neg$(-1)).toBe(true);
  });
  it("returns false if provided a positive number", () => {
    expect(neg$(1)).toBe(false);
  });
  it("returns false if provided zero", () => {
    expect(neg$(0)).toBe(false);
  });
});
