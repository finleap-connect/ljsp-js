import { isFunction } from "lodash";
import { isFunctionSet } from "./generic";
import { spec } from "./spec";

/**
 * @param {*} rest
 * @returns {function(...[*]=): unknown}
 */
export function juxt(...rest) {
  spec({ func: "juxt", spec: { argsAreFunctions: isFunctionSet(rest) } });
  return function (...args) {
    return rest.reduce((acc, cur) => {
      const result = cur.apply({}, args);
      acc.push(result);
      return acc;
    }, []);
  };
}

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
export function trampoline(fn, ...rest) {
  spec({ func: "trampoline", spec: { fnIsFunction: isFunction(fn) } });
  let result = fn(...rest);
  while (_.isFunction(result)) {
    result = result();
  }
  return result;
}

/**
 * Takes a fn f and returns a fn that takes the same arguments as f,
 * has the same effects, if any, and returns the opposite truth value.
 * @param fn
 */
export const complement = (fn) => (...rest) => {
  return !fn(...rest);
};
