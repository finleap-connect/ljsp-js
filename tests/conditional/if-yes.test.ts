import { ifYes } from "../../lib/conditional";

describe("ifYes", () => {
  it("should return value when true", () => {
    expect(ifYes(true, 1)).toStrictEqual(1);
  });
  it("should return undefined when false", () => {
    expect(ifYes(false, 1)).toBeUndefined();
  });
});
