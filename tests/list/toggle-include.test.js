const { toggleInclude } = require("../../lib/list/toggle-include");

describe("toggleInclude", () => {
  it("should add a single value not in an Array", () => {
    expect(toggleInclude([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
  });
  it("should add values not in an Array", () => {
    expect(toggleInclude([1, 2, 3], 4, 5)).toEqual([1, 2, 3, 4, 5]);
  });
  it("should add values to a blank Array", () => {
    expect(toggleInclude([], 4, 5)).toEqual([4, 5]);
  });
  it("should remove a single values that exists in an Array", () => {
    expect(toggleInclude([1, 2, 3], 1)).toEqual([2, 3]);
  });
  it("should remove values that exist in an Array", () => {
    expect(toggleInclude([1, 2, 3], 1, 2)).toEqual([3]);
  });
  it("should add and remove values that exist/don't exist in an Array", () => {
    expect(toggleInclude([1, 2, 3, 4], 3, 5)).toEqual([1, 2, 4, 5]);
  });
});
