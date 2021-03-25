const { subset$ } = require("../../lib/list/subset$");

describe("subset$", function () {
  it("should return true if Array a is a subset of Array b", function () {
    expect(subset$([1, 2, 3, 4], [1, 2, 3])).toBe(true);
  });
  it("should return false if Array a is NOT a subste of Array b", function () {
    expect(subset$([1, 2, 3, 4], [7, 8, 9])).toBe(false);
  });
});
