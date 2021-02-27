// isPositiveInteger :: Number -> Boolean
/**
 * @param number
 * @returns {boolean}
 */
export function isPositiveInt(number) {
  return Number.isInteger(number) && number > 0;
}

/**
 * @param number
 * @returns {boolean}
 */
export function isNonNegativeInt(number) {
  return Number.isInteger(number) && number >= 0;
}
