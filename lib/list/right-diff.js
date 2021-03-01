import { spec } from "../spec/spec";

/**
 * @param {[]} left
 * @param {[]} right
 * @returns {[]}
 */
export function rightDiff(left, right) {
  spec({
    func: "rightDiff",
    spec: { leftIsArray: Array.isArray(left), rightIsArray: Array.isArray(right) }
  });
  return left.filter((x) => !right.includes(x));
}
