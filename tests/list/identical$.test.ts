import { identical$ } from "../../lib/list/identical$";

describe("identical$", () => {
  it("should return true if two numbers are the same", () => {
    expect(identical$(2, 2)).toBe(true);
  });
  it("should return true if the arguments are null", () => {
    expect(identical$(null, null)).toBe(true);
  });
  it("should return true if the variables have the same reference", () => {
    const test = {};
    expect(identical$(test, test)).toBe(true);
  });
  it("should return false if when given two different objects with the same properties", () => {
    expect(identical$({ name: "Alice" }, { name: "Alice" })).toBe(false);
  });
});
