const { complement } = require("./complement");
const { odd$ } = require("../math");

describe("complement", () => {
  it("returns complement value", () => {
    expect(complement(odd$)(5)).not.toBeTruthy();
  });
});
