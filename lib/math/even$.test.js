const { even$ } = require("./even$");

describe("even$", () => {
  it("returns true if a number is even", () => {
    expect(even$(6)).toBe(true);
  });
  it("returns false if a number is NOT even", () => {
    expect(even$(5)).toBe(false);
  });
  it("throws if given a non-number", () => {
    expect(() => even$("4")).toThrow();
  });
});
