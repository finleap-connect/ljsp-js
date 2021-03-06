import { odd$ } from "../../lib/math";
import { iff } from "../../lib/conditional";
import { range } from "lodash";
import { keep } from "../../lib/list/keep";

describe("keep", function () {
  function returnWithBool(val: number) {
    return iff(odd$(val), val, false);
  }

  function returnWithNull(val: number) {
    return iff(odd$(val), val, null);
  }

  function returnWithUndefined(val: number) {
    return iff(odd$(val), val, undefined);
  }
  // @ts-ignore
  const keepFn = (arg) => keep(arg);
  it("should return a lazy sequence of the non-nil results of (f item)", function () {
    expect(keep(returnWithBool, range(5))).toEqual([false, 1, false, 3, false]);

    expect(keep(returnWithNull, range(5))).toEqual([1, 3]);

    expect(keep(returnWithUndefined, range(5))).toEqual([1, 3]);

    expect(keepFn(returnWithBool)(range(5))).toEqual([false, 1, false, 3, false]);

    expect(keepFn(returnWithNull)(range(5))).toEqual([1, 3]);

    expect(keepFn(returnWithUndefined)(range(5))).toEqual([1, 3]);
  });
});
