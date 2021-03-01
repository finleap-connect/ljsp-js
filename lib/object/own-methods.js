import { isFunction, isObject } from "lodash";
import { spec } from "../spec/spec";

/**
 * Returns all the own methods obj in an Array
 * @param {{}} obj
 * @returns {Function[]}
 */
export function ownMethods(obj) {
  spec({ func: "ownMethods", spec: { objIsObject: isObject(obj) } });
  return Object.values(obj).filter((item) => isFunction(item));
}
