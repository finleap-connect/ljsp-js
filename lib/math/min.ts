import { spec } from "../spec/spec";
import { isNumberSet } from "../generic/is-number-set";

export function min(...rest: Array<number>): number {
  spec({ func: "min", spec: { argsAreNumbers: isNumberSet(rest) } });
  return Math.min(...rest);
}
