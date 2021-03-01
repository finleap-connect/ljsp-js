/**
 * @param {boolean | Function} condition
 * @param {*} expression
 * @returns {*}
 */
export function ifYes(condition, expression) {
  return condition ? expression : undefined;
}
