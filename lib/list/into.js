import { cond, ELSE } from "../conditional/cond";
import { spec } from "../spec/spec";
import { conj } from "./conj";

/**
 * @param {[]} to
 * @param {[]|Function}from
 * @param {[]} xFrom
 * @returns {*}
 */
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
