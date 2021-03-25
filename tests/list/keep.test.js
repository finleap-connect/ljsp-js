const { odd$ } = require("../../lib/math");
const { iff } = require("../../lib/conditional");
const { range } = require("lodash");
const { keep } = require("../../lib/list/keep");

describe("keep", function () {
  function returnWithBool(val) {
    return iff(odd$(val), val, false);
  }

  function returnWithNull(val) {
    return iff(odd$(val), val, null);
  }

  function returnWithUndefined(val) {
    return iff(odd$(val), val, undefined);
  }
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
