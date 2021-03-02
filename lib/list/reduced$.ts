import { isObject } from "lodash";
import { and } from "../conditional/and";

/**
 * Returns true if `x` is the result of a call to `reduced`
 * @param {*} item
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
export function reduced$(item) {
  return and(isObject(item), item.hasOwnProperty("____reduced"));
}
