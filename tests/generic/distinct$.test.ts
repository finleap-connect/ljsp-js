import { distinct$ } from"../../lib/generic/distinct$";

describe("distinct$", () => {
  it("should return true when items are distinct", () => {
    expect(distinct$(1, 2, "b", 12)).toBe(true);
  });
  it("should return true when one item is compared", () => {
    expect(distinct$(1)).toBe(true);
  });
  it("should return false when one item is duplicated anywhere in the list", () => {
    expect(distinct$(1, 2, 3, false, "a", 2, 9));
  });
});
