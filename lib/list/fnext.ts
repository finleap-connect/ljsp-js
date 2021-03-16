import { next } from "./next";
import { first } from "./first";
import { and } from "../conditional/and";

export function fnext(set: Array<any> | object) {
  const rest = next(set);
  // @ts-ignore
  return and(rest, () => first(rest));
}
