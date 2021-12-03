import { mult } from "../../lib/math";
import { ffor } from "../../lib/list/ffor";

describe("ffor", () => {
  it("should take an Array of Arrays (`set`) and a function, and return the Cartesian product of applying the function to set's elements", () => {
    expect(
      ffor(
        [
          [1, 2, 3],
          [1, 2, 3]
        ],
        (x, y) => mult(x, y)
      )
    ).toEqual([1, 2, 3, 2, 4, 6, 3, 6, 9]);
  });
  it("as above, takes a 2D array, and returns Cartesian product of applying `f`", () => {
    expect(
      ffor(
        [
          [1, 2, 3],
          [1, 2, 3]
        ],
        (x, y) => [x, y].flat()
      )
    ).toEqual([
      [1, 1],
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 1],
      [3, 2],
      [3, 3]
    ]);
  });
});
