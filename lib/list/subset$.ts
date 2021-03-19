/**
 * @param {[]} set
 * @param {[]} subset
 * @returns {*}
 */
export function subset$(set: Array<any>, subset: Array<any>) {
  return subset.every((item) => set.includes(item));
}
