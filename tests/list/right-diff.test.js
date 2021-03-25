const { rightDiff } = require("../../lib/list/right-diff");

describe("rightDiff", function () {
  it("should return the right diff between two arrays", function () {
    const left = [1, 2, 3, 4];
    const right = [1, 2, 3, 4, 5, 6, 7, 8];

    const result = rightDiff(left, right);
    expect(result).toEqual([5, 6, 7, 8]);
  });
});
