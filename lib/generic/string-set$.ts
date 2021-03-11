import { spec } from "../spec/spec";
import { string$ } from "./string$";
import { typedSet$ } from "./internal/typed-set$";

/**
 * @param {[]} set
 * @returns {Boolean}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function stringSet$(set) {
  spec({ func: "isStringSet", spec: { setIsArray: Array.isArray(set) } });
  return typedSet$(set, string$);
}
