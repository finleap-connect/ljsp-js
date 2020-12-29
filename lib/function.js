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
