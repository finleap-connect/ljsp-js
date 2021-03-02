const { dec } = require("./dec");

describe("dec", () => {
  it("decrements a number", () => {
    expect(dec(4)).toBe(3);
  });
  it("throws if given a non-number", () => {
    expect(() => dec("4")).toThrow();
  });
});
