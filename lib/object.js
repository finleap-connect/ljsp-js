import isFunction from "lodash/isFunction";
import isObject from "lodash/isObject";
import cloneDeep from "lodash/cloneDeep";
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


