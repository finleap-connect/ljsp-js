import { void$ } from "../generic/void$";

/**
 * @param {[]} left
 * @param {[]} right
 * @returns {[]}
 */
export function difference(left: Array<any>, ...right: Array<any>) {
  if (void$(right)) {
    return left;
  }
  return right.reduce((acc, cur) => {
    return acc.filter((x: any) => !cur.includes(x));
  }, left);
}
