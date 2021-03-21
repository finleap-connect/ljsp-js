import { TCollection } from "../types/t-collection";
import { Collection } from "../internal/collection";
import { eq } from "../generic";

export function butLast(set: TCollection) {
  const _set = Collection(set);
  if (eq(_set.count, 1)) return _set.empty;
  return _set.slice(0, _set.count - 1);
}
