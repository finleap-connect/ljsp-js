const { prune } = require("../../lib/object/prune");

describe("prune", function () {
  it("should prune null or undefined props from an object", function () {
    const map = { one: null, bob: "name", leipzig: "city", age: undefined };

    expect(prune(map)).toEqual({
      bob: "name",
      leipzig: "city"
    });
  });
});
