import { isObject } from "lodash";
import { and } from "../conditional/and";

/**
 * Returns true if `x` is the result of a call to `reduced`
 * @param {*} item
 */
export function reduced$(item) {
  return and(isObject(item), item.hasOwnProperty("____reduced"));
}
