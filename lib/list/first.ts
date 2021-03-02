import { spec } from "../spec/spec";
import { nth } from "./nth";

/**
 * Returns the first element of an Array
 * @param set
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function first(set) {
  spec({ func: "second", spec: { setIsArray: Array.isArray(set) } });
  return nth(set, 0);
}
