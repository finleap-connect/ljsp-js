// @ts-nocheck
import { TCollection } from "../types/t-collection";
import { arrayLike$ } from "../generic/array-like$";
import { eq } from "../generic/eq";
import { not } from "../generic/not";
import { toStringComp } from "../generic/internal/toStringComp";
import { or } from "../conditional/or";
import { and } from "../conditional/and";
import { objectTypes } from "../enums/object-types";
import { spec } from "../spec";
import { collection$ } from "../generic/collection$";
import { object$ } from "../generic/object$";
import { array$ } from "../generic/array$";

export function Collection(set: TCollection) {
  spec({ func: "Collection", spec: { isCollectionable: collection$(set) } });

  if (and(not(array$(set)), object$())) {
  }
  return {
    count() {
      return set.hasOwnProperty("length") ? set.length : set.size;
    }
  };

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
