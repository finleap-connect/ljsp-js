import { spec } from "../spec";
import { numberSet$ } from "../generic";

export function add(...rest: Array<number>) {
  spec({ func: "add", spec: { argsAreNums: numberSet$(rest) } });
  if (rest.length === 0) {
    return 0;
  }
  return rest.reduce((acc, cur) => {
    return acc + cur;
  });
}
