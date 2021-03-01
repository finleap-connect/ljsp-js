import { isFunctionSet } from "../generic/is-function-set";
import { spec } from "../spec/spec";

/**
 * @param rest
 * @returns {function(...[*]): boolean}
 */
export function everyPred(...rest) {
  spec({ func: "everyPred", spec: { typeIsFunction: isFunctionSet(rest) } });
  return (...args) => args.every((arg) => rest.every((fn) => Boolean(fn(arg)) === true));
}
