const { contains$ } = require("../../lib/list/contains$");

describe("contains$", () => {
  it("should return true if the key is present in an object", () => {
    expect(contains$({ a: 1 }, "a")).toBe(true);
  });
  it("should return false if the key is NOT present in an object", () => {
    expect(contains$({ a: 1 }, "b")).toBe(false);
  });
  it("should return true if the text is present in a string", () => {
    expect(contains$("abc", "a")).toBe(true);
  });
  it("should return false if the text is NOT present in a string", () => {
    expect(contains$("abc", "q")).toBe(false);
  });
  it("should return true if the element is present in a Set", () => {
    expect(contains$(new Set(["a", "b", "c"]), "b")).toBe(true);
  });
  it("should return false if the element is NOT present in a Set", () => {
    expect(contains$(new Set(["a", "b", "c"]), 2)).toBe(false);
  });
  it("should return true if the element is present in a Map", () => {
    expect(
      contains$(
        new Map([
          ["prop1", "b"],
          ["prop2", "d"]
        ]),
        "prop2"
      )
    ).toBe(true);
  });
  it("should return false if the element is NOT present in a Map", () => {
    expect(
      contains$(
        new Map([
          ["prop1", "b"],
          ["prop2", "d"]
        ]),
        "foo"
      )
    ).toBe(false);
  });
});
