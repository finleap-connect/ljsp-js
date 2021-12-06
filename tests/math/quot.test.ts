import { quot } from "../../lib/math/quot";

describe("quot", function () {
  it("should return the quotient of dividing a numerator by a denominator", function () {
    expect(quot(10, 3)).toBe(3);
  });
});
