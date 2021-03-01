import { eq } from "../generic/eq";
import { isNumberSet } from "../generic/is-number-set";
import { spec } from "../spec/spec";

/**
 * Returns true if nums are in monotonically decreasing order,
 * otherwise false.
 * @param {number} rest
 */
export function gt$(...rest) {
  spec({ func: "gt", spec: { isNumberSet: isNumberSet(rest) } });
  return rest.reduce((acc, cur) => {
    return eq(acc, false) ? acc : acc > cur;
  });
}
