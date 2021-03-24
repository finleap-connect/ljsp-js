import { first } from "../list/first";
import { spec } from "../spec/spec";
import { even$ } from "../math/even$";
import { eq } from "../generic/eq";
import { partition } from "../list/partition";
import { function$ } from "../generic/function$";

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
  const expressions = partition(2, rest);
  for (let i = 0; i < expressions.length; i++) {
    const cur = expressions[i];
    const predicate = first(cur);
    if (function$(predicate) ? predicate() : predicate) {
      const winner = cur[1];
      return function$(winner) ? winner() : winner;
    }
  }
}
