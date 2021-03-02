/**
 * Returns true if x is logical false, false otherwise
 * @param item
 * @returns {boolean}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
export function not(item) {
  return !item;
}
