import { odd$ } from "../../lib/math";
import { notAny$ } from "../../lib/list/not-any$";

describe("notAny", () => {
  it("should true if the predicate is false for all in the coll", () => {
    expect(notAny$(odd$, [2, 4, 6])).toBe(true);
  });
  it("should false if the predicate is true for any in the coll", () => {
    expect(notAny$(odd$, [2, 1, 6])).toBe(false);
  });
});
