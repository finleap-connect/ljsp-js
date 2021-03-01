import { spec } from "../spec/spec";
import { nth } from "./nth";

/**
 * Returns the first element of an Array
 * @param set
 * @returns {*}
 */
export function first(set) {
  spec({ func: "second", spec: { setIsArray: Array.isArray(set) } });
  return nth(set, 0);
}
