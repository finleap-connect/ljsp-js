import { _compare } from "./internal/compare-vals";

/**
 * Returns true if nums are in monotonically increasing order,
 * otherwise false.
 * @param {number} rest
 */
export function lt$(...rest: Array<number | string>): boolean {
  return _compare(rest, lessThan);
}

function lessThan(a: number, b: number) {
  return a < b;
}
