import { _compare } from "./internal/compare-vals";

/**
 * Returns true if nums are in monotonically decreasing order,
 * otherwise false.
 * @param {number} rest
 */
export function gt$(...rest: Array<number | string>): boolean {
  return _compare(rest, greaterThan);
}

function greaterThan(a: number, b: number) {
  return a > b;
}
