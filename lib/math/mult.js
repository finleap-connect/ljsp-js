import { isNumberSet } from "../generic/is-number-set";
import { spec } from "../spec/spec";

/**
 * @param {number} rest
 * @returns {number}
 */
export function mult(...rest) {
  spec({ func: "mult", spec: { argsAreNums: isNumberSet(rest) } });
  if (rest.length === 0) {
    return 1;
  }
  return rest.reduce((acc, cur) => {
    return acc * cur;
  });
}
