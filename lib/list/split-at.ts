import { take, takeRight } from "lodash";

/**
 * @param {number} num
 * @param {[]} set
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'num' implicitly has an 'any' type.
export function splitAt(num, set) {
  return [take(set, num), takeRight(set, set.length - num)];
}
