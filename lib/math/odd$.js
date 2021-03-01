import { notEq } from "../generic/not-eq";
import { spec } from "../spec/spec";

/**
 * Returns true if num is odd, otherwise false
 * @param num
 * @returns {boolean}
 */
export function odd$(num) {
  spec({ func: "odd$", spec: { numIsInt: Number.isInteger(num) } });
  return notEq(num % 2, 0);
}
