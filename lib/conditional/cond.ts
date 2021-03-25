import { spec } from "../spec/spec";
import { even$ } from "../math/even$";
import { function$ } from "../generic/function$";

export const ELSE = "else";

export function cond(...rest: Array<any>) {
  if (rest.length === 0) {
    return undefined;
  }
  spec({ func: "cond", spec: { argumentLength: even$(rest.length) } });
  let i = 0;
  while (i < rest.length) {
    const predicate = rest[i];
    if (function$(predicate) ? predicate() : predicate) {
      const winner = rest[i + 1];
      return function$(winner) ? winner() : winner;
    }
    i = i + 2;
  }
}
