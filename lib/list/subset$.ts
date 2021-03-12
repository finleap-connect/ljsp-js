import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @param {[]} subset
 * @returns {*}
 */
export function subset$(set: Array<any>, subset: Array<any>) {
  spec({
    func: "subset",
    spec: { setIsArray: Array.isArray(set), subsetIsArray: Array.isArray(subset) }
  });
  return subset.every((item) => set.includes(item));
}
