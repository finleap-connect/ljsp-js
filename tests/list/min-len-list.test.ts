import { minLenList } from "../../lib/list/min-len-list";

describe("minLenList", function () {
  it("should return the list in a list of lists that has the shortest length", function () {
    expect(minLenList([1, 2, 3, 4], ["a", "b", "c"], [1, 2])).toEqual([1, 2]);
  });
});
