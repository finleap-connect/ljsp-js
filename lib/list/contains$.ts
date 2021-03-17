// @ts-nocheck
import { TCollection } from "../types/TCollection";
import { eq, object$ } from "../generic";
import { or } from "../conditional";
import { toStringComp } from "../generic/internal/toStringComp";
import { objectTypes } from "../enums/object-types";
import { arrayLike$ } from "../generic/array-like$";

export function contains$(set: TCollection, key: string) {
  if (arrayLike$(set)) {
    return set.includes(key);
  }
  const test = toStringComp(set);
  if (or(eq(test, objectTypes.Map), eq(test, objectTypes.Set))) {
    return set.has(key);
  }
  if (object$(set)) {
    return Object.keys(set).includes(key);
  }
}
