const { nth } = require("./nth");

describe("nth", function () {
  it("should return the nth item in a set", function () {
    expect(nth([1, 2, 3, 4, 5], 3)).toBe(4);
  });
  it("should return a default item, if one is not found", function () {
    expect(nth([1, 2, 3, 4, 5], 6, "default")).toBe("default");
  });
});
