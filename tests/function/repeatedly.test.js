const { repeatedly } = require("../../lib/function/repeatedly");

describe("repeatedly", () => {
  it("should call a function n times, and return an Array of the results", () => {
    expect(repeatedly(Math.random, 5).length).toBe(5);
  });
});
