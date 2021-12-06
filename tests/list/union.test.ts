import { union } from "../../lib/list/union";

describe("union", function () {
  it("should return a set that is the union of the input sets", function () {
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
  });
});
