const { mult } = require("../math");
const { partial } = require("./partial");

describe("partial", function () {
  it("should partially apply a function", function () {
    const hundred_times = partial(mult, 100);
    expect(hundred_times(5)).toBe(500);
  });
});
