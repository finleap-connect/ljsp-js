import { typedSet$ } from "./internal/typed-set$";
import { number$ } from "./number$";

export function numberSet$(set: Array<any>) {
  return typedSet$(set, number$);
}
