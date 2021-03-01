import { isFunction } from "lodash";
import { notEq } from "../generic/not-eq";
import { extendArray } from "../list/extend-array";
import { fillVoid } from "../list/fill-void";
import { spec } from "../spec/spec";

/**
 * Takes a function f, and returns a function that calls f, replacing
 * a nil first argument to f with the supplied value x. Higher arity
 * versions can replace arguments in the second and third
 * positions (y, z). Note that the function f can take any number of
 * arguments, not just the one(s) being nil-patched.
 * @param fn
 * @param template
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
