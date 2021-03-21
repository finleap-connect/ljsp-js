import { cond, ELSE } from "../conditional/cond";
import { concat } from "./concat";

/**
 * @param {[]} to
 * @param {[]|Function}from
 * @param {[]} xFrom
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'to' implicitly has an 'any' type.
export function into(to, from, xFrom) {
  // prettier-ignore
  return cond(
    () => !to, () => [],
    () => !from, () => to,
    () => !xFrom, () => concat(to, from),
    ELSE, () => {
      const result = from(xFrom);
      return concat(to, result);
    }
  );
}
