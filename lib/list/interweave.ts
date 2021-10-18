import { cond, ELSE } from "../conditional/cond";
import { first } from "./first";
import { empty$ } from "../generic/empty$";
import { not } from "../generic";
import { isMultiDimArr } from "../generic/internal/is-multi-dim-arr";
import { maxLenList } from "./max-len-list";

/**
 * @param {[]} rest
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'rest' implicitly has an 'any[]' ty... Remove this comment to see the full error message
export function interweave(...rest) {
  // prettier-ignore
  return cond(
    () => empty$(rest), () => undefined,
    () => not(isMultiDimArr(rest)), () => rest,
    () => rest.length === 1, first(rest),
    ELSE, () => {
      // find the shortest list
      const [base] = rest;
      const endOfLongestList = maxLenList(...rest).length;
      let temp = [];
      let acc: any = [];

      for(let idx = 0; idx < endOfLongestList; idx++) {
        temp = [];
        for (let i = 0; i < rest.length; i++) {
          const val = rest[i][idx];
          if (val !== undefined) {
            temp.push(rest[i][idx]);
          }
        }
        acc = acc.concat(temp);
      }
      return acc;
    }
  );
}
