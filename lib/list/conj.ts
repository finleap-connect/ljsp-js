import { compact } from "lodash";
import { spec } from "../spec";
import { first } from "./first";
import { objectLike$ } from "../generic/object-like$";

/**
 * @param {[]|{}} set
 * @param {[]|{}} rest
 * @returns {*[]|*|}
 */
export function conj(set: Array<any>, ...rest: Array<any>) {
  spec({ func: "conj", spec: { setIsArrayOrObject: objectLike$(set) } });
  if (Array.isArray(set)) {
    const addition = first(compact(rest));
    return set.concat(addition);
  } else {
    return rest.reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, set);
  }
}
