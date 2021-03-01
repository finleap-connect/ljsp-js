import { spec } from "../spec/spec";
import { isTypedSet } from "./is-typed-set";

export function isArraySet(set: Array<any>): boolean {
  spec({ func: "isArraySet", spec: { setIsArray: Array.isArray(set) } });
  return isTypedSet(set, (item) => Array.isArray(item));
}
