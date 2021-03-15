import { or } from "../conditional/or";
import { eq } from "./eq";
import { BaseTypes } from "../enums/base-types";

export function arrayLike$(set: any) {
  return or(Array.isArray(set), eq(typeof set, BaseTypes.String));
}
