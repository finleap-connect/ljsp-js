import { isFunction } from "lodash";
import { spec } from "../spec/spec";
import { isTypedSet } from "./is-typed-set";

/**
 * @param {[]} set
 * @returns {Boolean}
 */
export function isFunctionSet(set) {
  spec({ func: "isFunctionSet", spec: { setIsArray: Array.isArray(set) } });
  return isTypedSet(set, (item) => isFunction(item));
}
