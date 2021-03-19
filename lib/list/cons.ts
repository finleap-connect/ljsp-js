/**
 * @param {*} item
 * @param {[]} set
 * @returns {*[]}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
export function cons(item, set) {
  return [item, ...set];
}
