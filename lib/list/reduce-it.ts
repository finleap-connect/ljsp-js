/**
 * @param {Function} fn
 * @param {*} init
 * @param {Function} itr
 * @returns {*}
 */
import { _reduceVals } from "./internal/_reduce-vals";

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'fn' implicitly has an 'any' type.
export function reduceIt(fn, init, itr) {
  let { acc } = _reduceVals(init, itr);
  let cur;
  while ((cur = itr())) {
    acc = fn(acc, cur);
  }
  return acc;
}
