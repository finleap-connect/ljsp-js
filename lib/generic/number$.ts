import { alike } from "./alike";
import { object$ } from "./object$";
import { toStringComp } from "./internal/toStringComp";

/**
 * Determines whether a value is a Number
 * @param value
 * @returns {boolean|boolean}
 */
export function number$(value: any) {
  return typeof value === "number" || (object$(value) && alike(toStringComp(value), "[object Number]"));
}
