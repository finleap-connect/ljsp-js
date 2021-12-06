import { pos$ } from "../../lib/math/pos$";

describe("pos$", () => {
  it("returns true if provided a negative number", () => {
    expect(pos$(1)).toBe(true);
  });
  it("returns false if provided a positive number", () => {
    expect(pos$(-1)).toBe(false);
  });
  it("returns false if provided zero", () => {
    expect(pos$(0)).toBe(false);
  });
});
