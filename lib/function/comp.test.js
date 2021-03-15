const { add } = require("../math");
const { str } = require("../string");
const { comp } = require("./comp");

describe("comp", () => {
  it("should compose a set of functions, running them r-t-l", () => {
    expect(comp(Number, str, add)(8, 8, 8)).toEqual(24);
  });
});
