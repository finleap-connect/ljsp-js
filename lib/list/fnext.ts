import { next } from "./next";
import { first } from "./first";
import { and } from "../conditional/and";
import { TAnyObject } from "../types/t-any-object";

export function fnext(set: Array<any> | TAnyObject) {
  const rest = next(set);
  // @ts-ignore
  return and(rest, () => first(rest));
}
