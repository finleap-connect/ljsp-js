import { toPath } from "../../lib/string/to-path";

describe("toPath", function () {
  it("should concatenate strings with a / separator between then", function () {
    expect(toPath("12", "34", "56")).toBe("12/34/56");
  });
  it("should convert a non-string to a string", () => {
    expect(toPath(12)).toBe("12");
  });
  it("should return an empty string when called with no args", () => {
    expect(toPath()).toBe("");
  });
});
