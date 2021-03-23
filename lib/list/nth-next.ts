import { eq } from "../generic/eq";
import { TCollection } from "../types/t-collection";
import { Collection } from "../internal/collection";
import { or } from "../conditional/or";

export function nthnext(set: TCollection, num: number) {
  const _set = Collection(set, false);
  if (or(_set.empty$, eq(num, 0))) {
    return [];
  } else {
    return _set.slice(num, _set.count);
  }
}
