const { mod } = require("../../lib/math/mod");

describe("mod", function () {
  it("should return the modulus of num and div", function () {
    expect(mod(10, 6)).toBe(4);
  });
  it("should return the modulus of num and div - 2", function () {
    expect(mod(10, 5)).toBe(0);
  });
});
