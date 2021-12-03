import { some$ } from "../../lib/conditional";

describe("some$", () => {
  it("returns true if not nil", () => {
    expect(some$(1)).toBeTruthy();
  });
  it("returns false if nil", () => {
    expect(some$(null)).not.toBeTruthy();
    expect(some$(undefined)).not.toBeTruthy();
  });
});
