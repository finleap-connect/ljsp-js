import { empty$ } from "../generic/empty$";
import { rest } from "./rest";
import { eq } from "../generic/eq";
import { or } from "../conditional/or";
import { TAnyObject } from "../types/t-any-object";

/**
 * @param {[]} set
 * @returns {*}
 */
export function next(set: Array<any> | TAnyObject) {
  set = Array.isArray(set) ? set : Object.entries(set);
  // @ts-ignore
  return or(empty$(set), () => eq(set.length, 1)) ? undefined : rest(set);
}
