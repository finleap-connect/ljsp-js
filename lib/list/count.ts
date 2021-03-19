// @ts-nocheck
import { Collection } from "../internal/collection";
import { void$ } from "../generic";
import { TCollection } from "../types/t-collection";

export function count(set: null | undefined | TCollection) {
  return void$(set) ? 0 : Collection(set, false).count;
}
