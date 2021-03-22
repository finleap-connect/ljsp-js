const { lt$ } = require("../math");
const { str } = require("../string");
const { when } = require("../conditional");
const { mapIndexed } = require("./map-indexed");

describe("mapIndexed", () => {
  it("should ", () => {
    const fn = (idx, itm) => [idx, itm];
    expect(mapIndexed(fn, "foobar")).toEqual([
      [0, "f"],
      [1, "o"],
      [2, "o"],
      [3, "b"],
      [4, "a"],
      [5, "r"]
    ]);
  });
  it("should map an index", () => {
    expect(
      mapIndexed(
        (a, b) => {
          const aGreater = lt$(a, 2);
          return when(aGreater, str(a, b));
        },
        ["a", "b", "c"]
      )
    ).toEqual(["0a", "1b", undefined]);
  });
});