import { spec } from "../spec/spec";
import { typedSet$ } from "./internal/typed-set$";

export function arraySet$(set: Array<any>): boolean {
  spec({ func: "isArraySet", spec: { setIsArray: Array.isArray(set) } });
  return typedSet$(set, (item) => Array.isArray(item));
}
