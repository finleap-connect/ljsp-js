const { objectLike$ } = require("../../lib/generic/object-like$");

describe("objectLike$", () => {
  it("should return true when passed an object", () => {
    expect(objectLike$({})).toBe(true);
  });
  it("should return true when passed an array", () => {
    expect(objectLike$([])).toBe(true);
  });
  it("should return true when passed a function", () => {
    expect(objectLike$(() => {})).toBe(true);
  });
  it("should return false when passed a primitive", () => {
    expect(objectLike$(1)).toBe(false);
  });
});
