const { and } = require("conditional");

describe("and", () => {
  it("exits and returns value when false", () => {
    expect(and(2, 3, () => false, true)).toStrictEqual(false);
  });

  it("returns value when all conditions are true", () => {
    expect(and(2, 3, () => true, 100)).toStrictEqual(100);
  });
});
