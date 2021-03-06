import { even$ } from "../../lib/math/even$";

describe("even$", () => {
  it("returns true if a number is even", () => {
    expect(even$(6)).toBe(true);
  });
  it("returns false if a number is NOT even", () => {
    expect(even$(5)).toBe(false);
  });
  it("returns false if provided zero", () => {
    expect(even$(0)).toBe(false);
  });
});
