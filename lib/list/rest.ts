import { spec } from "../spec/spec";
import { object$ } from "../generic/object$";
import { AnyObject } from "../types/any-object";

/**
 * @param {[]} set
 * @returns {*}
 */
export function rest(set: Array<any> | AnyObject) {
  spec({ func: "rest", spec: { setIsArrayOrObject: object$(set) } });
  set = Array.isArray(set) ? set : Object.entries(set);
  // @ts-ignore
  return set.slice(1);
}
