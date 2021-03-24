const { merge } = require("../../lib/object/merge");

describe("merge", function () {
  it("should merge a collection of objects", function () {
    const test = { one: 1, two: 2, three: 3 };
    const one = { four: 4, five: 5 };
    const two = { seven: 7, eight: 8 };

    expect(merge(test, one, two)).toEqual({
      eight: 8,
      five: 5,
      four: 4,
      one: 1,
      seven: 7,
      three: 3,
      two: 2
    });
  });
});
