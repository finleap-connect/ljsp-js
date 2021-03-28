/**
 * @param {*} rest
 * @returns {undefined|*}
 */
import { runFnOrGetValue } from "./internal/run-fn-or-get-value";

export function or(...rest: Array<any>) {
  if (rest.length === 0) return undefined;

  let result;
  for (let x = 0; x < rest.length; x++) {
    const current = rest[x];
    result = runFnOrGetValue(current);
    if (result) {
      return result;
    }
  }
  return result;
}
