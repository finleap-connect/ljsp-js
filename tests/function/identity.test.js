const { identity } = require("../../lib/function/identity");

describe("identity", () => {
  it("returns what it is given", () => {
    expect(identity(2)).toBe(2);
  });
});
