import { numberSet$ } from "../generic";
import { spec } from "../spec";
import { _compareNums } from "./internal/compare-vals";

/**
 * Returns true if nums are in monotonically increasing order,
 * otherwise false.
 * @param {number} rest
 */
export function lt$(...rest: Array<number>): boolean {
  spec({ func: "lt$", spec: { isNumberSet: numberSet$(rest) } });
  return _compareNums(rest, lessThan);
}

function lessThan(a: number, b: number) {
  return a < b;
}
