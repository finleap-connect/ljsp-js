import { even$ } from "../../lib/math";
import { notEvery$ } from "../../lib/list/not-every$";

describe("notEvery$", () => {
  it("should return false if pred is true for every element in coll", () => {
    expect(notEvery$(even$, [2, 4, 6])).toBe(false);
  });
  it("should return true if pred is NOT true for every element in coll", () => {
    expect(notEvery$(even$, [2, 5, 6])).toBe(true);
  });
});
