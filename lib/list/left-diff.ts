import { spec } from "../spec/spec";

/**
 * @param {[]} left
 * @param {[]} right
 * @returns {[]}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'left' implicitly has an 'any' type.
export function leftDiff(left, right) {
  spec({
    func: "leftDiff",
    spec: { leftIsArray: Array.isArray(left), rightIsArray: Array.isArray(right) }
  });
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'x' implicitly has an 'any' type.
  return right.filter((x) => !left.includes(x));
}
