/**
 * @param number
 * @returns {boolean}
 */
export function isNonNegativeInt$(number) {
  return Number.isInteger(number) && number >= 0;
}
