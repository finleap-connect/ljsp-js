import { spec } from "../spec/spec";
import { empty$ } from "../generic/empty$";
import { rest } from "./rest";
import { eq } from "../generic/eq";
import { or } from "../conditional/or";
import { TAnyObject } from "../types/t-any-object";
import { objectLike$ } from "../generic/object-like$";

/**
 * @param {[]} set
 * @returns {*}
 */
export function next(set: Array<any> | TAnyObject) {
  spec({ func: "next", spec: { setIsArrayOrObject: objectLike$(set) } });
  set = Array.isArray(set) ? set : Object.entries(set);
  // @ts-ignore
  return or(empty$(set), () => eq(set.length, 1)) ? undefined : rest(set);
}
