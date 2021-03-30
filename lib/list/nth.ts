import { TCollection } from "../types/t-collection";
import { Collection } from "../internal/collection";
import { TPrimitive } from "../types/TPrimitive";
import { array$ } from "../generic/array$";

export function nth(set: TCollection, index: number, notFound?: TPrimitive) {
  if (array$(set)) {
    // @ts-ignore
    return set[index] ?? notFound;
  } else {
    const _set = Collection(set, false);
    return _set.get(index) ?? notFound;
  }
}
