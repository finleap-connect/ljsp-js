import { some } from "../../lib/list/some";

describe("some", function () {
  it("should return the first logical true value of (pred x) for any x in set", function () {
    expect(some((item) => item > 1, [1, 4, 3, 5, 7])).toBe(4);
  });
});
