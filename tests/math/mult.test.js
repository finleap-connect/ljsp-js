const { mult } = require("../../lib/math/mult");

describe("mult", function () {
  it("should multiply a set of numbers", function () {
    expect(mult(10, 1, 2)).toBe(20);
  });
});
