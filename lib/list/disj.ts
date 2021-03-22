import { empty$ } from "../generic/empty$";
import { Collection } from "../internal/collection";
import { not } from "../generic";

export function disj(set: Array<any>, ...rest: Array<number>) {
  if (empty$(rest)) {
    return set;
  }

  const _set = Collection(set);
  const _return = Collection(_set.empty);

  for (let x = 0; x < _set.count; x++) {
    if (not(rest.includes(x + 1))) {
      _return.append(_set.get(x));
    }
  }
  return _return.source;
}
