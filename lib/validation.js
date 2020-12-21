// isPositiveInteger :: Number -> Boolean
export function isPositiveInteger(number) {
  return Number.isInteger(number) && number > 0;
}

export function isNonNegativeInt(number) {
  return Number.isInteger(number) && number >= 0;
}
