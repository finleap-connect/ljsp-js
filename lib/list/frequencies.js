import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @returns {*}
 */
export function frequencies(set) {
  spec({ func: "frequencies", spec: { setIsArray: Array.isArray(set) } });
  return set.reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur)) {
      acc[cur] = acc[cur] + 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
}
