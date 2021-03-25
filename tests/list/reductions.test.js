const { add } = require("../../lib/math");
const { reductions } = require("../../lib/list/reductions");

describe("reductions", function () {
  it("should return an iterator of the intermediate values of a reduction", function () {
    const test = reductions(add, 8, [1, 2, 3, 4]);
    expect(test()).toBe(9);
    expect(test()).toBe(11);
    expect(test()).toBe(14);
  });
});
