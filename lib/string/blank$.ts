/**
 * @param str
 * @returns {boolean}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'str' implicitly has an 'any' type.
export function blank$(str) {
  const isNull = str === undefined || str === null;

  return isNull || str.trim() === "";
}
