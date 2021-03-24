import { TCollection } from "../types/t-collection";
import { Collection } from "../internal/collection";
import { TPrimitive } from "../types/TPrimitive";

export function nth(set: TCollection, index: number, notFound?: TPrimitive) {
  const _set = Collection(set, false);
  return _set.get(index) ?? notFound;
}
