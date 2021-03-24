const { last } = require("./last");

describe("last", function () {
  it("should return the last item in a string", function () {
    expect(last("1234")).toBe("4");
  });
  it("should return the last item in an Array", function () {
    expect(last([1, 2, 3, 4])).toBe(4);
  });
  it("should return the last item in a Set", function () {
    expect(last(new Set([1, 2, 3, 4]))).toBe(4);
  });
  it("should return the last item in a Map", function () {
    expect(
      last(
        new Map([
          [1, 2],
          [3, 4]
        ])
      )
    ).toEqual([3, 4]);
  });
  it("should return the last item in an Object", function () {
    expect(last({ one: 1, two: 2, three: 3 })).toEqual(["three", 3]);
  });
});
