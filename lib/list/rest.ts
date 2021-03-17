import { spec } from "../spec/spec";
import { TAnyObject } from "../types/t-any-object";
import { objectLike$ } from "../generic/object-like$";

/**
 * @param {[]} set
 * @returns {*}
 */
export function rest(set: Array<any> | TAnyObject) {
  spec({ func: "rest", spec: { setIsArrayOrObject: objectLike$(set) } });
  set = Array.isArray(set) ? set : Object.entries(set);
  // @ts-ignore
  return set.slice(1);
}
