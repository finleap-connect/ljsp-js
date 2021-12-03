import { reduce } from "../../lib/list/reduce";
import { drop } from "../../lib/list/drop";

describe("drop", () => {
  it("should drop n items from an Array", () => {
    expect(drop(2, [1, 2, 3, 4])).toEqual([3, 4]);
  });
  it("should drop n items from a string", () => {
    expect(drop(2, "1234")).toBe("34");
  });
  it("should drop n items from a Set", () => {
    expect(drop(2, new Set([1, 2, 3, 4]))).toEqual(new Set([3, 4]));
  });
  it("should drop n items from an Object", () => {
    expect(drop(2, { one: 1, two: 2, three: 3, four: 4 })).toEqual({ three: 3, four: 4 });
  });
  it("should drop n items from a Map", () => {
    expect(
      drop(
        2,
        new Map([
          [1, 1],
          [2, 2],
          [3, 3]
        ])
      )
    ).toEqual(new Map([[3, 3]]));
  });
  it("should return a transducer that works with LJSP's `reduce` if given one argument", () => {
    const transducer = drop(2);
    const reducer = transducer((a: any[], c: any) => a.concat([c]));
    const result = reduce(reducer, [], [1, 2, 3, 4]);
    expect(result).toEqual([3, 4]);
  });
  it("should return a transducer that works with native `Array.prototype.reduce` if given one argument", () => {
    const transducer = drop(2);
    const reducer = transducer((a: any[], c: any) => a.concat([c]));
    const result = [1, 2, 3, 4].reduce(reducer, []);
    expect(result).toEqual([3, 4]);
  });
});
