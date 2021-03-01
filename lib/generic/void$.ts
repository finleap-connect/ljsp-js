/**
 * @param {*} item
 * @returns {boolean}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
export function void$(item) {
  return item == null || typeof item === "undefined";
}
