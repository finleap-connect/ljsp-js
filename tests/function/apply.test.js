const { max } = require("../../lib/math");
const { add } = require("../../lib/math");
const { apply } = require("../../lib/function/apply");

describe("apply", () => {
  it("should apply a function to a list of operands", () => {
    expect(apply(add, 1, 2, 3, 4)).toBe(10);
  });
  it("should permit a mixture of args and Array args", () => {
    expect(apply(add, 1, 2, [3, 4])).toBe(10);
  });
  it("should work with sets of arrays", () => {
    expect(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ].map((item) => apply(max, item))
    ).toEqual([3, 6, 9]);
  });
});
