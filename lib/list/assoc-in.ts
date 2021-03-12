import { cloneDeep } from "lodash";
import { spec } from "../spec/spec";
import { void$ } from "../generic/void$";
import { first } from "./first";
import { second } from "./second";

export function assocIn(set: Array<any>, keys: Array<any>, value: any) {
  spec({
    func: "assocIn",
    spec: {
      setIsArray: Array.isArray(set),
      keysAreArray: Array.isArray(keys),
      valueNotNill: !void$(value)
    }
  });
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
