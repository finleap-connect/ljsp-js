const { takeLast } = require("../../lib/list/take-last");

describe("takeLast", function () {
  it("should take the last elements of an Array", function () {
    expect(takeLast(2, [1, 2, 3, 4])).toEqual([3, 4]);
  });
  it("should take the last elements of an Object", function () {
    expect(takeLast(2, { one: 1, two: 2, three: 3 })).toEqual({ two: 2, three: 3 });
  });
  it("should take the last elements of a Set", function () {
    expect(takeLast(2, new Set([1, 2, 3, 4]))).toEqual(new Set([3, 4]));
  });
  it("should take the last elements of a Map", function () {
    expect(
      takeLast(
        2,
        new Map([
          [1, 2],
          [3, 4],
          [5, 6]
        ])
      )
    ).toEqual(
      new Map([
        [3, 4],
        [5, 6]
      ])
    );
  });
  it("should take the last elements of a string", function () {
    expect(takeLast(2, "1234")).toBe("34");
  });
});
