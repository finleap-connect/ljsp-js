import { toPairs } from "lodash";
import { TCollection } from "../types/t-collection";

/**
 * @param {[]} set
 * @returns {[string, unknown]}
 */
export function last(set: TCollection) {
  // @ts-ignore
  const coll = Array.isArray(set) ? set : toPairs(set);
  return coll[coll.length - 1];
}
