import { numberSet$ } from "../generic/number-set$";
import { spec } from "../spec/spec";
import { _compareNums } from "./internal/compare-vals";

/**
 * Returns true if nums are in monotonically decreasing order,
 * otherwise false.
 * @param {number} rest
 */
export function gte$(...rest: Array<number>) {
  spec({ func: "gte$", spec: { isNumberSet: numberSet$(rest) } });
  return _compareNums(rest, greaterThanEqual);
}

function greaterThanEqual(a: number, b: number) {
  return a >= b;
}
