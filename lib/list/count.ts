// @ts-nocheck
import { object$ } from "../generic/object$";
import { void$ } from "../generic/void$";
import { arrayLike$ } from "../generic/array-like$";
import { TCollection } from "../types/TCollection";
import { _getType } from "../internal/_get-type";
import { BaseTypes } from "../enums/base-types";
import { orEq } from "../generic/or-eq";

export function count(set: null | undefined | TCollection) {
  if (void$(set)) {
    return 0;
  }
  if (arrayLike$(set)) {
    return set.length;
  }
  const test = _getType(set);

  if (orEq(test, BaseTypes.Map, BaseTypes.Set)) {
    return set.size;
  }
  if (object$(set)) {
    return Object.keys(set).length;
  }
}
