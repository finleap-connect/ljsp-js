import { isNumber } from "lodash";
import { spec } from "../spec/spec";

/**
 * Returns true if num is greater than zero, otherwise false
 * @param num
 * @returns {boolean}
 */
export function pos$(num) {
  spec({ func: "pos$", spec: { numIsInt: isNumber(num) } });
  return num > 0;
}
