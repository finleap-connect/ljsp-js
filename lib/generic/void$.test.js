const { void$ } = require("./void$");

describe("void$", function () {
  it("should return true for null", function () {
    expect(void$(null)).toBeTruthy();
  });
  it("should return true for undefined", function () {
    expect(void$()).toBeTruthy();
  });
  it("should return false for string", function () {
    expect(void$("hello")).toBeFalsy();
  });
});
