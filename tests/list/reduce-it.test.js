const { iterator } = require("../../lib/list/iterator");
const { reduceIt } = require("../../lib/list/reduce-it");

describe("reduceIt", function () {
  it("should reduce an iterator", function () {
    const test = iterator([1, 2, 3, 4]);
    const result = reduceIt((acc, cur) => acc + cur, 0, test);
    expect(result).toBe(10);
  });
});
