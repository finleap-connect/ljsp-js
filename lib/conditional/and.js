import { isFunction } from "lodash";
import { isEmpty } from "../generic/is-empty";

/**
 * @param {*} rest
 * @returns boolean
 */
export function and(...rest) {
  if (isEmpty(rest)) return true;

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
