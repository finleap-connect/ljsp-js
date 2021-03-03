const { isNumber } = require("./is-number");

describe("isBoolean", () => {
  it("returns true if value is Bool", () => {
    expect(isNumber(1)).toBe(true);
  });
  it("returns false if value is NOT Bool", () => {
    expect(isNumber("23")).toBe(false);
  });
});
