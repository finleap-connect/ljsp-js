import { replace } from "../../lib/string/replace";

describe("replace", () => {
  it("should replace all instances when provided a regular expression", () => {
    expect(replace("The color is red", /red/, "blue")).toBe("The color is blue");
  });
  it("should replace all instances when provided a string", () => {
    expect(replace("The color is red", "red", "blue")).toBe("The color is blue");
  });
  it("should replace all instances of match groups when provided a regular expression and a match set", () => {
    expect(replace("Almost Pig Latin", /\b(\w)(\w+)\b/, [[2, 1], "ay"])).toBe("lmostAay igPay atinLay");
  });
  it("should accept a replace function", () => {
    function replacer(match, p1, p2, p3) {
      return [p1, p2, p3].join(" - ");
    }
    const result = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
    expect(result).toBe("abc - 12345 - #$*%");
  });
});
