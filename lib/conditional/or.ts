import { isFunction } from "lodash";
import { isEmpty } from "../generic/is-empty";

/**
 * @param {*} rest
 * @returns {undefined|*}
 */
// @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'rest' implicitly has an 'any[]' ty... Remove this comment to see the full error message
export function or(...rest) {
  if (isEmpty(rest)) return undefined;

  let result;
  for (let x = 0; x < rest.length; x++) {
    const current = rest[x];
    result = isFunction(current) ? current() : current;
    if (result) {
      return result;
    }
  }
  return result;
}
