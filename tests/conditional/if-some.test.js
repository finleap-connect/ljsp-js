const { ifSome } = require("../../lib/conditional/if-some");

describe("ifSome", () => {
  it("returns value if true", () => {
    expect(
      ifSome(
        true,
        (val) => `returns ${val}`,
        (val) => `else returns ${val}`
      )
    ).toStrictEqual("returns true");
  });
  it("returns obj if false", () => {
    expect(
      ifSome(
        null,
        () => `returns true`,
        () => `returns null`
      )
    ).toStrictEqual("returns null");
  });
});
