/**
 * @param expression
 * @returns {boolean}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'expression' implicitly has an 'any' typ... Remove this comment to see the full error message
export function some$(expression) {
  return expression !== null && expression !== undefined;
}
