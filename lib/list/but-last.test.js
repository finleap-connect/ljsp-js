const { butLast } = require("./but-last");

describe("butLast", function () {
  it("returns sequence of values except last", function () {
    expect(butLast([1, 2, 3, 4])).toEqual([1, 2, 3]);
  });
  it("returns empty array when list has one item", function () {
    expect(butLast([1])).toHaveLength(0);
  });
});
