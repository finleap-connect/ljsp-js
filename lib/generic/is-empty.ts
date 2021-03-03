import { alike } from "./alike";
import { isObject } from "./is-object";
import { toStringComp } from "./internal/toStringComp";

const STRING = "string";
const FUNCTION = "function";

/**
 * Returns whether an Object, an Array, a Set, or a Map is empty.
 * Modified slightly from Lodash
 * @param value
 * @returns {boolean}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
export function isEmpty(value) {
  if (alike(value, null)) {
    return true;
  }
  if (Array.isArray(value) || typeof value === STRING || typeof value.splice === FUNCTION) {
    return !value.length;
  }
  const tag = toStringComp(value);
  if (alike(tag, "[object Map]") || alike(tag, "[object Set]")) {
    return !value.size;
  }
  if (isObject(value)) {
    return !Object.keys(value).length;
  }
  return true;
}
