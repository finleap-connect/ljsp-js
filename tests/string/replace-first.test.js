const { replaceFirst } = require("../../lib/string/replace-first");

describe("replaceFirst", () => {
  it("should replace the first found item in a string when given a string", () => {
    expect(replaceFirst("1234512345", "1", "2")).toBe("2234512345");
  });
  it("should replace the first found item in a string when given a RegExp", () => {
    expect(replaceFirst("1234512345", /1/, "2")).toBe("2234512345");
  });
});
