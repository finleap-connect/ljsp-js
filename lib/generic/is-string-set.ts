import { spec } from "../spec/spec";
import { isString } from "./is-string";
import { isTypedSet } from "./is-typed-set";

/**
 * @param {[]} set
 * @returns {Boolean}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function isStringSet(set) {
  spec({ func: "isStringSet", spec: { setIsArray: Array.isArray(set) } });
  return isTypedSet(set, isString);
}
