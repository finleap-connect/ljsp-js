import { spec } from "../spec";
import { numberSet$ } from "../generic/number-set$";
import { empty$ } from "../generic/empty$";
import { not } from "../generic/not";

export function disj(set: Array<any>, ...rest: Array<any>) {
  spec({ func: "disj", spec: { setIsArray: Array.isArray(set) } });
  if (empty$(rest)) {
    return set;
  }
  const indices = rest.flat();
  spec({ func: "disj", spec: { keysAreNums: numberSet$(indices) } });
  return set.reduce((acc, cur, index) => {
    if (not(indices.includes(index + 1))) {
      acc.push(cur);
    }
    return acc;
  }, []);
}
