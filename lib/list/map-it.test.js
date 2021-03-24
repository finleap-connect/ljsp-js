const { inc } = require("../math");
const { iterator } = require("./iterator");
const { mapIt } = require("./map-it");

describe("mapIt", function () {
  it("should map over an iterator", function () {
    const test = iterator([1, 2, 3]);
    const result = mapIt(inc, test);
    expect(result()).toBe(2);
  });
});
