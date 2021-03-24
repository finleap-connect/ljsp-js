const { sub } = require("../../lib/math/sub");

describe("sub", function () {
  it("should negate a number if given one arg", function () {
    expect(sub(7)).toBe(-7);
  });
  it("should subtract ys from x if provided multiple args", function () {
    expect(sub(100, 10, 20, 30)).toBe(40);
  });
});
