import { typedSet$ } from "./internal/typed-set$";

export function arraySet$(set: Array<any>): boolean {
  return typedSet$(set, (item) => Array.isArray(item));
}
