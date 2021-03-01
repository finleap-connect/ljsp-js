import { spec } from "../spec/spec";

/**
 * Returns the least of the nums.
 * @param rest
 * @returns {*}
 */
export function min(...rest) {
  spec({ func: "min", spec: { argsAreNumbers: isNumberSet(rest) } });
  Math.min(...rest);
}
