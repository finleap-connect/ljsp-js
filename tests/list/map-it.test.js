const { inc } = require("../../lib/math");
const { iterator } = require("../../lib/list/iterator");
const { mapIt } = require("../../lib/list/map-it");

describe("mapIt", function () {
  it("should map over an iterator", function () {
    const test = iterator([1, 2, 3]);
    const result = mapIt(inc, test);
    expect(result()).toBe(2);
  });
});
