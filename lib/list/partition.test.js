const { partition } = require("./partition");

describe("partition", () => {
  const largeSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  it("should return an array of elements split into groups the length of size", () => {
    expect(partition(2, [1, 2, 3, 4, 5, 6, 7, 8])).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8]
    ]);
  });
  it("should use a step to select the starting point, if provided", () => {
    expect(partition(4, 6, largeSet)).toEqual([
      [0, 1, 2, 3],
      [6, 7, 8, 9],
      [12, 13, 14, 15]
    ]);
  });
  it("should supply a pad, if provided, if there are not enough items for the last partition", () => {
    expect(partition(4, 6, ["a", "b"], largeSet)).toEqual([
      [0, 1, 2, 3],
      [6, 7, 8, 9],
      [12, 13, 14, 15],
      [18, 19, "a", "b"]
    ]);
  });
  it("should NOT add unnecessary pad elems to the result", () => {
    expect(partition(4, 6, ["a", "b", "c", "d"], largeSet)).toEqual([
      [0, 1, 2, 3],
      [6, 7, 8, 9],
      [12, 13, 14, 15],
      [18, 19, "a", "b"]
    ]);
  });
});
