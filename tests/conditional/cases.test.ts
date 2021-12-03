import { cases } from "../../lib/conditional";

describe("case", () => {
  it("returns a matching value", () => {
    const myStr = "hello";
    // prettier-ignore
    expect(cases(myStr,
        "", 0,
        "hello", "there"
      )).toBe("there");
  });
  it("returns a default value", () => {
    const myStr = "monkey";
    // prettier-ignore
    expect(cases(myStr,
      "", 0,
      "hello", "there",
      "default"
    )).toBe("default");
  });
  it("returns runs a function result", () => {
    const myStr = "hello";
    // prettier-ignore
    expect(cases(myStr,
      "", 0,
      "hello", () => myStr.length,
    )).toBe(5);
  });
  it("returns undefined when no default and no match", () => {
    const myStr = "hello";
    // prettier-ignore
    expect(cases(myStr,
      "", 0,
      "ferret", () => myStr.length,
    )).toBe(undefined);
  });
});
