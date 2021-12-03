import { M } from "../../lib/object/M";

describe("M", function () {
  it("should return a Map", function () {
    // prettier-ignore
    const test = M(
      "one", 1,
      "two", 2,
      "three", 3,
      4, 4);

    const expected = new Map([
      ["one", 1],
      ["two", 2],
      ["three", 3],
      [4, 4]
    ]);
    expect(test).toEqual(expected);
  });
});
