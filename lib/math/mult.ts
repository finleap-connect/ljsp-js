import { spec } from "../spec/spec";
import { isNumberSet } from "../generic/is-number-set";

export function mult(...rest: Array<number>): number {
  spec({ func: "mult", spec: { argsAreNums: isNumberSet(rest) } });
  if (rest.length === 0) {
    return 1;
  }
  return rest.reduce((acc, cur) => {
    return acc * cur;
  });
}
