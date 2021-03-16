import { spec } from "../spec/spec";
import { empty$ } from "../generic/empty$";
import { rest } from "./rest";
import { object$ } from "../generic/object$";
import { eq } from "../generic/eq";
import { or } from "../conditional/or";
import { AnyObject } from "../types/any-object";

/**
 * @param {[]} set
 * @returns {*}
 */
export function next(set: Array<any> | AnyObject) {
  spec({ func: "next", spec: { setIsArrayOrObject: object$(set) } });
  set = Array.isArray(set) ? set : Object.entries(set);
  // @ts-ignore
  return or(empty$(set), () => eq(set.length, 1)) ? undefined : rest(set);
}
