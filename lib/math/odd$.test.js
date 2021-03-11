const { odd$ } = require("./odd$");

describe("odd$", () => {
  it("returns true if provided an odd number", () => {
    expect(odd$(1)).toBe(true);
  });
  it("returns false if provided an even number", () => {
    expect(odd$(-2)).toBe(false);
  });
  it("returns false if provided zero", () => {
    expect(odd$(0)).toBe(false);
  });
});
