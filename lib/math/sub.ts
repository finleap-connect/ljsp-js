import { spec } from "../spec/spec";
import { numberSet$ } from "../generic/number-set$";

export function sub(...rest: Array<number>): number {
  spec({
    func: "subtract",
    spec: { validArgNum: rest.length > 0, argsAreNums: numberSet$(rest) }
  });
  if (rest.length === 1) {
    return -rest[0];
  }
  return rest.reduce((acc, cur) => {
    return acc - cur;
  });
}
