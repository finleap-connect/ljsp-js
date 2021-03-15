import { spec } from "../spec/spec";
import { arraySet$ } from "../generic/array-set$";
import { void$ } from "../generic/void$";

/**
 * @param {[]} left
 * @param {[]} right
 * @returns {[]}
 */
export function difference(left: Array<any>, ...right: Array<any>) {
  spec({
    func: "difference",
    spec: { leftIsArray: Array.isArray(left), rightIsArraySet: arraySet$(right) }
  });
  if (void$(right)) {
    return left;
  }
  return right.reduce((acc, cur) => {
    return acc.filter((x: any) => !cur.includes(x));
  }, left);
}
