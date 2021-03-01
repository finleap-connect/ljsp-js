import { spec } from "../spec/spec";
import { isNumberSet } from "../generic/is-number-set";

export function div(...rest: Array<number>) {
  spec({ func: "div", spec: { validArgNum: rest.length > 0, argsAreNums: isNumberSet(rest) } });
  if (rest.length === 1) {
    return 1 / rest[0];
  }
  return rest.reduce((acc, cur) => {
    return acc / cur;
  });
}
