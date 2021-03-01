import { cloneDeep, isObject } from "lodash";
import { cycle } from "./cycle";
import { iterator } from "./iterator";

/**
 * @param {*|number} num
 * @param {*} x
 * @returns {(function(): (*))|(function(): (*|undefined))}
 */
export function repeat(num, x) {
  if (x) {
    const set = Array.from({ length: num }, () => {
      return isObject(x) ? cloneDeep(x) : x;
    });
    return iterator(set);
  } else {
    return cycle(num);
  }
}
