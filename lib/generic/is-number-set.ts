import { isNumber } from "lodash";
import { isTypedSet } from "./is-typed-set";

export function isNumberSet(set: Array<any>) {
  return isTypedSet(set, isNumber);
}
