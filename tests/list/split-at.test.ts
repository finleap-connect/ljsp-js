import { splitAt } from "../../lib/list/split-at";

describe("splitAt", function () {
  it("should split an Array at a given point", function () {
    expect(splitAt(2, [1, 2, 3, 4, 5])).toEqual([
      [1, 2],
      [3, 4, 5]
    ]);
  });
  it("should split an Array into set and null if the split exceeds the Array bounds", function () {
    expect(splitAt(3, [1, 2])).toEqual([[1, 2], []]);
    expect(splitAt(3, [])).toEqual([[], []]);
  });
});
