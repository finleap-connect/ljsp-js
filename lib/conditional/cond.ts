import { chunk, isFunction } from "lodash";
import { first } from "../list/first";
import { spec } from "../spec/spec";

export const ELSE = "else";

/**
 * @param {*} rest
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'rest' implicitly has an 'any[]' ty... Remove this comment to see the full error message
export function cond(...rest) {
  if (rest.length === 0) {
    return undefined;
  }
  spec({ func: "cond", spec: { argumentLength: rest.length % 2 === 0 } });
  const expressions = chunk(rest, 2);
  for (let i = 0; i < expressions.length; i++) {
    const cur = expressions[i];
    const predicate = first(cur);
    if (isFunction(predicate) ? predicate() : predicate) {
      const winner = cur[1];
      return isFunction(winner) ? winner() : winner;
    }
  }
}
