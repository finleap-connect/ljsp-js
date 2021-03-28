import { cond, ELSE } from "../conditional/cond";
import { first } from "./first";
import { minLenList } from "./min-len-list";
import { notEmpty$ } from "../generic/not-empty$";
import { empty$ } from "../generic/empty$";

/**
 * @param {[]} rest
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'rest' implicitly has an 'any[]' ty... Remove this comment to see the full error message
export function interleave(...rest) {
  if (notEmpty$(rest)) {
  }
  // prettier-ignore
  return cond(
    () => empty$(rest), () => undefined,
    () => rest.length === 1, first(rest),
    ELSE, () => {
      // find the shortest list
      const maxIterations = minLenList(...rest).length;
      // get the first list
      const [base] = rest;
      let temp = [];

      // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'acc' implicitly has an 'any' type.
      return base.reduce((acc, cur, idx) => {
        if (idx < maxIterations) {
          temp = [];
          for (let i = 1; i < rest.length; i++) {
            temp.push(rest[i][idx]);
          }
          acc = [...acc, cur, ...temp];
        }
        return acc;
      }, []);
    }
  );
}
