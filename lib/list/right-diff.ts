/**
 * @param {[]} left
 * @param {[]} right
 * @returns {[]}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'left' implicitly has an 'any' type.
export function rightDiff(left, right) {
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'x' implicitly has an 'any' type.
  return left.filter((x) => !right.includes(x));
}
