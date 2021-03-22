import { void$ } from "../generic";
import { TCollection } from "../types/t-collection";
import { Collection } from "../internal/collection";

export function filter(pred: Function, set?: TCollection) {
  if (void$(set)) {
    return function (step: Function) {
      return function (result: any, input: any) {
        return pred(input) ? step(result, input) : result;
      };
    };
  } else {
    // @ts-ignore
    const _set = Collection(set);
    const acc = Collection(_set.empty);
    for (let i = 0; i < _set.count; i++) {
      const cur = _set.get(i);
      const result = pred(cur, i, _set);
      if (result) {
        acc.append(cur);
      }
    }
    return acc.source;
  }
}
