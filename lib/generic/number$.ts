import { alike } from "./alike";
import { object$ } from "./object$";
import { _getType } from "../internal/_get-type";
import { BaseTypes } from "../enums/base-types";

export function number$(value: any) {
  return typeof value === "number" || (object$(value) && alike(_getType(value), BaseTypes.Number));
}
