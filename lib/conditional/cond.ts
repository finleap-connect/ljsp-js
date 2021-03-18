import { chunk, isFunction } from "lodash";
import { first } from "../list/first";
import { spec } from "../spec/spec";
import { even$ } from "../math/even$";
import { eq } from "../generic/eq";

export const ELSE = "else";

/**
 * @param {*} rest
 * @returns {*}
 */
export function cond(...rest: Array<any>) {
  if (eq(rest.length, 0)) {
    return undefined;
  }
  spec({ func: "cond", spec: { argumentLength: even$(rest.length) } });
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
