import { string$ } from "../../lib/generic/string$";

describe("string$", function () {
  it("should return true if the arg is a string", function () {
    expect(string$("")).toBe(true);
  });
  it("should return false if the arg is NOT a string", function () {
    expect(string$(1)).toBe(false);
  });
});
