import { makeArray } from "../list/make-array";
import { TAnyObject } from "../types/t-any-object";

export function project(objects: TAnyObject[] | TAnyObject, keys: string[]) {
  const set = makeArray(objects);
  return set.map((item) => {
    return _pick(item, keys);
  });
}

function _pick(object: TAnyObject, keys: string[]) {
  return Object.fromEntries(
    Object.entries(object).filter(([key]) => {
      return keys.includes(key);
    })
  );
}
