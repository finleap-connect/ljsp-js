const { add } = require("../../lib/math/add");

describe("add", () => {
  it("adds numbers", () => {
    expect(add(1, 2, 3, 4)).toBe(10);
  });
  it("returns 0 with no args", () => {
    expect(add()).toBe(0);
  });
  it("returns the same number if only one option is provided", () => {
    expect(add(1)).toBe(1);
  });
});
