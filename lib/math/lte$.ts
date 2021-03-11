import { numberSet$ } from "../generic";
import { spec } from "../spec";
import { _compareNums } from "./internal/compare-vals";

/**
 * Returns true if nums are in monotonically increasing order,
 * otherwise false.
 * @param {number} rest
 */
export function lte$(...rest: Array<number>) {
  spec({ func: "lte$", spec: { isNumberSet: numberSet$(rest) } });
  return _compareNums(rest, lessThanEqual);
}

function lessThanEqual(a: number, b: number) {
  return a <= b;
}
