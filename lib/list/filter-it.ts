/**
 * @param {Function} fn
 * @param {Function} it
 * @returns {function(): (*|undefined)}
 */
import { iterator } from "./iterator";

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'fn' implicitly has an 'any' type.
export function filterIt(fn, itr) {
  const set = [];
  let x;
  while ((x = itr())) {
    const result = fn(x);
    if (result) {
      set.push(x);
    }
  }
  return iterator(set);
}
