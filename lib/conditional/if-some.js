import { runFnOrGetValue } from "./internal/run-fn-or-get-value";

/**
 * @param value
 * @param ifTrue
 * @param ifFalse
 * @returns {*}
 */
export function ifSome(value, ifTrue, ifFalse) {
  if (value == null) {
    return runFnOrGetValue(ifFalse);
  } else {
    return runFnOrGetValue(ifTrue, value);
  }
}
