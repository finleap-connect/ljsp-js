import { into } from "../../lib/list/into";

describe("into", () => {
  it("should return a blank array if called with no args", () => {
    expect(into()).toEqual([]);
  });
  it("should return the arg, if one arg provided", () => {
    expect(into([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it("should combine two arrays when two args are provided", () => {
    expect(into([0], [1, 2, 3])).toEqual([0, 1, 2, 3]);
  });
  it("should transform values on combination when provided with a transform function", () => {
    /* With Transformation function */
    function sum(set) {
      return set.map((item) => item + 1);
    }
    expect(into([0], sum, [1, 2, 3])).toEqual([0, 2, 3, 4]);
  });
});
