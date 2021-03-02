import { isFunction } from "lodash";
import { spec } from "../spec/spec";

/**
 * `trampoline` can be used to convert recursive algorithms
 * without stack consumption. Calls `fn` with supplied args, if
 * any. If `fn` returns a function, calls that function with no
 * arguments, and continues to repeat, until the return value is
 * not a function, then returns that non-fn value. Note that if
 * you want to return a function as a final value, you must wrap
 * it in some data structure and unpack it after `trampoline`
 * returns.
 * @param {Function} fn
 * @param {*} rest
 * @returns {function(...[*]): *}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'fn' implicitly has an 'any' type.
export function trampoline(fn, ...rest) {
  spec({ func: "trampoline", spec: { fnIsFunction: isFunction(fn) } });
  let result = fn(...rest);
  // @ts-expect-error ts-migrate(2686) FIXME: '_' refers to a UMD global, but the current file i... Remove this comment to see the full error message
  while (_.isFunction(result)) {
    result = result();
  }
  return result;
}
