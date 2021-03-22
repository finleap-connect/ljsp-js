import { TCollection } from "../types/t-collection";
import { Collection } from "../internal/collection";

export function includes(set: TCollection, ...rest: any[]) {
  const _set = Collection(set, false);
  return rest.every((item) => _set.contains$(item));
}
