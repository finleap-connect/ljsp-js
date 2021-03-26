import { void$ } from "../generic";
import { filter } from "./filter";
import { complement } from "../function";

export function remove(pred: Function, coll: any[]) {
  if (void$(coll)) {
    return filter(complement(pred));
  } else {
    return filter(complement(pred), coll);
  }
}
