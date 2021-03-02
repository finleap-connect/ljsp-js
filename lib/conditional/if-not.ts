/**
 * @param condition
 * @param expression
 * @returns {*|undefined}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'condition' implicitly has an 'any' type... Remove this comment to see the full error message
export function ifNot(condition, expression) {
  return !condition ? expression() : undefined;
}
