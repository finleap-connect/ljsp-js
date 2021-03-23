import { TCollection } from "../types/t-collection";
import { Collection } from "../internal/collection";
import { first } from "./first";

export function last(set: TCollection) {
  const _set = Collection(set, false);
  return first(_set.slice(_set.count - 1));
}
