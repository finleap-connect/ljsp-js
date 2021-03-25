import { flow, identity, map } from "lodash";
import { castEntriesArrayToObject } from "./internal/cast-entries-array-to-object";
import { object$ } from "../generic";
import { TAnyObject } from "../types/t-any-object";

export function walk(inner: Function, outer: Function, set: any[] | TAnyObject) {
  const isSetArray = Array.isArray(set);
  const form = isSetArray ? set : Object.entries(set);
  const mapper = flow(map, isSetArray ? identity : castEntriesArrayToObject);
  const preliminaryResult = mapper(form, inner);

  return outer(object$(set) ? Object.fromEntries(preliminaryResult) : preliminaryResult);
}
