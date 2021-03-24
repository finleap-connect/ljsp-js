const { boolean$ } = require("../../lib/generic/boolean$");

describe("isBoolean", () => {
  it("returns true if value is Bool", () => {
    expect(boolean$(false)).toBe(true);
  });
  it("returns false if value is NOT Bool", () => {
    expect(boolean$(1)).toBe(false);
  });
});
