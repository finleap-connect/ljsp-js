const OBJECT = "object";
const FUNCTION = "function";

/**
 * @param value
 * @returns {boolean}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
export function isObject(value) {
  const type = typeof value;
  return value != null && (type === OBJECT || type === FUNCTION);
}
