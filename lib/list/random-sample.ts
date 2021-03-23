import { isEmpty } from "lodash";
import { lt$ } from "../math/lt$";
import { rand } from "../generic/rand";

/**
 * Returns items from coll with random probability of prob (0.0 - 1.0)
 * Returns a partially-applied function when no collection is provided.
 * @param {number} prob
 * @param {[]} set
 */
export function randomSample(prob: number, set: any[] = []) {
  function run(coll: any[]) {
    return coll.filter(() => {
      return lt$(Math.floor(rand(prob)), prob);
    });
  }

  return isEmpty(set) ? run(set) : run;
}
