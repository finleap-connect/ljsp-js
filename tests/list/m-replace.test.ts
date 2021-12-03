import { second } from "../../lib/list/second";
import { reduce } from "../../lib/list/reduce";
import { mReplace } from "../../lib/list/m-replace";

describe("mReplace", () => {
  it("should replace elements in an array by key", () => {
    expect(mReplace([10, 9, 8, 7, 6], [0, 2, 4])).toEqual([10, 8, 6]);
  });
  it("should replace elements in an object by key", () => {
    // @ts-ignore
    expect(mReplace({ a: 2, b: 4 }, ["a", "b", "c"])).toEqual([2, 4, "c"]);
  });
  it("should replace elements in an string by key", () => {
    // @ts-ignore
    expect(mReplace("12345", [0, 2, 4])).toEqual(["1", "3", "5"]);
  });
  it("should return a transducer that works with LJSP's `reduce` if given one argument", () => {
    const transducer = mReplace([10, 9, 8, 7, 6]);
    const reducer = transducer((a: any[], c: any[]) => a.concat([second(c)]));
    const result = reduce(reducer, [], [0, 2, 4]);
    expect(result).toEqual([10, 8, 6]);
  });
  it("should return a transducer that works with `Array.prototype.reduce` if given one argument", () => {
    const transducer = mReplace([10, 9, 8, 7, 6]);
    const reducer = transducer((a: any[], c: any[]) => a.concat([second(c)]));
    const result = [0, 2, 4].reduce(reducer, []);
    expect(result).toEqual([10, 8, 6]);
  });
});
