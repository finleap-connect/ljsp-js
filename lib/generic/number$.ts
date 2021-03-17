import { alike } from "./alike";
import { object$ } from "./object$";
import { _getType } from "../internal/_get-type";
import { BaseTypes } from "../enums/base-types";

/**
 * Determines whether a value is a Number
 * @param value
 * @returns {boolean|boolean}
 */
export function number$(value: any) {
  return typeof value === "number" || (object$(value) && alike(_getType(value), BaseTypes.Number));
}
