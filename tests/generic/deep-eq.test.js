const { deepEq } = require("../../lib/generic/deep-eq");

describe("deepEq", function () {
  it("compares arrays", function () {
    let a = [1, 2];
    let b = [1, 2];
    expect(deepEq([a, b])).toBeTruthy();
  });
  it("compares objects", function () {
    let a = { c: "b" };
    let b = { a: "b" };
    expect(deepEq([a, b])).toBeTruthy();
  });
});
