const { or } = require("conditional");

describe("or", () => {
  it("return value if a form returns a logical true, and doesn't evaluate any of the other expressions", () => {
    expect(or(false, 1, 0, () => true)).toEqual(1);
  });
  it("returns the last value in the expression set when all are false", () => {
    expect(or(0, false, () => false)).toEqual(false);
  });
  it("should return undefined when no args", () => {
    expect(or()).toBeUndefined();
  });
});
