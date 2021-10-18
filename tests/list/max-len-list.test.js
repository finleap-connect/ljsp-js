const { maxLenList } = require("../../lib/list/max-len-list");

describe("maxLenList", function () {
  it("should return the list in a list of lists that has the longest length", function () {
    expect(maxLenList([1, 2, 3, 4], ["a", "b", "c"], [1, 2])).toEqual([1, 2, 3, 4]);
  });
});
