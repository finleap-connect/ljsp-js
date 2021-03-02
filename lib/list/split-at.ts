import { take, takeRight } from "lodash";
import { isPositiveInt$ } from "../math/is-positive-int$";
import { spec } from "../spec/spec";

/**
 * @param {number} num
 * @param {[]} set
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'num' implicitly has an 'any' type.
export function splitAt(num, set) {
  spec({
    func: "splitAt",
    spec: { numIsPositiveInt: isPositiveInt$(num), setIsArray: Array.isArray(set) }
  });
  return [take(set, num), takeRight(set, set.length - num)];
}