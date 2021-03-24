const { cat } = require("../../lib/regexp/cat");

describe("car", function () {
  it("should cat", function () {
    const regexSet = cat({ a: /a/, b: /b/ });
    const result = regexSet(["ab", "bc"]);
    expect(JSON.stringify(result)).toEqual(
      JSON.stringify([
        { a: ["a"], b: ["b"] },
        { a: null, b: ["b"] }
      ])
    );
  });
});
