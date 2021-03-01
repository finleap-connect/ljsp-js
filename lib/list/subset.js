import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @param {[]} subset
 * @returns {*}
 */
export function subset(set, subset) {
  spec({
    func: "subset",
    spec: { setIsArray: Array.isArray(set), subsetIsArray: Array.isArray(subset) }
  });
  return subset.every((item) => set.includes(item));
}
