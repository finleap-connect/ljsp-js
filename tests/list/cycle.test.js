const { cycle } = require("../../lib/list/cycle");

describe("cycle", function () {
  it("should generate elements for an Array", function () {
    const generator = cycle(["a", "b", "c"]);
    expect(generator()).toBe("a");
    expect(generator()).toBe("b");
    expect(generator()).toBe("c");
    expect(generator()).toBe("a");
    expect(generator()).toBe("b");
    expect(generator()).toBe("c");
  });
  it("should generate elements for a String", function () {
    const generator = cycle("abc");
    expect(generator()).toBe("a");
    expect(generator()).toBe("b");
    expect(generator()).toBe("c");
    expect(generator()).toBe("a");
    expect(generator()).toBe("b");
    expect(generator()).toBe("c");
  });
  it("should generate elements for a Set", function () {
    const generator = cycle(new Set(["a", "b", "c"]));
    expect(generator()).toBe("a");
    expect(generator()).toBe("b");
    expect(generator()).toBe("c");
    expect(generator()).toBe("a");
    expect(generator()).toBe("b");
    expect(generator()).toBe("c");
  });
  it("should generate elements for an Object", function () {
    const generator = cycle({ one: 1, two: 2, three: 3 });
    expect(generator()).toEqual(["one", 1]);
    expect(generator()).toEqual(["two", 2]);
    expect(generator()).toEqual(["three", 3]);
    expect(generator()).toEqual(["one", 1]);
    expect(generator()).toEqual(["two", 2]);
    expect(generator()).toEqual(["three", 3]);
  });
  it("should generate elements for a Map", function () {
    const generator = cycle(
      new Map([
        [1, 1],
        [2, 2],
        [3, 3]
      ])
    );
    expect(generator()).toEqual([1, 1]);
    expect(generator()).toEqual([2, 2]);
    expect(generator()).toEqual([3, 3]);
    expect(generator()).toEqual([1, 1]);
    expect(generator()).toEqual([2, 2]);
    expect(generator()).toEqual([3, 3]);
  });
});
