/**
 * @param {Function} fn
 * @param {*} init
 * @param {Function} it
 * @returns {*}
 */
import { _reduceVals } from "./internal/_reduce-vals";

export function reduceIt(fn, init, it) {
  let { acc } = _reduceVals(init, it);
  let cur;
  while ((cur = it())) {
    acc = fn(acc, cur);
  }
  return acc;
}
