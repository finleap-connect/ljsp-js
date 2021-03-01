/**
 * Determines whether an item is a Regular Expression
 * @param {*} value
 * @returns {boolean}
 */
export function isRegExp(value) {
  return value instanceof RegExp;
}
