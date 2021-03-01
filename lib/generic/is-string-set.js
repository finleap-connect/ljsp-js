import { spec } from "../spec/spec";
import { isString } from "./is-string";
import { isTypedSet } from "./is-typed-set";

/**
 * @param {[]} set
 * @returns {Boolean}
 */
export function isStringSet(set) {
  spec({ func: "isStringSet", spec: { setIsArray: Array.isArray(set) } });
  return isTypedSet(set, isString);
}
