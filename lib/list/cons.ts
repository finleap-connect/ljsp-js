import { Collection } from "../internal/collection";
import { TCollection } from "../types/t-collection";

export function cons(item: any, set: TCollection) {
  const _set = Collection(set);
  _set.prepend(item);
  return _set.source;
}
