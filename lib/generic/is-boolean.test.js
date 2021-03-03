const { isBoolean } = require("./is-boolean");

describe("isBoolean", () => {
  it("returns true if value is Bool", () => {
    expect(isBoolean(false)).toBe(true);
  });
  it("returns false if value is NOT Bool", () => {
    expect(isBoolean(1)).toBe(false);
  });
});
