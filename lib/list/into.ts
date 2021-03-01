import { cond, ELSE } from "../conditional/cond";
import { spec } from "../spec/spec";
import { conj } from "./conj";

/**
 * @param {[]} to
 * @param {[]|Function}from
 * @param {[]} xFrom
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'to' implicitly has an 'any' type.
export function into(to, from, xFrom) {
  spec({ func: "into", spec: { toIsArray: to ? Array.isArray(to) : true } });
  // prettier-ignore
  return cond(
    () => !to, () => [],
    () => !from, () => to,
    () => !xFrom, () => conj(to, from),
    ELSE, () => {
      const result = from(xFrom);
      return conj(to, result);
    }
  );
}
