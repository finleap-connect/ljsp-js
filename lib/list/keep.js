import { isFunction, isUndefined } from "lodash";
import { void$ } from "../generic/void$";
import { spec } from "../spec/spec";
import { reduceKv } from "./reduce-kv";

/**
 * `keep` can be used to return a non-nullish result of fn(set).
 * If `set` is not passed, returns a transducer function `fn` that
 * takes `set` as an argument.
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
