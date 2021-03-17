const { add } = require("../../lib/math");
const { str } = require("../../lib/string");
const { comp } = require("../../lib/function/comp");

describe("comp", () => {
  it("should compose a set of functions, running them r-t-l", () => {
    expect(comp(Number, str, add)(8, 8, 8)).toEqual(24);
  });
});
