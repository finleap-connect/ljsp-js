const { cycle } = require("./cycle");

describe("cycle", function () {
  it("should generate elements", function () {
    const generator = cycle(["a", "b", "c"]);
    expect(generator()).toEqual("a");
    expect(generator()).toEqual("b");
    expect(generator()).toEqual("c");
    expect(generator()).toEqual("a");
    expect(generator()).toEqual("b");
    expect(generator()).toEqual("c");
  });
});
