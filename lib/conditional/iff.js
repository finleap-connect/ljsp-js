import { runFnOrGetValue } from "./internal/run-fn-or-get-value";

/**
 * @param {Function | *} condition
 * @param {Function | *} ifTrue
 * @param {Function | *} ifFalse
 * @returns {*}
 */
export function iff(condition, ifTrue, ifFalse) {
  return runFnOrGetValue(condition) ? runFnOrGetValue(ifTrue) : runFnOrGetValue(ifFalse);
}
