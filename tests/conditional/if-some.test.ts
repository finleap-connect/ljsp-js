import { ifSome } from "../../lib/conditional";

describe("ifSome", () => {
  it("returns value if true", () => {
    expect(
      ifSome(
        true,
        (val: any) => `returns ${val}`,
        (val: any) => `else returns ${val}`
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
