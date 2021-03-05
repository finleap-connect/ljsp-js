const { ifArray } = require("./if-array");

describe("if-array", () => {
  it("returns a value if true", () => {
    expect(ifArray(true, 1)).toBe(1);
  });
  it("returns an empty array if false", () => {
    expect(ifArray(false, 1)).toEqual([]);
  });
});
