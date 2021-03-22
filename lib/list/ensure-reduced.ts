import { reduced$ } from "./reduced$";
import { reduced } from "./reduced";

export function ensureReduced(item: any) {
  return reduced$(item) ? item : reduced(item);
}
