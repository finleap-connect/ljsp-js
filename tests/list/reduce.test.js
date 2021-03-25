const { reduce } = require("../../lib/list/reduce");

describe("reduce", function () {
  it("should reduce an Array", function () {
    expect(reduce((acc, cur) => acc + cur, 0, [1, 2, 3, 4])).toBe(10);
  });
});
