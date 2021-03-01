import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @returns {*}
 */
export function rest(set) {
  spec({ func: "rest", spec: { setIsArray: Array.isArray(set) } });
  return set.slice(1);
}
