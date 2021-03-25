const { cycle } = require("../../lib/list/cycle");
const { takeS } = require("../../lib/list/take-s");

describe("takeS", function () {
  it("should take n elements from an iterator", function () {
    const aAndB = ["a", "b"];
    const generator = cycle(aAndB);
    expect(takeS(10, generator)).toEqual(["a", "b", "a", "b", "a", "b", "a", "b", "a", "b"]);
  });
});
