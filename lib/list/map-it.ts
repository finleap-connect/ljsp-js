/**
 *
 * @param {Function} fn
 * @param {Function} it
 * @returns {function(): (*|undefined)}
 */
import { iterator } from "./iterator";

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'fn' implicitly has an 'any' type.
export function mapIt(fn, itr) {
  const set = [];
  let x;
  while ((x = itr())) {
    set.push(fn(x));
  }
  return iterator(set);
}
