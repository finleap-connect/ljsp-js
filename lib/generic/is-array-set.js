import { spec } from "../spec/spec";
import { isTypedSet } from "./is-typed-set";

/**
 * @param {[]} set
 * @returns {Boolean}
 */
export function isArraySet(set) {
  spec({ func: "isArraySet", spec: { setIsArray: Array.isArray(set) } });
  return isTypedSet(set, (item) => Array.isArray(item));
}
