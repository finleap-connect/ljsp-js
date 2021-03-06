import { function$ } from "../generic/function$";
import { iff } from "../conditional/iff";

/**
 * Extends original array with provided value or function which receives index as param.
 * @param {[]} source
 * @param {number} len
 * @param {*} value
 * @returns {[]}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'source' implicitly has an 'any' type.
export function extendArray(source, len, value = null) {
  source.length = len;
  for (let idx = 0; idx < source.length; idx++) {
    if (!source[idx]) {
      // @ts-expect-error ts-migrate(2721) FIXME: Cannot invoke an object which is possibly 'null'.
      source[idx] = iff(function$(value), () => value(idx), value);
    }
  }
  return source;
}
