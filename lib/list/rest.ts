import { spec } from "../spec/spec";
import { object$ } from "../generic/object$";
import { TAnyObject } from "../types/t-any-object";

/**
 * @param {[]} set
 * @returns {*}
 */
export function rest(set: Array<any> | TAnyObject) {
  spec({ func: "rest", spec: { setIsArrayOrObject: object$(set) } });
  set = Array.isArray(set) ? set : Object.entries(set);
  // @ts-ignore
  return set.slice(1);
}
