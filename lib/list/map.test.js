const { reduce } = require("./reduce");
const { inc } = require("../math");
const { add } = require("../math");
const { map } = require("./map");

describe("map", () => {
  it("should map one set", () => {
    expect(map(inc, [1, 2, 3])).toEqual([2, 3, 4]);
  });
  it("should map two sets", () => {
    expect(map(add, [1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
  });
  it("should map multiple sets", () => {
    expect(map(add, [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12])).toEqual([22, 26, 30]);
  });
  it("should return a transducer that works with LJSP's `reduce` if given one argument", () => {
    const transducer = map(inc);
    const reducer = transducer((a, c) => a.concat([c]));
    const result = reduce(reducer, [], [1, 2, 3, 4, 5]);
    expect(result).toEqual([2, 3, 4, 5, 6]);
  });
  it("should return a transducer that works with `Array.prototype.reduce` if given one argument", () => {
    const transducer = map(inc);
    const reducer = transducer((a, c) => a.concat([c]));
    const result = [1, 2, 3, 4, 5].reduce(reducer, []);
    expect(result).toEqual([2, 3, 4, 5, 6]);
  });
});
