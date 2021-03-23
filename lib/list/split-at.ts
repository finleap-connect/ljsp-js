import { take } from "./take";
import { takeLast } from "./take-last";
import { TCollection } from "../types/t-collection";
import { Collection } from "../internal/collection";

/**
 * @param {number} num
 * @param {[]} set
 */
export function splitAt(num: number, set: TCollection) {
  const _set = Collection(set, false);
  return [take(num, _set), takeLast(_set.count - num, set)];
}
