import { spec } from "../spec/spec";
import { isNumberSet } from "../generic/is-number-set";

export function max(...rest: Array<number>): number {
  spec({ func: "max", spec: { argsAreNumbers: isNumberSet(rest) } });
  return Math.max(...rest);
}
