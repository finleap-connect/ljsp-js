import { TCollection } from "../types/t-collection";
import { spec } from "../spec";
import { number$ } from "../generic/number$";
import { dec, gt$ } from "../math";
import { void$ } from "../generic";
import { Collection } from "../internal/collection";

export function drop(n: number, set?: TCollection) {
  spec(drop, { nIsNumber: number$(n) });
  if (void$(set)) {
    return function (step: Function) {
      return function (result: any, input: any) {
        if (gt$(n, 0)) {
          n = dec(n);
          return result;
        } else {
          return step(result, input);
        }
      };
    };
  } else {
    // @ts-ignore
    const _set = Collection(set);
    return _set.slice(n);
  }
}
