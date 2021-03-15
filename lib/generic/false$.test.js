const { false$ } = require("./false$");
describe("false$", () => {
  it("should return true if the argument is false", () => {
    expect(false$(false)).toEqual(true);
  });
  it("should return false if the argument is false", () => {
    expect(false$(true)).toEqual(false);
  });
});
