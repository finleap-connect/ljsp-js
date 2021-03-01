import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @param {*} rest
 * @returns {*[]}
 */
export function includes(set, ...rest) {
  spec({ func: "includes", spec: { setIsArray: Array.isArray(set) } });
  return rest.every((item) => set.includes(item));
}
