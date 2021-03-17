import { arrayLike$ } from "./array-like$";
import { _getType } from "../internal/_get-type";
import { or } from "../conditional/or";
import { eq } from "./eq";
import { object$ } from "./object$";
import { string$ } from "./string$";
import { BaseTypes } from "../enums/base-types";

export function collection$(item: any) {
  const test = _getType(item);
  return or(arrayLike$(item), eq(test, BaseTypes.Map), eq(test, BaseTypes.Set), object$(item), string$(item));
}
