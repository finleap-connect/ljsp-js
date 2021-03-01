import { compact } from "lodash";
import { isObject } from "../generic/is-object";
import { spec } from "../spec/spec";
import { first } from "./first";

/**
 * @param {[]|{}} set
 * @param {[]|{}} rest
 * @returns {*[]|*|}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function conj(set, ...rest) {
  spec({ func: "conj", spec: { setIsArrayOrObject: isObject(set) } });
  if (Array.isArray(set)) {
    const addition = first(compact(rest));
    return set.concat(addition);
  } else {
    return rest.reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, set);
  }
}
