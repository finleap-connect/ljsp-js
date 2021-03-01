import { isNumber } from "lodash";
import { spec } from "../spec/spec";
import { sub } from "./sub";

/**
 * @param {number} num
 * @returns {number}
 */
export function dec(num) {
  spec({ func: "inc", spec: { isInteger: isNumber(num) } });
  return sub(num, 1);
}
