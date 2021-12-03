import { inc } from "../../lib/math/inc";

describe("inc", function () {
  it("should increment a number", function () {
    expect(inc(1)).toBe(2);
  });
});
