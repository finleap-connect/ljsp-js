import { collection$ } from"../../lib/generic/collection$";

describe("collection$", () => {
  it("should return true if the item is an object", () => {
    expect(collection$({})).toBe(true);
  });
  it("should return true if the item is an array", () => {
    expect(collection$([])).toBe(true);
  });
  it("should return true if the item is a string", () => {
    expect(collection$("")).toBe(true);
  });
  it("should return true if the item is a Set", () => {
    expect(collection$(new Set())).toBe(true);
  });
  it("should return true if the item is a Map", () => {
    expect(collection$(new Map())).toBe(true);
  });
  it("should return false if the item is a number", () => {
    expect(collection$(1)).toBe(false);
  });
  it("should return false if the item is a boolean", () => {
    expect(collection$(true)).toBe(false);
  });
});
