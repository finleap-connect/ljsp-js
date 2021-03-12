const { fillVoid } = require("./fill-void");

describe("fillVoid", function () {
  it("should fill void", function () {
    const source = [1, 2, null, null];
    const template = ["fill", "void", "fill", "void"];
    expect(fillVoid(source, template)).toEqual([1, 2, "fill", "void"]);
  });
});
