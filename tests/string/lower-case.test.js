const { lowerCase } = require("../../lib/string/lower-case");

describe("lower case", function () {
  it("should transform string to lower case", function () {
    expect(lowerCase("This is wikipedia.")).toStrictEqual("this is wikipedia.");
    expect(lowerCase("THIS IS WIKIPEDIA.")).toStrictEqual("this is wikipedia.");
  });
});
