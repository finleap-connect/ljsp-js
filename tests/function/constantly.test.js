const { constantly } = require("../../lib/function/constantly");

describe("constantly", () => {
  it("always returns the same value", () => {
    const fn = constantly(2);
    expect(fn(1, 2, 3, 4, 5, "22", () => {})).toBe(2);
  });
});
