import { cond } from "../conditional/cond";
import { object$ } from "./object$";

export function empty(set: any) {
  // prettier-ignore
  return cond(
    () => Array.isArray(set), [],
    () => set instanceof Set, new Set(),
    () => set instanceof Map, new Map(),
    () => set instanceof WeakMap, new WeakMap(),
    () => set instanceof WeakSet, new WeakSet(),
    () => object$(set), {},
  );
}
