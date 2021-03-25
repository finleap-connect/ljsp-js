const { makeArray } = require("../../lib/list/make-array");

describe("makeArray", function () {
  it("should make a non-array an array", function () {
    expect(makeArray(1)).toEqual([1]);
  });
  it("should make return the same array if given an array", function () {
    expect(makeArray([1])).toEqual([1]);
  });
});
