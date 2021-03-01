/**
 * @param number
 * @returns {boolean}
 */
export function isPositiveInt$(number) {
  return Number.isInteger(number) && number > 0;
}
