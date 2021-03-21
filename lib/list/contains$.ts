import { TCollection } from "../types/t-collection";
import { Collection } from "../internal/collection";

export function contains$(set: TCollection, key: string) {
  const _set = Collection(set);
  return _set.contains$(key);
}
