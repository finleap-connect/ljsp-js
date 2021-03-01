import { isNumber } from "lodash";
import { spec } from "../spec/spec";

/**
 * Returns true if num is less than zero, otherwise false
 * @param num
 * @returns {boolean}
 */
export function neg$(num) {
  spec({ func: "neg$", spec: { numIsInt: isNumber(num) } });
  return num < 0;
}
