const { rest } = require("./rest");

describe("rest", () => {
  it("should return the items after the first in a list", () => {
    expect(rest([1, 2, 3])).toEqual([2, 3]);
  });
  it("should return an empty Array if provided an Array with one element", () => {
    expect(rest([1])).toEqual([]);
  });
  it("should return an empty Array if provided an empty Array", () => {
    expect(rest([])).toEqual([]);
  });
  it("should return an array of k-v pairs when called on an object", () => {
    expect(rest({ a: 1, b: 2, c: 3, d: 4 })).toEqual([
      ["b", 2],
      ["c", 3],
      ["d", 4]
    ]);
  });
});
