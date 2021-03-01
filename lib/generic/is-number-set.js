import { isNumber } from "lodash";
import { isTypedSet } from "./is-typed-set";

/**
 * @param {[]} set
 * @returns {Boolean}
 */
export function isNumberSet(set) {
  return isTypedSet(set, isNumber);
}
