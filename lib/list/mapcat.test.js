const { reverse } = require("lodash");
const { mapcat } = require("./mapcat");

describe("mapcat", function () {
  it("should return the result of applying concat to the result of applying map to f and colls", function () {
    expect(
      mapcat(reverse, [
        [3, 2, 1, 0],
        [6, 5, 4],
        [9, 8, 7]
      ])
    ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
