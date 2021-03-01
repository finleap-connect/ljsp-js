import { eq } from "../generic/eq";
import { spec } from "../spec/spec";

/**
 * Returns true if num is zero, otherwise false
 * @param num
 * @returns {boolean}
 */
export function zero$(num) {
  spec({ func: "zero$", spec: { numIsInt: Number.isInteger(num) } });
  return eq(num, 0);
}
