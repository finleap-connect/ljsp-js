import { isNumberSet } from "../generic/is-number-set";
import { spec } from "../spec/spec";

/**
 * Returns the greatest of the nums.
 * @param rest
 * @returns {*}
 */
export function max(...rest) {
  spec({ func: "max", spec: { argsAreNumbers: isNumberSet(rest) } });
  return Math.max(...rest);
}
