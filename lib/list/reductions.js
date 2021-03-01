import { _reduceVals } from "./internal/_reduce-vals";

/**
 * @param {Function} fn
 * @param {*} init
 * @param {[]} set
 */
export function reductions(fn, init, set) {
  let { count, coll, acc } = _reduceVals(init, set);

  return function () {
    if (count < coll.length) {
      let cur = coll[count];
      count += 1;
      acc = fn(acc, cur);
      return acc;
    }
  };
}
