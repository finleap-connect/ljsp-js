import { isNumber } from "lodash";
import { typedSet$ } from "./internal/typed-set$";

export function numberSet$(set: Array<any>) {
  return typedSet$(set, isNumber);
}
