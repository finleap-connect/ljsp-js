import { spec } from "../spec/spec";
import { numberSet$ } from "../generic/number-set$";

export function max(...rest: Array<number>): number {
  spec({ func: "max", spec: { argsAreNumbers: numberSet$(rest) } });
  return Math.max(...rest);
}
