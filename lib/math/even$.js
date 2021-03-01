import { eq } from "../generic/eq";
import { spec } from "../spec/spec";

/**
 * Returns true if num is odd, otherwise false
 * @param num
 * @returns {boolean}
 */
export function even$(num) {
  spec({ func: "even$", spec: { numIsInt: Number.isInteger(num) } });
  return eq(num % 2, 0);
}
