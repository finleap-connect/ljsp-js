const { float$ } = require("./float$");

describe("float$", () => {
  it("returns true if a number is a float", () => {
    expect(float$(6.5)).toBe(true);
  });
  it("returns false if a number is NOT a float", () => {
    expect(float$(5)).toBe(false);
  });
});
