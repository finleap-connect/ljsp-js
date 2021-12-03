import { not } from"../../lib/generic/not";

describe("not", function () {
  it("should negate something", function () {
    expect(not(true)).toBe(false);
  });
});
