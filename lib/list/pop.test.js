const { pop } = require("./pop");

describe("pop", () => {
  it("should remove the last value in an Array Collection, and return the remaining Collection", () => {
    expect(pop([1, 2, 3])).toEqual([1, 2]);
  });
  it("should remove the last value in a string Collection, and return the remaining Collection", () => {
    expect(pop("123")).toEqual("12");
  });
  it("should remove a value in an Object Collection, and return the remaining Collection", () => {
    expect(pop({ one: 1, two: 2, three: 3 })).toEqual({ one: 1, two: 2 });
  });
  it("should remove the last value in a Set Collection, and return the remaining Collection", () => {
    expect(pop(new Set([1, 2, 3]))).toEqual(new Set([1, 2]));
  });
  it("should remove the last value in a Map Collection, and return the remaining Collection", () => {
    expect(
      pop(
        new Map([
          [1, 2],
          [2, 3]
        ])
      )
    ).toEqual(new Map([[1, 2]]));
  });
});
