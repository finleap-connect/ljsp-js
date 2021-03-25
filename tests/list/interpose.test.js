const { reduce } = require("../../lib/list/reduce");
const { interpose } = require("../../lib/list/interpose");

describe("interpose", () => {
  it("should interpose an element between elements in an Array", () => {
    expect(interpose(", ", ["one", "two", "three"])).toEqual(["one", ", ", "two", ", ", "three"]);
  });
  it("should return a transducer that works with LJSP's `reduce` if given one argument", () => {
    const transducer = interpose("-");
    const reducer = transducer((a, c) => a.concat([c]));
    const result = reduce(reducer, [], [1, 2, 3]);
    expect(result).toEqual([1, "-", 2, "-", 3]);
  });
  it("should return a transducer that works with native `Array.prototype.reduce` if given one argument", () => {
    const transducer = interpose("-");
    const reducer = transducer((a, c) => a.concat([c]));
    const result = [1, 2, 3].reduce(reducer, []);
    expect(result).toEqual([1, "-", 2, "-", 3]);
  });
});
