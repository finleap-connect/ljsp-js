const { eq } = require("../../lib/generic/eq");

describe("eq", function () {
  it("should return true if two primitives are equal by value", function () {
    expect(eq(1, 1)).toBe(true);
  });
  it("should return false if two primitives are NOT equal by value", function () {
    expect(eq(1, 2)).toBe(false);
  });
  it("should return true if multiple primitives are equal by value", function () {
    expect(eq(1, 1, 1, 1)).toBe(true);
  });
  it("should return false if multiple primitives are NOT equal by value", function () {
    expect(eq(1, 1, 1, 1, 1, 2)).toBe(false);
  });
  it("should return true if two Objects are equal by reference", function () {
    const test = {};
    expect(eq(test, test)).toBe(true);
  });
  it("should return false if two Objects are NOT equal by reference", function () {
    expect(eq({}, {})).toBe(false);
  });
  it("should return true if multiple Objects are equal by reference", function () {
    const test = {};
    expect(eq(test, test, test, test)).toBe(true);
  });
  it("should return false if multiple Objects are NOT equal by reference", function () {
    const test = {};
    expect(eq(test, test, test, {})).toBe(false);
  });
});
