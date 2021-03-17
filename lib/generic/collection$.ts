import { arrayLike$ } from "./array-like$";
import { toStringComp } from "./internal/toStringComp";
import { or } from "../conditional/or";
import { eq } from "./eq";
import { objectTypes } from "../enums/object-types";
import { object$ } from "./object$";
import { string$ } from "./string$";

export function collection$(item: any) {
  const test = toStringComp(item);
  return or(arrayLike$(item), eq(test, objectTypes.Map), eq(test, objectTypes.Set), object$(item), string$(item));
}
