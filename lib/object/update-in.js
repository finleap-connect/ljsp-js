import { get, isEmpty, isFunction, isObject, set } from "lodash";
import { spec } from "../spec/spec";
import { swap } from "./swap";

/**
 * @param {{}} coll
 * @param {string[]} keys
 * @param {Function} fn
 * @param {*} rest
 * @returns {*}
 */
export function updateIn(coll, keys, fn, ...rest) {
  spec({
    func: "updateIn",
    spec: {
      collIsObject: isObject(coll),
      fnIsFunction: isFunction(fn),
      keysIsArray: Array.isArray(keys),
      keysIsNotEmpty: !isEmpty(keys)
    }
  });
  const propertyPath = keys.join(".");
  const updateValue = get(coll, propertyPath);
  const result = fn(updateValue, ...rest);
  return swap(coll, set, propertyPath, result);
}
