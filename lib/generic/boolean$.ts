import { object$ } from "./object$";
import { alike } from "./alike";
import { toStringComp } from "./internal/toStringComp";

/**
 * Whether a value is Boolean
 * @param value
 * @returns {boolean|*}
 */
export function boolean$(value: any) {
  return value === true || value === false || (object$(value) && alike(toStringComp(value), "[object Boolean]"));
}
