const { _eq } = require("./_eq");

describe("eq", function () {
  const strComparator = (a, b) => a === b;
  it("returns true when only one argument", function () {
    expect(_eq(["a"], strComparator)).toBeTruthy();
  });
  it("returns false when only comparator returns true", function () {
    expect(_eq(["a", "a"], strComparator)).not.toBeTruthy();
  });
  it("returns true when only comparator returns false", function () {
    expect(_eq(["a", "b", "c"], strComparator)).toBeTruthy();
  });
});
