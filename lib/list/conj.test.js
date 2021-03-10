const { conj } = require("./conj");

describe("conj", function () {
  it("should return new conj array", function () {
    expect(conj([1, 2, 3, 4], [5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  it("should return new conj object", function () {
    expect(conj({ a: "b" }, { c: "d" })).toEqual({ a: "b", c: "d" });
  });
});
