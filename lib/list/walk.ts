import { castEntriesArrayToObject } from "./internal/cast-entries-array-to-object";
import { object$ } from "../generic";
import { TAnyObject } from "../types/t-any-object";

export function walk(inner: Function, outer: Function, set: any[] | TAnyObject) {
  const isSetArray = Array.isArray(set);
  const form = isSetArray ? set : Object.entries(set);
  // @ts-ignore
  let result = form.map(inner);
  if (isSetArray) {
    result = castEntriesArrayToObject(result);
  }
  // @ts-ignore
  return outer(object$(set) ? Object.fromEntries(result) : result);
}
