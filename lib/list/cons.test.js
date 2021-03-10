const { cons } = require("./cons");

describe("cons", function () {
  it("should return array with element at first", function () {
    expect(cons(1, [4, 5, 6, 7])).toEqual([1, 4, 5, 6, 7]);
  });
  it("should return array with provided array at first", function () {
    expect(cons([1, 2, 3], [4, 5, 6, 7])).toEqual([[1, 2, 3], 4, 5, 6, 7]);
  });
});
