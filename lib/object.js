import isFunction from "lodash/isFunction";
import isObject from "lodash/isObject";
import cloneDeep from "lodash/cloneDeep";
import get from "lodash/get";
import set from "lodash/set";
import { spec } from "./spec";

/**
 * @param map
 * @param fn
 * @param rest
 * @returns {*}
 */
export function swap(map, fn, ...rest) {
  spec({
    func: "swap",
    spec: { mapIsObject: isObject(map) && !isFunction(map), fnIsFunction: isFunction(fn) }
  });
  const clone = cloneDeep(map);
  return fn(clone, ...rest);
}

/**
 * @param {{}} coll
 * @param {string[]} keys
 * @param {Function} fn
 * @param {*} rest
 * @returns {*}
 */
export function updateIn(coll, keys, fn, ...rest) {
  const propertyPath = keys.join(".")
  const updateValue = get(coll, propertyPath);
  const result = fn(updateValue, ...rest);
  return swap(coll, set, propertyPath, result);
}
