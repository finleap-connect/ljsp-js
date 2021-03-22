// @ts-nocheck
import { TCollection } from "../types/t-collection";
import { Collection } from "../internal/collection";

/**
 * @param {[]} set
 * @returns {*}
 */
export function rest(set: TCollection) {
  const _set = Collection(set);
  return _set.slice(1);
}
