import { whenNot } from "../../lib/conditional";

describe("when", () => {
  it("should return undefined when true", function () {
    expect(whenNot(true, () => "one")).toBeUndefined();
  });
  it("should execute body when false", () => {
    expect(whenNot(false, () => "one")).toEqual("one");
  });
  it("should execute body and return last function when false", () => {
    expect(
      whenNot(
        false,
        () => "one",
        () => "two",
        () => "three"
      )
    ).toEqual("three");
  });
});
