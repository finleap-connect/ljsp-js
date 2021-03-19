const { ifNot } = require("conditional");

describe("ifNot", () => {
  it("should return value if expression is truthy", function () {
    expect(ifNot("", () => "Bird")).toStrictEqual("Bird");
  });
  it("should return default value if expression is falsy", function () {
    expect(ifNot(true, () => "Bird")).toStrictEqual(undefined);
  });
});
