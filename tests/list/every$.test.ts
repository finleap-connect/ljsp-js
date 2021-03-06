import { even$ } from "../../lib/math";
import { every$ } from "../../lib/list/every$";

describe("every$", () => {
  it("should return true if pred is true for every element in coll", () => {
    expect(every$(even$, [2, 4, 6])).toBe(true);
  });
  it("should return false if pred is NOT true for every element in coll", () => {
    expect(every$(even$, [2, 5, 6])).toBe(false);
  });
});
