import { isNumberSet } from "../generic/is-number-set";
import { spec } from "../spec/spec";

/**
 * @param {number} rest
 * @returns {number}
 */
export function sub(...rest) {
  spec({
    func: "subtract",
    spec: { validArgNum: rest.length > 0, argsAreNums: isNumberSet(rest) }
  });
  if (rest.length === 1) {
    return -rest[0];
  }
  return rest.reduce((acc, cur) => {
    return acc - cur;
  });
}
