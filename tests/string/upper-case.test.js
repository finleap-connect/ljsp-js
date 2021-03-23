const { upperCase } = require("../../lib/string/upper-case");

describe("uppercase", () => {
  it("transforms to uppercase", () => {
    expect(upperCase("demo")).toStrictEqual("DEMO");
  });
});
