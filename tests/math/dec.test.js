const { dec } = require("../../lib/math/dec");

describe("dec", () => {
  it("decrements a number", () => {
    expect(dec(4)).toBe(3);
  });
});
