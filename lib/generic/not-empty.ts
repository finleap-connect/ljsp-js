import { empty$ } from "./empty$";
import { spec } from "../spec";
import { collection$ } from "./collection$";
import { TCollection } from "../types/TCollection";

export function notEmpty(set: TCollection) {
  spec({ func: "notEmpty", spec: { setIsCollection: collection$(set) } });
  return empty$(set) ? undefined : set;
}