import { lt$ } from "../../lib/math";
import { str } from "../../lib/string";
import { when } from "../../lib/conditional";
import { mapIndexed } from "../../lib/list/map-indexed";

describe("mapIndexed", () => {
  it("should map an index with a single value", () => {
    const fn = (idx: any, itm: any) => [idx, itm];
    expect(mapIndexed(fn, "foobar")).toEqual([
      [0, "f"],
      [1, "o"],
      [2, "o"],
      [3, "b"],
      [4, "a"],
      [5, "r"]
    ]);
  });
  it("should map an index with a set of values", () => {
    expect(
      mapIndexed(
        (a: string | number, b: any) => {
          const aGreater = lt$(a, 2);
          return when(aGreater, str(a, b));
        },
        ["a", "b", "c"]
      )
    ).toEqual(["0a", "1b", undefined]);
  });
});
