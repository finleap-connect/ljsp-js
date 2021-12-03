import { empty$ } from"../../lib/generic/empty$";

describe("empty$", () => {
  it("should return true if an Array has no elements", () => {
    expect(empty$([])).toBe(true);
  });
  it("should return true if an Object has no properties", () => {
    expect(empty$({})).toBe(true);
  });
  it("should return true if a Map has no entries", () => {
    expect(empty$(new Map())).toBe(true);
  });
  it("should return true if a Set has no entries", () => {
    expect(empty$(new Set())).toBe(true);
  });
  it("should return true for an empty string", () => {
    expect(empty$("")).toBe(true);
  });
  it("should return true if passed nothing", () => {
    expect(empty$()).toBe(true);
  });
});
