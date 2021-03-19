import { TAnyObject } from "../types/t-any-object";

/**
 * @param {[]} set
 * @returns {*}
 */
export function rest(set: Array<any> | TAnyObject) {
  set = Array.isArray(set) ? set : Object.entries(set);
  // @ts-ignore
  return set.slice(1);
}
