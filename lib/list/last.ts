import { toPairs } from "lodash";
import { spec } from "../spec/spec";
import { objectLike$ } from "../generic/object-like$";
import { TCollection } from "../types/t-collection";

/**
 * @param {[]} set
 * @returns {[string, unknown]}
 */
export function last(set: TCollection) {
  spec({ func: "butLast", spec: { setIsArrayOrObject: objectLike$(set) } });

  // @ts-ignore
  const coll = Array.isArray(set) ? set : toPairs(set);
  return coll[coll.length - 1];
}
