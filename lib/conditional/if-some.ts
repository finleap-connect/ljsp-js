import { runFnOrGetValue } from "./internal/run-fn-or-get-value";

/**
 * @param value
 * @param ifTrue
 * @param ifFalse
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
export function ifSome(value, ifTrue, ifFalse) {
  if (value == null) {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 1.
    return runFnOrGetValue(ifFalse);
  } else {
    return runFnOrGetValue(ifTrue, value);
  }
}
