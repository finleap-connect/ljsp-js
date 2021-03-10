const { iff } = require("./iff");

describe("iff", () => {
  it("should return value when true", () => {
    expect(iff(true, 1, 0)).toEqual(1);
  });
  it("should return value when false", () => {
    expect(iff(false, 1, 0)).toEqual(0);
  });
});
