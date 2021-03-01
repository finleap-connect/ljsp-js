/**
 * @param {Function} fn
 * @param {Function} it
 * @returns {function(): (*|undefined)}
 */
import { iterator } from "./iterator";

export function filterIt(fn, it) {
  const set = [];
  let x;
  while ((x = it())) {
    const result = fn(x);
    if (result) {
      set.push(x);
    }
  }
  return iterator(set);
}
