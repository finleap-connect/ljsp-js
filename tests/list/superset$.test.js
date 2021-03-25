const { superset$ } = require("../../lib/list/superset$");

describe("superset$", () => {
  it("should return true if both sets are the same", () => {
    expect(superset$([0], [0])).toBe(true);
  });
  it("should return true if set1 is a superset of set2", () => {
    expect(superset$([0, 1], [0])).toBe(true);
  });
  it("should return false if set1 is a superset of set2", () => {
    expect(superset$([0], [0, 1])).toBe(false);
  });
});
