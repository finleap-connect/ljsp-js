import { empty$ } from "./empty$";
import { TCollection } from "../types/t-collection";

export function notEmpty(set: TCollection) {
  return empty$(set) ? undefined : set;
}
