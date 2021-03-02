import { isObject, toPairs } from "lodash";
import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @returns {[string, unknown]}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function last(set) {
  spec({ func: "butLast", spec: { setIsArrayOrObject: Array.isArray(set) || isObject(set) } });

  const coll = Array.isArray(set) ? set : toPairs(set);
  return coll[coll.length - 1];
}
