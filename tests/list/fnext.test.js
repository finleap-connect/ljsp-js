const { fnext } = require("../../lib/list/fnext");

describe("fnext", () => {
  it("should return the first item of the next set", () => {
    expect(
      fnext([
        [1, 2, 3],
        [2, 3, 4],
        [5, 6, 7]
      ])
    ).toEqual([2, 3, 4]);
  });
  it("should return undefined for a set with one entry", () => {
    expect(fnext([1])).toEqual(undefined);
  });
  it("should return undefined for an empty set", () => {
    expect(fnext([])).toEqual(undefined);
  });
  it("should return a k-v pair for an object", () => {
    expect(fnext({ a: 1, b: 2, c: 3 })).toEqual(["b", 2]);
  });
});
