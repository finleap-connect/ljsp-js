// @ts-nocheck
import { first } from "./first";
import { second } from "./second";
import { cloneDeep } from "../generic/clone-deep";

export function assocIn(set: Array<any>, keys: Array<any>, value: any) {
  const result = cloneDeep(set);
  const index = first(keys);
  if (set[index]) {
    const prop = second(keys);
    result[index][prop] = cloneDeep(value);
  } else {
    result[index] = cloneDeep(value);
  }
  return result;
}
