import { first } from "./first";
import { TCollection } from "../types/t-collection";
import { Collection } from "../internal/collection";

export function cycle(set: TCollection) {
  const _set = Collection(set, false);
  let count = 0;
  return function sequence() {
    if (count < _set.count) {
      let value = _set.get(count);
      count += 1;
      return value;
    } else {
      count = 1;
      return first(set);
    }
  };
}
