import { apply } from "../function/apply";
import { max } from "../math/max";
import { TCollection } from "../types/t-collection";
import { Collection } from "../internal/collection";

export function maxKey(fn: Function, ...rest: Array<TCollection>): TCollection {
  const _results = Collection([]);
  for (let i = 0; i < rest.length; i++) {
    _results.append(apply(fn, rest[i]));
  }
  // @ts-ignore
  const getMax = max(..._results.source);
  return rest[_results.lastIndexOf(getMax)];
}
