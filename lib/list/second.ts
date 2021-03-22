import { nth } from "./nth";

/**
 * Same as (first (next x))
 * @param set
 * @returns {*}
 */
export function second(set: any[]) {
  return nth(set, 1);
}
