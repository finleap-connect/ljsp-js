import { spec } from "../spec/spec";
import { numberSet$ } from "../generic/number-set$";

/**
 * If no denominators are supplied, returns 1/numerator,
 * else returns numerator divided by all of the denominators.
 * @param rest
 */
export function div(...rest: Array<number>) {
  spec({ func: "div", spec: { validArgNum: rest.length > 0, argsAreNums: numberSet$(rest) } });
  if (rest.length === 1) {
    return 1 / rest[0];
  }
  return rest.reduce((acc, cur) => {
    return acc / cur;
  });
}
