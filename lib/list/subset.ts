import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @param {[]} subset
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function subset(set, subset) {
  spec({
    func: "subset",
    spec: { setIsArray: Array.isArray(set), subsetIsArray: Array.isArray(subset) }
  });
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
  return subset.every((item) => set.includes(item));
}
