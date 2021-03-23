const { when } = require("conditional");

describe("when", () => {
  it("should return undefined when false", function () {
    expect(when(false, () => "one")).toBeUndefined();
  });
  it("should execute body when true", () => {
    expect(when(true, () => "one")).toEqual("one");
  });
  it("should execute body and return last function when true", () => {
    expect(
      when(
        true,
        () => "one",
        () => "two",
        () => "three"
      )
    ).toEqual("three");
  });
});
