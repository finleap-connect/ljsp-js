import { everyPred } from "../../lib/conditional";

describe("everyPred", () => {
  const isGtZeroIntMultipleTwo = everyPred(
    (a: unknown) => Number.isInteger(a),
    (a: number) => a > 0,
    (a: number) => a % 2 === 0
  );

  it("evaluates every predicates to truthy, returns true", () => {
    expect(isGtZeroIntMultipleTwo(2, 4, 6, 8, 20)).toBeTruthy();
  });
  it("evaluates predicates to truthy, encounters falsy, returns false", () => {
    expect(isGtZeroIntMultipleTwo(2, 5, 6, 8, 20)).not.toBeTruthy();
  });
});
