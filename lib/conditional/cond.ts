import { spec } from "../spec/spec";
import { even$ } from "../math/even$";
import { runFnOrGetValue } from "./internal/run-fn-or-get-value";
import { _loopArgPairs } from "../internal/_loop-arg-pairs";
import { ifYes } from "./if-yes";

export const ELSE = "else";

export function cond(...rest: Array<any>) {
  if (rest.length === 0) {
    return undefined;
  }
  spec({ func: "cond", spec: { argumentLength: even$(rest.length) } });
  return _loopArgPairs(rest, (predicate: any, winner: any) => {
    return ifYes(runFnOrGetValue(predicate), () => [runFnOrGetValue(winner)]);
  });
}
