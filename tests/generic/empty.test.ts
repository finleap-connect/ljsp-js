import { empty } from"../../lib/generic/empty";

describe("empty", () => {
  it("should return an empty array when passed an array", () => {
    expect(empty([1, 2, 3])).toEqual([]);
  });
  it("should return an empty object when passed an object", () => {
    expect(empty({ one: 1, two: 2 })).toEqual({});
  });
  it("should return an empty Set when passed an object", () => {
    const test = new Set();
    test.add(1);
    const result = new Set();
    expect(empty(test)).toEqual(result);
  });
  it("should return an empty WeakSet when passed an object", () => {
    const test = new WeakSet();
    test.add({});
    const result = new WeakSet();
    expect(empty(test)).toEqual(result);
  });
  it("should return an empty Map when passed an object", () => {
    const test = new Map();
    test.set("test", 1);
    const result = new Map();
    expect(empty(test)).toEqual(result);
  });
  it("should return an empty WeakMap when passed an object", () => {
    const test = new WeakMap();
    test.set({}, 1);
    const result = new WeakMap();
    expect(empty(test)).toEqual(result);
  });
  it("should return undefined when not passed a set", () => {
    expect(empty(1)).toBe(undefined);
  });
});
