import { TCollection } from "../types/t-collection";
import { Collection } from "../internal/collection";

export function nth(set: TCollection, index: number) {
  const _set = Collection(set, false);
  // @ts-ignore
  return _set.get(index);
}
