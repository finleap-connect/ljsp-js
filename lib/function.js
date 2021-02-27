import { isFunction } from "lodash";
import { isFunctionSet, notEq } from "./generic";
import { extendArray, fillVoid } from "./list";
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
export function complement(fn) {
  spec({ func: "complement", spec: { fnIsFunction: isFunction(fn) } });
  return function (...rest) {
    return !fn(...rest);
  };
}

/**
 * Takes a function f, and returns a function that calls f, replacing
 * a nil first argument to f with the supplied value x. Higher arity
 * versions can replace arguments in the second and third
 * positions (y, z). Note that the function f can take any number of
 * arguments, not just the one(s) being nil-patched.
 * @param {function} fn
 * @param {*} template
 * @returns {function(...[*]=): *}
 */
export function fNil(fn, ...template) {
  spec({ func: "fNil", spec: { fnIsFunction: isFunction(fn) } });
  return function (...source) {
    if (notEq(source.length, template.length)) {
      extendArray(source, template.length);
    }
    return fn.apply(null, fillVoid(source, template));
  };
}
