const { identity } = require("function");

describe("identity", () => {
  it("returns what it is given", () => {
    expect(identity(2)).toBe(2);
  });
});
