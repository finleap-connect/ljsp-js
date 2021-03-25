const { iterator } = require("../../lib/list/iterator");

describe("iterator", () => {
  it("should create an iterator for an Array", () => {
    const sut = iterator([1, 2, 3]);
    expect(sut()).toBe(1);
    expect(sut()).toBe(2);
    expect(sut()).toBe(3);
  });
  it("should create an iterator for an Object", () => {
    const sut = iterator({ one: 1, two: 2, three: 3 });
    expect(sut()).toEqual(["one", 1]);
    expect(sut()).toEqual(["two", 2]);
    expect(sut()).toEqual(["three", 3]);
  });
  it("should create an iterator for a String", () => {
    const sut = iterator("123");
    expect(sut()).toBe("1");
    expect(sut()).toBe("2");
    expect(sut()).toBe("3");
  });
  it("should create an iterator for a Set", () => {
    const sut = iterator(new Set([1, 2, 3]));
    expect(sut()).toBe(1);
    expect(sut()).toBe(2);
    expect(sut()).toBe(3);
  });
  it("should create an iterator for a Map", () => {
    const sut = iterator(
      new Map([
        [1, 1],
        [2, 2],
        [3, 3]
      ])
    );
    expect(sut()).toEqual([1, 1]);
    expect(sut()).toEqual([2, 2]);
    expect(sut()).toEqual([3, 3]);
  });
});
