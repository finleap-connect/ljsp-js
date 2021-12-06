import { reduce } from "../../lib/list/reduce";
import { take } from "../../lib/list/take";

describe("take", () => {
  it("should return a transducer that works with LJSP's `reduce` if given one argument", () => {
    // @ts-ignore
    const transducer = take(5);
    const reducer = transducer((a: any[], c: any) => a.concat([c]));
    const result = reduce(reducer, [], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it("should return a transducer that works with native `Array.prototype.reduce` if given one argument", () => {
    // @ts-ignore
    const transducer = take(5);
    const reducer = transducer((a: any[], c: any) => a.concat([c]));
    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(reducer, []);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
  it("should return the first n items of an Array", () => {
    expect(take(5, [1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 3, 4, 5]);
  });
  it("should return the first n items of a String", () => {
    expect(take(5, "1234567890")).toEqual("12345");
  });
  it("should return the first n items of an Object", () => {
    expect(take(2, { one: 1, two: 2, three: 3, four: 4 })).toEqual({ one: 1, two: 2 });
  });
  it("should return the first n items of a Set", () => {
    expect(take(5, new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]))).toEqual(new Set([1, 2, 3, 4, 5]));
  });
  it("should return the first n items of a Map", () => {
    expect(
      take(
        2,
        new Map([
          [1, 2],
          [2, 3],
          [3, 4],
          [4, 5]
        ])
      )
    ).toEqual(
      new Map([
        [1, 2],
        [2, 3]
      ])
    );
  });
});
