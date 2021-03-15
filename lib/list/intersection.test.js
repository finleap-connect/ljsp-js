const { intersection } = require("./intersection");

describe("intersection", () => {
  it("should return the intersection of two arrays", () => {
    expect(intersection([1, 2], [3, 2])).toEqual([2]);
  });
  it("should return the intersection of variadic arrays", () => {
    expect(intersection([1, 2, 4], [3, 2, 4], [1, 2, 3, 4])).toEqual([2, 4]);
  });
  it("should return the original argument if provided only one argument", () => {
    expect(intersection([1, 2])).toEqual([1, 2]);
  });
});
