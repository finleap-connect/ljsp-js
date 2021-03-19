import { cond, ELSE } from "../conditional/cond";

/**
 * @param {[]} rest
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'rest' implicitly has an 'any[]' ty... Remove this comment to see the full error message
export function minLenList(...rest) {
  return rest.reduce((acc, cur) => {
    // prettier-ignore
    return cond(
      () => acc === -1, () => cur,
      () => acc.length < cur.length, acc,
      ELSE, cur
    );
  }, -1);
}
