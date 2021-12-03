import { ownMethods } from "../../lib/object/own-methods";

describe("ownMethods", function () {
  it("should return an Array of an Object's methods", function () {
    expect(
      ownMethods({
        one() {},
        two() {},
        three() {},
        name: "Pete"
      }).length
    ).toBe(3);
  });
  it("should return an empty Array if an Object has no methods", function () {
    expect(
      ownMethods({
        name: "Pete"
      })
    ).toEqual([]);
  });
});
