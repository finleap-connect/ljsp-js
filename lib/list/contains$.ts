// @ts-nocheck
import { TCollection } from "../types/t-collection";
import { object$ } from "../generic";
import { arrayLike$ } from "../generic/array-like$";
import { BaseTypes } from "../enums/base-types";
import { _getType } from "../internal/_get-type";
import { orEq } from "../generic/or-eq";

export function contains$(set: TCollection, key: string) {
  if (arrayLike$(set)) {
    return set.includes(key);
  }
  const test = _getType(set);
  if (orEq(test, BaseTypes.Map, BaseTypes.Set)) {
    return set.has(key);
  }
  if (object$(set)) {
    return Object.keys(set).includes(key);
  }
}
