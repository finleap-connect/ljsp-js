import { isObject, toPairs } from "lodash";
import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @returns {[string, unknown]}
 */
export function last(set) {
  spec({ func: "butLast", spec: { setIsArrayOrObject: Array.isArray(set) || isObject(set) } });

  const coll = Array.isArray(set) ? set : toPairs(set);
  return coll[coll.length - 1];
}
