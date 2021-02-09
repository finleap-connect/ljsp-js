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

/**
 * `keep` can be used to  return a non nullish result of fn(set).
 * If set is not passed, returns a transducer function `fn` which takes the
 * data as argument
 * @param {Function} fn
 * @param {*[]} set
 * @return {*[]|(function(*=): *)}
 */
export function keep(fn, set) {
  spec({
    func: "keep",
    spec: {
      fnIsValid: isFunction(fn),
      restIsValid: isUndefined(set) || Array.isArray(set)
    }
  });
  function filter(acc, key, value) {
    let val = fn(value);
    if (!void$(val)) acc.push(val);
    return acc;
  }

  function run(arg) {
    return reduceKv(filter, [], arg);
  }

  if (!set) {
    return run;
  }
  return run(set);
}
