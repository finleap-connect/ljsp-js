import { isEmpty } from "lodash";
import { eq } from "../generic/eq";
import { isPositiveInt$ } from "../math/is-positive-int$";
import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @param {number} num
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function nthnext(set, num) {
  spec({
    func: "nthnext",
    spec: { setIsArray: Array.isArray(set), numIsPositiveInt: isPositiveInt$(num) }
  });
  if (isEmpty(set) || eq(num, 0)) {
    return [];
  } else {
    return set.slice(num, set.length);
  }
}
