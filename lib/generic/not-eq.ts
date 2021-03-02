import { spec } from "../spec/spec";
import { isObject } from "./is-object";
import { isTypedSet } from "./is-typed-set";

/**
 * @param {*} rest
 * @returns {boolean}
 */
// @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'rest' implicitly has an 'any[]' ty... Remove this comment to see the full error message
export function notEq(...rest) {
  spec({
    func: "eq",
    spec: { typeIsPrimitive: isTypedSet(rest, (item) => !isObject(item) && !Array.isArray(item)) }
  });
  if (rest.length === 1) {
    return true;
  }
  let left = rest[0];
  for (let i = 1; i < rest.length; i++) {
    let right = rest[i];
    if (left === right) {
      return false;
    }
  }
  return true;
}
