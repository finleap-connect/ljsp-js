import { interleave } from "../../lib/list/interleave";

describe("interleave", function () {
  it("should interleave values in an Array", function () {
    expect(interleave([1, 2, 3, 4], ["a", "b", "c"])).toEqual([1, "a", 2, "b", 3, "c"]);
  });
  it("should stop at the shortest set in the Array", function () {
    expect(interleave([1, 2, 3, 4], ["a", "b", "c", "d"], ["nine", "eight"])).toEqual([
      1,
      "a",
      "nine",
      2,
      "b",
      "eight"
    ]);
  });
  it("should return undefined if passed no values", function () {
    expect(interleave()).toEqual(undefined);
  });
  it("should return the same array if passed a non-multi-dimensional array", function () {
    expect(interleave([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
