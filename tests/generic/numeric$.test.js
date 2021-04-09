const { numeric$ } = require("../../lib/generic/numeric$");

describe("numeric$", function () {
  it("returns true if the value can be converted to a number", function () {
    expect(numeric$("200")).toBe(true);
  });

  it("returns false if the value can NOT be converted to a number", function () {
    expect(numeric$("20ABC0")).toBe(false);
  });
});
