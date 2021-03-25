const { reduced$ } = require("../../lib/list/reduced$");
const { ensureReduced } = require("../../lib/list/ensure-reduced");

describe("ensureReduced", function () {
  it("should ensure that an item is reduced", function () {
    const test = ensureReduced([1]);
    expect(reduced$(test)).toBe(true);
  });
});
