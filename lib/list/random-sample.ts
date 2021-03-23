import { random } from "lodash";
import { lt$ } from "../math/lt$";
import { empty$ } from "../generic/empty$";

/**
 * Returns items from coll with random probability of prob (0.0 - 1.0)
 * Returns a partially-applied function when no collection is provided.
 * @param {number} prob
 * @param {[]} set
 */
export function randomSample(prob: number, set = []) {
  function run(coll: any[]) {
    return coll.filter(() => {
      return lt$(random(1), prob);
    });
  }

  return empty$(set) ? run(set) : run;
}
