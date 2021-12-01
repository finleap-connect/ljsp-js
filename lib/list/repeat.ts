import { cycle } from "./cycle";
import { iterator } from "./iterator";
import { cloneDeep } from "../generic/clone-deep";
import { object$ } from "../generic/object$";

/**
 * @param {*|number} num
 * @param {*} x
 * @returns {(function(): (*))|(function(): (*|undefined))}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'num' implicitly has an 'any' type.
export function repeat(num, x) {
  if (x) {
    const set = Array.from({ length: num }, () => {
      return object$(x) ? cloneDeep(x) : x;
    });
    return iterator(set);
  } else {
    return cycle(num);
  }
}
