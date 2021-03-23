import { TCollection } from "../types/t-collection";
import { Collection } from "../internal/collection";

export function takeLast(n: number, coll: TCollection) {
  const _set = Collection(coll, false);
  return _set.slice(_set.count - n);
}
