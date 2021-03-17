import { alike } from "./alike";
import { toStringComp } from "./internal/toStringComp";
import { objectLike$ } from "./object-like$";

/**
 * Whether a value is Boolean
 * @param value
 * @returns {boolean|*}
 */
export function boolean$(value: any) {
  return value === true || value === false || (objectLike$(value) && alike(toStringComp(value), "[object Boolean]"));
}
