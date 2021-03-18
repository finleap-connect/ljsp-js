const { complement } = require("../../lib/function/complement");
const { odd$ } = require("../../lib/math");

describe("complement", () => {
  it("returns complement value", () => {
    expect(complement(odd$)(5)).not.toBeTruthy();
  });
});
