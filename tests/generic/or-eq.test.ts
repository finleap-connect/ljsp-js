import { orEq } from "../../lib/generic/or-eq";

describe("orEq", () => {
  it("should return true if a base value is equal to one or more options", () => {
    expect(orEq(1, 2, 3, 4, 1)).toBe(true);
  });
  it("should return false if a base value is NOT equal to one or more options", () => {
    expect(orEq(1, 2, 3, 4, 10)).toBe(false);
  });
});
