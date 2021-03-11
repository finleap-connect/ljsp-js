import { spec } from "../spec";

/**
 * Returns the first element of an Array
 * @param set
 * @returns {*}
 */
export function first(set: Array<any>) {
  spec({ func: "first", spec: { setIsArray: Array.isArray(set) } });
  return set[0];
}
