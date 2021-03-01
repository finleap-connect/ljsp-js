/**
 *
 * @param {Function} fn
 * @param {Function} it
 * @returns {function(): (*|undefined)}
 */
import { iterator } from "./iterator";

export function mapIt(fn, it) {
  const set = [];
  let x;
  while ((x = it())) {
    set.push(fn(x));
  }
  return iterator(set);
}
