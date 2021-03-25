const { cons } = require("../../lib/list/cons");

describe("cons", function () {
  it("should return array with element at first", function () {
    expect(cons(1, [4, 5, 6, 7])).toEqual([1, 4, 5, 6, 7]);
  });
  it("should return array with provided array at first", function () {
    expect(cons([1, 2, 3], [4, 5, 6, 7])).toEqual([[1, 2, 3], 4, 5, 6, 7]);
  });
  it("should return string with element at first", function () {
    expect(cons("1", "2345")).toBe("12345");
  });
  it("should return object with element at first", function () {
    expect(cons({ one: 1 }, { two: 2, three: 3 })).toEqual({ one: 1, two: 2, three: 3 });
  });
});
