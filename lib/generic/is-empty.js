import { alike } from "./alike";
import { isObject } from "./is-object";

const STRING = "string";
const FUNCTION = "function";

/**
 * Returns whether an Object, an Array, a Set, or a Map is empty.
 * Modified slightly from Lodash
 * @param value
 * @returns {boolean}
 */
export function isEmpty(value) {
  if (alike(value, null)) {
    return true;
  }
  if (Array.isArray(value) || typeof value === STRING || typeof value.splice === FUNCTION) {
    return !value.length;
  }
  const tag = getString(value);
  if (alike(tag, "[object Map]") || alike(tag, "[object Set]")) {
    return !value.size;
  }
  if (isObject(value)) {
    return !Object.keys(value).length;
  }
  return true;
}

function getString(value) {
  return value.toString();
}
