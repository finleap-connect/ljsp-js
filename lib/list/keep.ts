import { void$ } from "../generic/void$";
import { reduceKv } from "./reduce-kv";

/**
 * `keep` can be used to return a non-nullish result of fn(set).
 * If `set` is not passed, returns a transducer function `fn` that
 * takes `set` as an argument.
 * @param {Function} fn
 * @param {*[]} set
 * @return {*[]|(function(*=): *)}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'fn' implicitly has an 'any' type.
export function keep(fn, set) {
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'acc' implicitly has an 'any' type.
  function filter(acc, key, value) {
    let val = fn(value);
    if (!void$(val)) acc.push(val);
    return acc;
  }

  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'arg' implicitly has an 'any' type.
  function run(arg) {
    return reduceKv(filter, [], arg);
  }

  if (!set) {
    return run;
  }
  return run(set);
}
