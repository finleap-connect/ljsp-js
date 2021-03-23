const { strSpace } = require("../../lib/string/str-space");

describe("strSpace", function () {
  it("should concatenate strings with a space in between them", function () {
    expect(strSpace("12", "34")).toBe("12 34");
  });
  it("should concatenate multiple strings with a space in between them", function () {
    expect(strSpace("12", "34", "hello", "55")).toBe("12 34 hello 55");
  });
  it("should convert a non-string to a string", () => {
    expect(strSpace(12)).toBe("12");
  });
  it("should return an empty string when called with no args", () => {
    expect(strSpace()).toBe("");
  });
});
