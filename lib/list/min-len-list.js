import { cond, ELSE } from "../conditional/cond";
import { isArraySet } from "../generic/is-array-set";
import { spec } from "../spec/spec";

/**
 * @param {[]} rest
 * @returns {*}
 */
export function minLenList(...rest) {
  spec({ func: "minLenList", spec: { argsAreArrays: isArraySet(rest) } });
  return rest.reduce((acc, cur) => {
    // prettier-ignore
    return cond(
      () => acc === -1, () => cur,
      () => acc.length < cur.length, acc,
      ELSE, cur
    );
  }, -1);
}
