import { numberSet$ } from "../generic/number-set$";
import { spec } from "../spec/spec";
import { _compareNums } from "./internal/compare-vals";

/**
 * Returns true if nums are in monotonically decreasing order,
 * otherwise false.
 * @param {number} rest
 */
export function gt$(...rest: Array<number>): boolean {
  spec({ func: "gt$", spec: { isNumberSet: numberSet$(rest) } });
  return _compareNums(rest, greaterThan);
}

function greaterThan(a: number, b: number) {
  return a > b;
}
