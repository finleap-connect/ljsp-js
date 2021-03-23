const { str } = require("../../lib/string/str");

describe("str", () => {
  it("should concatenate two strings", () => {
    expect(str("12", "34")).toBe("1234");
  });
  it("should concatenate multiple strings", () => {
    expect(str("12", "34", "56", "7")).toBe("1234567");
  });
  it("should convert a non-string to a string", () => {
    expect(str(12)).toBe("12");
  });
  it("should return an empty string when called with no args", () => {
    expect(str()).toBe("");
  });
});
