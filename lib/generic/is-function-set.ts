import { isFunction } from "lodash";
import { spec } from "../spec/spec";
import { isTypedSet } from "./is-typed-set";

/**
 * @param {[]} set
 * @returns {Boolean}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function isFunctionSet(set) {
  spec({ func: "isFunctionSet", spec: { setIsArray: Array.isArray(set) } });
  return isTypedSet(set, (item) => isFunction(item));
}
