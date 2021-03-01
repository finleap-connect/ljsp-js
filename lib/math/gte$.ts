import { eq } from "../generic/eq";
import { isNumberSet } from "../generic/is-number-set";
import { spec } from "../spec/spec";

/**
 * Returns true if nums are in monotonically decreasing order,
 * otherwise false.
 * @param {number} rest
 */
// @ts-expect-error ts-migrate(7019) FIXME: Rest parameter 'rest' implicitly has an 'any[]' ty... Remove this comment to see the full error message
export function gte$(...rest) {
  spec({ func: "gt", spec: { isNumberSet: isNumberSet(rest) } });
  return rest.reduce((acc, cur) => {
    return eq(acc, false) ? acc : acc >= cur;
  });
}
