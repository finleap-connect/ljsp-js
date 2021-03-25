const { concat } = require("../../lib/list/concat");

describe("concat", () => {
  it("should concat two arrays", () => {
    expect(concat([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it("should concat multiple arrays", () => {
    expect(concat([1, 2], [3], [4, 5], [6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it("should concat multiple strings", () => {
    expect(concat("12", "34", "5", "6")).toEqual("123456");
  });
  it("should concat multiple objects", () => {
    expect(concat({ one: 1 }, { two: 2 }, { three: 3, four: 4 }, { five: 5, six: 6, seven: 7 })).toEqual({
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7
    });
  });
  it("should concat multiple Sets", () => {
    expect(concat(new Set([1, 2]), new Set([3]), new Set([4, 5]), new Set([6]))).toEqual(new Set([1, 2, 3, 4, 5, 6]));
  });
  it("should concat multiple Maps", () => {
    const result = concat(
      new Map([
        [1, 2],
        [3, 4]
      ]),
      new Map([[4, 5]]),
      new Map([
        [6, 7],
        [8, 9],
        [10, 11]
      ])
    );
    expect(result).toEqual(
      new Map([
        [1, 2],
        [3, 4],
        [4, 5],
        [6, 7],
        [8, 9],
        [10, 11]
      ])
    );
  });
});
