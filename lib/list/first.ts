import { TCollection } from "../types/t-collection";
import { nth } from "./nth";

export function first(set: TCollection): any {
  return nth(set, 0);
}
