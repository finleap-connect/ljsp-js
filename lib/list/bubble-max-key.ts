// @ts-nocheck
import { maxKey } from "../generic";
import { cons } from "./cons";
import { remove } from "./remove";
import { identical$ } from "./identical$";

/**
 * Move a maximal element of coll according to fn k (which returns a
 *   number) to the front of coll.
 */
export function bubbleMaxKey(k, coll) {
  let max = maxKey(k, coll);
  return cons(
    max,
    remove((max) => (key) => identical$(max, key), coll)
  );
}
