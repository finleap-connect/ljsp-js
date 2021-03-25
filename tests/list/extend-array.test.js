const { extendArray } = require("../../lib/list/extend-array");
const { identity } = require("../../lib/function");

describe("extendArray", function () {
  it("extends array with provided value", function () {
    expect(extendArray([1, 2, 3], 5, "x")).toEqual([1, 2, 3, "x", "x"]);
  });
  it("extends array with provided function", function () {
    expect(extendArray([1, 2, 3], 6, (v) => identity((v + 1) * 2))).toEqual([1, 2, 3, 8, 10, 12]);
  });
});
