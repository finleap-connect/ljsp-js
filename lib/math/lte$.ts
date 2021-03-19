import { _compare } from "./internal/compare-vals";

/**
 * Returns true if nums are in monotonically increasing order,
 * otherwise false.
 * @param {number} rest
 */
export function lte$(...rest: Array<number | string>) {
  return _compare(rest, lessThanEqual);
}

function lessThanEqual(a: number, b: number) {
  return a <= b;
}
