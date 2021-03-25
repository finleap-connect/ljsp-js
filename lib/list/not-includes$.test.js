const { notIncludes$ } = require("./not-includes$");

describe("notIncludes$", function () {
  it("should return true if a set does not include at least one item", function () {
    expect(notIncludes$([1, 2, 3, 4], 4, 6)).toBe(true);
  });
  it("should return false if a set DOES include all items", function () {
    expect(notIncludes$([1, 2, 3, 4], 4)).toBe(false);
  });
});
