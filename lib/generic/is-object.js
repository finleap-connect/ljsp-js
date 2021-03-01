const OBJECT = "object";
const FUNCTION = "function";

/**
 * @param value
 * @returns {boolean}
 */
export function isObject(value) {
  const type = typeof value;
  return value != null && (type === OBJECT || type === FUNCTION);
}
