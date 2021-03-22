import { and } from "../conditional/and";
import { object$ } from "../generic/object$";

/**
 * Returns true if `x` is the result of a call to `reduced`
 * @param {*} item
 */
export function reduced$(item: any) {
  return and(object$(item), () => item.hasOwnProperty("____reduced"));
}
