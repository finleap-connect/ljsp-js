import { first } from "./first";

export function ffirst(set: any[]) {
  return first(first(set));
}
