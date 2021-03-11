import { cond } from "../conditional/cond";
import { number$ } from "./number$";
import { boolean$ } from "./boolean$";
import { string$ } from "./string$";
import { split } from "../string/split";

/**
 * Returns a negative number, zero, or a positive number
 * when x is logically 'less than', 'equal to', or 'greater than'
 * y. Works with number, string, and boolean values---as well as Arrays
 * of those values. Compares numbers and Arrays in a type-independent
 * manner; however the types compared must always match.
 *
 * When comparing strings, a delta in a string returns the distance between
 * the first two letters that don't match. See examples below for deta
 * @param left
 * @param right
 */
export function compare(left: any, right: any): number {
  // prettier-ignore
  return cond(
    () => number$(left), () => compareNumbers(left, right),
    () => boolean$(left), () => compareBools(left, right),
    () => string$(left), () => compareStrings(left, right),
    () => Array.isArray(left), () => compareArrays(left, right)
  );
}

function compareNumbers(left: number | string, right: number | string) {
  // prettier-ignore
  return cond(
    left > right, 1,
    left === right, 0,
    left < right, -1
  );
}

function compareStrings(left: string, right: string) {
  const _left = split(left);
  const _right = split(right);

  for (let x = 0; x < left.length; x++) {
    const result = compareNumbers(_left[x], _right[x]);
    if (result !== 0) {
      return _left[x].charCodeAt(0) - _right[x].charCodeAt(0);
    }
  }

  return compareNumbers(_left.length, _right.length);
}

function compareBools(left: boolean, right: boolean) {
  // prettier-ignore
  return cond(
    left && !right, 1,
    !left && right, -1,
    left && right || !left && !right, 0
  );
}

function compareArrays(left: Array<string | number | boolean>, right: Array<string | number | boolean>) {
  if (left.length > right.length) {
    return 1;
  } else if (left.length < right.length) {
    return -1;
  }

  for (let x = 0; x < left.length; x++) {
    const result = compare(left[x], right[x]);

    if (result !== 0) {
      return result;
    }
  }

  return 0;
}
