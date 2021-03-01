import { isEmpty, random } from "lodash";
import { float$ } from "../math/float$";
import { lt$ } from "../math/lt$";
import { spec } from "../spec/spec";

/**
 * Returns items from coll with random probability of prob (0.0 - 1.0)
 * Returns a partially-applied function when no collection is provided.
 * @param {number} prob
 * @param {[]} set
 */
export function randomSample(prob, set = []) {
  spec({
    func: "randomSample",
    spec: { probIsFloat: float$(prob), setIsArray: Array.isArray(set) }
  });

  function run(coll) {
    return coll.filter(() => {
      return lt$(random(1), prob);
    });
  }

  return isEmpty(set) ? run(set) : run;
}
