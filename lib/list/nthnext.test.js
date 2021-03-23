const { nthnext } = require("./nth-next");

describe("nthnext", function () {
  it("should get the nthnext of an array", function () {
    expect(nthnext([1, 2, 3, 4, 5, 6, 7], 4)).toEqual([5, 6, 7]);
  });
  it("should get the nthnext of an Object", function () {
    expect(nthnext({ one: 1, two: 2, three: 3, four: 4, five: 5 }, 2)).toEqual({ three: 3, four: 4, five: 5 });
  });
  it("should get the nthnext of a Set", function () {
    expect(nthnext(new Set([1, 2, 3, 4, 5, 6, 7]), 4)).toEqual(new Set([5, 6, 7]));
  });
  it("should get the nthnext of a Map", function () {
    expect(
      nthnext(
        new Map([
          [1, 2],
          [3, 4],
          [5, 6]
        ]),
        2
      )
    ).toEqual(new Map([[5, 6]]));
  });
  it("should get the nthnext of a string", function () {
    expect(nthnext("1234567", 4)).toEqual("567");
  });
});
