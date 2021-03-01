import { spec } from "../spec/spec";
import { nth } from "./nth";

/**
 * Same as (first (next x))
 * @param set
 * @returns {*}
 */
export function second(set) {
  spec({ func: "second", spec: { setIsArray: Array.isArray(set) } });
  return nth(set, 1);
}
