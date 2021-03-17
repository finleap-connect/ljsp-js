const { object$ } = require("./object$");

describe("object$", () => {
  it("should return true if given an object", () => {
    expect(object$({})).toBe(true);
  });
  it("should return false if given an array", () => {
    expect(object$([])).toBe(false);
  });
  it("should return false if given a function", () => {
    expect(object$(() => {})).toBe(false);
  });
  it("should return false if given a primitive", () => {
    expect(object$(true)).toBe(false);
  });
});
