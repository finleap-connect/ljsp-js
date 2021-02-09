import { isFunction } from "lodash";
import { isFunctionSet, void$ } from "./generic";
import { spec } from "./spec";
import { reduceKv } from "./list";

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
