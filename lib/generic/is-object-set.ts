import { spec } from "../spec/spec";
import { isObject } from "./is-object";
import { isTypedSet } from "./is-typed-set";

/**
 * @param {[]} set
 * @returns {Boolean}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function isObjectSet(set) {
  spec({ func: "isObjectSet", spec: { setIsArray: Array.isArray(set) } });
  return isTypedSet(set, isObject);
}
