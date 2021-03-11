import { spec } from "../spec/spec";
import { numberSet$ } from "../generic/number-set$";

export function min(...rest: Array<number>): number {
  spec({ func: "min", spec: { argsAreNumbers: numberSet$(rest) } });
  return Math.min(...rest);
}
