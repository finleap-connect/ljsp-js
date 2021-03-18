import { alike } from "./alike";
import { objectLike$ } from "./object-like$";
import { _getType } from "../internal/_get-type";
import { BaseTypes } from "../enums/base-types";

/**
 * Whether a value is Boolean
 * @param value
 * @returns {boolean|*}
 */
export function boolean$(value: any) {
  return value === true || value === false || (objectLike$(value) && alike(_getType(value), BaseTypes.Boolean));
}
