const { capitalize } = require("./capitalize");

describe("capitalize", () => {
  it("transforms to capitalized", () => {
    expect(capitalize("this is wikipedia.")).toStrictEqual("This is wikipedia.");
    expect(capitalize("THIS IS WIKIPEDIA.")).toStrictEqual("This is wikipedia.");
  });
  it("returns back the string when empty", () => {
    expect(capitalize("  ")).toStrictEqual("  ");
  });
});
