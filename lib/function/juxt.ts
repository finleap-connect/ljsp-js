import { isFunctionSet } from "../generic/is-function-set";
import { spec } from "../spec/spec";

/**
 * @param {*} rest
 * @returns {function(...[*]=): unknown}
 */
// @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'rest' implicitly has an 'any[]' ty... Remove this comment to see the full error message
export function juxt(...rest) {
  spec({ func: "juxt", spec: { argsAreFunctions: isFunctionSet(rest) } });
  // @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'args' implicitly has an 'any[]' ty... Remove this comment to see the full error message
  return function (...args) {
    return rest.reduce((acc, cur) => {
      const result = cur.apply({}, args);
      acc.push(result);
      return acc;
    }, []);
  };
}
