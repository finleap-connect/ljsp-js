import { TCollection } from "../types/t-collection";
import { Collection } from "../internal/collection";

export function concat(set: TCollection, ...rest: Array<any>) {
  const _set = Collection(set);

  rest.forEach((item) => {
    _set.appendAll(item);
  });

  return _set.source;
}
