import { runFnOrGetValue } from "./internal/run-fn-or-get-value";

/**
 * @param {Function | *} condition
 * @param {Function | *} ifTrue
 * @param {Function | *} ifFalse
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'condition' implicitly has an 'any' type... Remove this comment to see the full error message
export function iff(condition, ifTrue, ifFalse) {
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
  return runFnOrGetValue(condition) ? runFnOrGetValue(ifTrue) : runFnOrGetValue(ifFalse);
}
