import { spec } from "../spec/spec";

/**
 * @param {number} rest
 * @returns {*}
 */
export function add(...rest) {
  spec({ func: "add", spec: { argsAreNums: isNumberSet(rest) } });
  if (rest.length === 0) {
    return 0;
  }
  return rest.reduce((acc, cur) => {
    return acc + cur;
  });
}
