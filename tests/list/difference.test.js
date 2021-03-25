const { difference } = require("../../lib/list/difference");

describe("difference", () => {
  it("should return the left set if there is no right", () => {
    expect(difference([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it("should return the items in the left that are not in right", () => {
    expect(difference([1, 2], [2, 3])).toEqual([1]);
  });
  it("should return the items in the left that are not in right side (variadic)", () => {
    expect(difference([1, 2, 3], [1], [1, 4], [3])).toEqual([2]);
  });
});
