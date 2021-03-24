import { Collection } from "../internal/collection";
import { void$ } from "../generic/void$";
import { gt$ } from "../math/gt$";
import { not } from "../generic/not";
import { ensureReduced } from "./ensure-reduced";
import { dec } from "../math/dec";
import { eq } from "../generic/eq";
import { TCollection } from "../types/t-collection";

export function take(num: number, coll: TCollection): any {
  if (void$(coll)) {
    return (step: Function) => {
      return (acc: any, cur: any, isLjsp: boolean = false) => {
        const result = num > 0 ? step(acc, cur) : acc;
        num = dec(num);
        if (eq(isLjsp, true)) {
          return not(gt$(num, 0)) ? ensureReduced(result) : result;
        } else {
          return result;
        }
      };
    };
  } else {
    const _coll = Collection(coll);
    return _coll.slice(0, num);
  }
}
