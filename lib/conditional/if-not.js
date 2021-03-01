/**
 * @param condition
 * @param expression
 * @returns {*|undefined}
 */
export function ifNot(condition, expression) {
  return !condition ? expression() : undefined;
}
