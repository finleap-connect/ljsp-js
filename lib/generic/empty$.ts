import { alike } from "./alike";
import { object$ } from "./object$";
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
export function empty$(value) {
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
  if (object$(value)) {
    return !Object.keys(value).length;
  }
  return true;
}
