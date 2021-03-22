// @ts-nocheck
import { Collection } from "../internal/collection";

export function frequencies(set: any[] | string) {
  const _set = Collection(set, false);
  const result = {};

  for (let x = 0; x < _set.count; x++) {
    const cur = _set.get(x);
    if (result.hasOwnProperty(cur)) {
      result[cur] = result[cur] + 1;
    } else {
      result[cur] = 1;
    }
  }
  return result;
}
