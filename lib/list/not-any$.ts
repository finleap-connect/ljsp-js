import { some } from "./some";
import { not } from "../generic/not";

export function notAny$(pred: Function, coll: Array<any>) {
  return not(some(pred, coll));
}
