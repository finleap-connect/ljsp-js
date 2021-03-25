const { next } = require("../../lib/list/next");

describe("next", () => {
  it("should return the items after the first in a list", () => {
    expect(next([1, 2, 3])).toEqual([2, 3]);
  });
  it("should return null if provided an Array with one element", () => {
    expect(next([1])).toEqual(undefined);
  });
  it("should return null if provided an empty Array", () => {
    expect(next([])).toEqual(undefined);
  });
  it("should return an array of k-v pairs when called on an object", () => {
    expect(next({ a: 1, b: 2, c: 3, d: 4 })).toEqual([
      ["b", 2],
      ["c", 3],
      ["d", 4]
    ]);
  });
});
