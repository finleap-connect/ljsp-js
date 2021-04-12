const { getArraySetColumn } = require("../../lib/list/get-array-set-column");

describe("getArraySetColumn", () => {
  it("should get all the values from a set of arrays at a given index", () => {
    expect(
      getArraySetColumn(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
        ],
        1
      )
    ).toEqual([2, 5, 8]);
  });
});
