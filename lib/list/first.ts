import { spec } from "../spec/spec";
import { nth } from "./nth";

/**
 * Returns the first element of an Array
 * @param set
 * @returns {*}
 */
export function first(set: Array<any>) {
  spec({ func: "first", spec: { setIsArray: Array.isArray(set) } });
  return nth(set, 0);
}
