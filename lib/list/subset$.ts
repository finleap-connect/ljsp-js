/**
 * @param {[]} set
 * @param {[]} subset
 * @returns {*}
 */
export function subset$(set: any[], subset: any[]) {
  return subset.every((item) => set.includes(item));
}
