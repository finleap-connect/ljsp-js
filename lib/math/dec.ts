import { isNumber } from "lodash";
import { spec } from "../spec/spec";
import { sub } from "./sub";

/**
 * Returns a number one less than num.
 * @param {number} num
 */
export function dec(num: number) {
  spec({ func: "dec", spec: { isInteger: isNumber(num) } });
  return sub(num, 1);
}
