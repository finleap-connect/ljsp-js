import { isObject } from "./is-object";
import { alike } from "./alike";
import { toStringComp } from "./internal/toStringComp";

/**
 * Whether a value is Boolean
 * @param value
 * @returns {boolean|*}
 */
export function isBoolean(value: any) {
  return value === true || value === false || (isObject(value) && alike(toStringComp(value), "[object Boolean]"));
}
