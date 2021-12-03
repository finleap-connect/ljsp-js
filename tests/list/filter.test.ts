import { reduce } from "../../lib/list/reduce";
import { gt$ } from "../../lib/math";
import { second } from "../../lib/list/second";
import { even$ } from "../../lib/math";

import { filter } from "../../lib/list/filter";

describe("filter", () => {
  it("should filter items from an Array", () => {
    expect(filter(even$, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10]);
  });
  it("should filter items from a String", () => {
    expect(filter(even$, "123456789")).toBe("2468");
  });
  it("should filter items from an Object", () => {
    expect(filter((a) => gt$(second(a), 100), { a: 1, b: 2, c: 101, d: 102, e: -1 })).toEqual({ c: 101, d: 102 });
  });
  it("should filter items from a Set", () => {
    expect(filter(even$, new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))).toEqual(new Set([2, 4, 6, 8, 10]));
  });
  it("should filter items from a Map", () => {
    expect(
      filter(
        (a) => gt$(second(a), 6),
        new Map([
          [1, 2],
          [3, 4],
          [5, 6],
          [7, 8],
          [9, 10]
        ])
      )
    ).toEqual(
      new Map([
        [7, 8],
        [9, 10]
      ])
    );
  });
  it("should return a transducer that works with LJSP's `reduce` if given one argument", () => {
    const transducer = filter(even$);
    const reducer = transducer((a, c) => a.concat([c]));
    const result = reduce(reducer, [], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result).toEqual([2, 4, 6, 8]);
  });
  it("should return a transducer that works with native `Array.prototype.reduce` if given one argument", () => {
    const transducer = filter(even$);
    const reducer = transducer((a, c) => a.concat([c]));
    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(reducer, []);
    expect(result).toEqual([2, 4, 6, 8]);
  });
});
