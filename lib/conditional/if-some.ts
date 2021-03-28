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
    return runFnOrGetValue(ifFalse);
  } else {
    return runFnOrGetValue(ifTrue, value);
  }
}
