// @ts-ignore
import set from "lodash.set";
import { swap } from "./swap";
import { get } from "../list/get";

/**
 * @param {{}} coll
 * @param {string[]} keys
 * @param {Function} fn
 * @param {*} rest
 * @returns {*}
 */
export function updateIn(coll: any, keys: any, fn: Function, ...rest: any) {
  const propertyPath = keys.join(".");
  const updateValue = get(coll, propertyPath);
  const result = fn(updateValue, ...rest);
  return swap(coll, set, propertyPath, result);
}
