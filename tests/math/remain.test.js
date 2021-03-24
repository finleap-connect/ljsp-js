const { remain } = require("../../lib/math/remain");

describe("remain", function () {
  it("should return the remainder of a division operation", function () {
    expect(remain(2, 2)).toBe(0);
  });
  it("should return the remainder of a division operation - 2", function () {
    expect(remain(2, 9)).toBe(2);
  });
});
