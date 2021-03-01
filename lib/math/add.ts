import { spec } from "../spec/spec";
import { isNumberSet } from "../generic/is-number-set";

export function add(...rest: Array<number>) {
  spec({ func: "add", spec: { argsAreNums: isNumberSet(rest) } });
  if (rest.length === 0) {
    return 0;
  }
  return rest.reduce((acc, cur) => {
    return acc + cur;
  });
}
