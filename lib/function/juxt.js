import { isFunctionSet } from "../generic/is-function-set";
import { spec } from "../spec/spec";

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
