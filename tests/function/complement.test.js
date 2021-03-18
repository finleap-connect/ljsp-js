const { complement } = require("function");
const { odd$ } = require("math");

describe("complement", () => {
  it("returns complement value", () => {
    expect(complement(odd$)(5)).not.toBeTruthy();
  });
});
