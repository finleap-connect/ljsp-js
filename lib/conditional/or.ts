import { function$ } from "../generic/function$";

/**
 * @param {*} rest
 * @returns {undefined|*}
 */
export function or(...rest: Array<any>) {
  if (rest.length === 0) return undefined;

  let result;
  for (let x = 0; x < rest.length; x++) {
    const current = rest[x];
    result = function$(current) ? current() : current;
    if (result) {
      return result;
    }
  }
  return result;
}
