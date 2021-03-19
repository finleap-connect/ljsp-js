import { empty$ } from "../generic/empty$";
import { not } from "../generic/not";

export function notEvery$(pred: Function, coll: Array<any>) {
  if (empty$(coll)) {
    return true;
  }

  for (let x = 0; x < coll.length; x++) {
    if (not(pred(coll[x]))) {
      return true;
    }
  }

  return false;
}
