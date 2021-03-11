import { spec } from "../spec/spec";
import { object$ } from "./object$";
import { typedSet$ } from "./internal/typed-set$";

/**
 * @param {*} rest
 * @returns {boolean}
 */
// @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'rest' implicitly has an 'any[]' ty... Remove this comment to see the full error message
export function notEq(...rest) {
  spec({
    func: "eq",
    spec: { typeIsPrimitive: typedSet$(rest, (item) => !object$(item) && !Array.isArray(item)) }
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
