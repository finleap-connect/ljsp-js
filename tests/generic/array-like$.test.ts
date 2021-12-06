import { arrayLike$ } from "../../lib/generic/array-like$";

describe("array$", () => {
  it("should return true if passed a string", () => {
    expect(arrayLike$("string")).toBe(true);
  });
  it("should return true if passed an array", () => {
    expect(arrayLike$([])).toBe(true);
  });
  it("should return true if passed a new Array object", () => {
    expect(arrayLike$(new Array())).toBe(true);
  });
});
