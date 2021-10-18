import { cond, ELSE } from "../conditional/cond";

/**
 * @param {[]} rest
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'rest' implicitly has an 'any[]' ty... Remove this comment to see the full error message
export function maxLenList(...rest) {
  const INIT = -1;
  return rest.reduce((acc, cur) => {
    // prettier-ignore
    return cond(
      () => acc === INIT, () => cur,
      () => acc.length > cur.length, acc,
      ELSE, cur
    );
  }, INIT);
}
