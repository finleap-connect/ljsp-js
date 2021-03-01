import { spec } from "../spec/spec";

/**
 * @param {number} dividend
 * @param {number} divisor
 * @returns {number}
 */
export function quot(dividend, divisor) {
  spec({
    func: "quot",
    spec: { isDividendInteger: pos$(dividend), isDivisorInteger: pos$(dividend) }
  });
  return Math.trunc(dividend / divisor);
}
