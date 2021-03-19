const { div } = require("./div");

describe("div", () => {
  it("divides a set of numbers", () => {
    expect(div(6, 3, 2)).toBe(1);
  });
  it("no denominator returns 1/numerator", () => {
    expect(div(4)).toBe(0.25);
  });
});
