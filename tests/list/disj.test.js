const { disj } = require("../../lib/list/disj");

describe("disj", () => {
  it("should return the set if no second arg is provided", () => {
    expect(disj([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it("should return a copy of a set with the indexed items removed", () => {
    expect(disj([1, 2, 3], 2)).toEqual([1, 3]);
  });
  it("should disjoin multiple keys", () => {
    expect(disj([1, 2, 3, 4], 2, 4)).toEqual([1, 3]);
  });
  it("should disjoin keys in a string", () => {
    expect(disj("12345", 1, 3)).toEqual("245");
  });
});
