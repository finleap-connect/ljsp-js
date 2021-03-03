import { alike } from "./alike";
import { isObject } from "./is-object";
import { toStringComp } from "./internal/toStringComp";

/**
 * Determines whether a value is a Number
 * @param value
 * @returns {boolean|boolean}
 */
export function isNumber(value: any) {
  return typeof value === "number" || (isObject(value) && alike(toStringComp(value), "[object Number]"));
}
