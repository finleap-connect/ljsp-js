/**
 * Determines whether an item is a Regular Expression
 * @param {*} value
 * @returns {boolean}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
export function regExp$(value) {
  return value instanceof RegExp;
}
