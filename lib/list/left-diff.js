import { spec } from "../spec/spec";

/**
 * @param {[]} left
 * @param {[]} right
 * @returns {[]}
 */
export function leftDiff(left, right) {
  spec({
    func: "leftDiff",
    spec: { leftIsArray: Array.isArray(left), rightIsArray: Array.isArray(right) }
  });
  return right.filter((x) => !left.includes(x));
}
