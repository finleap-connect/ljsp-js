import { isNumber } from "lodash";
import { spec } from "../spec/spec";
import { add } from "./add";

/**
 * @param {number} num
 * @returns {number}
 */
export function inc(num) {
  spec({ func: "inc", spec: { isInteger: isNumber(num) } });
  return add(num, 1);
}
