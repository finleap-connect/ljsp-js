import { next } from "./next";
import { first } from "./first";
import { and } from "../conditional/and";
import { AnyObject } from "../types/any-object";

export function fnext(set: Array<any> | AnyObject) {
  const rest = next(set);
  // @ts-ignore
  return and(rest, () => first(rest));
}
