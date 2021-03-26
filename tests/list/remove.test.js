const { pos$ } = require("../../lib/math");
const { remove } = require("../../lib/list/remove");

describe("remove", function () {
  it("should return an Array of the items in coll for which (pred item) returns logical false", function () {
    expect(remove(pos$, [1, -2, 2, -1, 3, 7, 0])).toEqual([-2, -1, 0]);
  });
});
