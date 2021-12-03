import { notEq } from"../../lib/generic/not-eq";

describe("eq", function () {
  it("should return false if two primitives are equal by value", function () {
    expect(notEq(1, 1)).toBe(false);
  });
  it("should return true if two primitives are NOT equal by value", function () {
    expect(notEq(1, 2)).toBe(true);
  });
  it("should return false if multiple primitives are equal by value", function () {
    expect(notEq(1, 1, 1, 1)).toBe(false);
  });
  it("should return true if multiple primitives are NOT equal by value", function () {
    expect(notEq(1, 2, 3, 4, 5)).toBe(true);
  });
  it("should return false if two Objects are equal by reference", function () {
    const test = {};
    expect(notEq(test, test)).toBe(false);
  });
  it("should return true if two Objects are NOT equal by reference", function () {
    expect(notEq({}, {})).toBe(true);
  });
  it("should return false if multiple Objects are equal by reference", function () {
    const test = {};
    expect(notEq(test, test, test, test)).toBe(false);
  });
  it("should return true if multiple Objects are NOT equal by reference", function () {
    const test = {};
    expect(notEq(test, {}, {}, {})).toBe(true);
  });
});
