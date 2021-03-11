import { isFunction } from "lodash";
import { empty$ } from "../generic";

export function and(...rest: Array<any>) {
  if (empty$(rest)) return true;

  let result;
  for (let x = 0; x < rest.length; x++) {
    const current = rest[x];
    result = isFunction(current) ? current() : current;
    if (!result) {
      return result;
    }
  }
  return result;
}
