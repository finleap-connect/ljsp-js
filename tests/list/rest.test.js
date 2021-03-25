const { rest } = require("../../lib/list/rest");

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
  it("should return the items after the first when called on an object", () => {
    expect(rest({ a: 1, b: 2, c: 3, d: 4 })).toEqual({ b: 2, c: 3, d: 4 });
  });
  it("should return the items after the first when called on a string", () => {
    expect(rest("1234")).toBe("234");
  });
  it("should return the items after the first when called on a Set", () => {
    expect(rest(new Set([1, 2, 3, 4]))).toEqual(new Set([2, 3, 4]));
  });
  it("should return the items after the first when called on a Map", () => {
    expect(
      rest(
        new Map([
          [1, 2],
          [3, 4],
          [4, 5]
        ])
      )
    ).toEqual(
      new Map([
        [3, 4],
        [4, 5]
      ])
    );
  });
});
