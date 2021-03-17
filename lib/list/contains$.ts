// @ts-nocheck
import { TCollection } from "../types/TCollection";
import { eq, object$ } from "../generic";
import { or } from "../conditional";
import { arrayLike$ } from "../generic/array-like$";
import { _getType } from "../internal/_get-type";
import { BaseTypes } from "../enums/base-types";

export function contains$(set: TCollection, key: string) {
  if (arrayLike$(set)) {
    return set.includes(key);
  }
  const test = _getType(set);
  if (or(eq(test, BaseTypes.Map), eq(test, BaseTypes.Set))) {
    return set.has(key);
  }
  if (object$(set)) {
    return Object.keys(set).includes(key);
  }
}
