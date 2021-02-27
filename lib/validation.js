import { and } from "./conditional";
import { gt$, gte$ } from "./math";

/**
 * @param number
 * @returns {boolean}
 */
// isPositiveInteger :: Number -> Boolean
export function isPositiveInt(number) {
  return and(Number.isInteger(number), gt$(number, 0));
}

/**
 * @param number
 * @returns {boolean}
 */
// isNonNegativeInt :: Number -> Boolean
export function isNonNegativeInt(number) {
  return and(Number.isInteger(number), gte$(number, 0));
}
