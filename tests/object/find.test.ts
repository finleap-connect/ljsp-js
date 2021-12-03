import { find } from "../../lib/object/find";

describe("find", () => {
  it("should find a string-based property in an object", () => {
    expect(find({ a: 1 }, "a")).toEqual(["a", 1]);
  });
  it("should find a Symbols-based property in an object", () => {
    const sym = Symbol("a");
    const obj = { [sym]: 1 };
    expect(find(obj, sym)).toEqual([sym, 1]);
  });
  it("should return undefined if the key is not present in an object", () => {
    expect(find({ a: 1 }, "b")).toEqual(undefined);
  });
  it("should find an index in an array", () => {
    expect(find(["a", 1, "hello", true], 2)).toEqual([2, "hello"]);
  });
  it("should return undefined if the key is not present in an array", () => {
    expect(find(["a", 1, "hello", true], 10)).toEqual(undefined);
  });
});
