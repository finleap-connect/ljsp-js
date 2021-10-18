const { interweave } = require("../../lib/list/interweave");

describe("interweave", function () {
  it("should interweave values in an Array", function () {
    expect(interweave([1, 2, 3, 4], ["a", "b", "c"])).toEqual([1, "a", 2, "b", 3, "c", 4]);
  });
  it("should NOT stop at the shortest set in the Array, but ignore undefined values in shorter arrays", function () {
    expect(interweave([1, 2, 3, 4], ["a", "b", "c", "d"], ["nine", "eight"]))
      // prettier-ignore
      .toEqual([1, "a", "nine", 2, "b", "eight", 3, "c", 4, "d"]);
  });
  it("should return undefined if passed no values", function () {
    expect(interweave()).toEqual(undefined);
  });
  it("should return the same array if passed a non-multi-dimensional array", function () {
    expect(interweave([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
