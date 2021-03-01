import { isFunction } from "lodash";
import { spec } from "../spec/spec";

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
