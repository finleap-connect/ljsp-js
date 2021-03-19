/**
 * @param {Function} pred
 * @param {[]} set
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'pred' implicitly has an 'any' type.
export function some(pred, set) {
  return set.find(pred);
}
