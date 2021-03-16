// @ts-nocheck
import { object$ } from "../generic/object$";
import { toStringComp } from "../generic/internal/toStringComp";
import { objectTypes } from "../enums/object-types";
import { void$ } from "../generic/void$";
import { arrayLike$ } from "../generic/array-like$";
import { Collection } from "../types/collection";
import { eq } from "../generic/eq";
import { or } from "../conditional/or";

export function count(set: null | undefined | Collection) {
  if (void$(set)) {
    return 0;
  }
  if (arrayLike$(set)) {
    return set.length;
  }
  const test = toStringComp(set);

  if (or(eq(test, objectTypes.Map), eq(test, objectTypes.Set))) {
    return set.size;
  }
  if (object$(set)) {
    return Object.keys(set).length;
  }
}
