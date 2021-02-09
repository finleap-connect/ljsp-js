import { isNumber } from "lodash";
import { and } from "./conditional";
import { eq, isNumberSet, notEq } from "./generic";
import { spec } from "./spec";

/**
 * @param {number} rest
 * @returns {*}
 */
export function add(...rest) {
  spec({ func: "add", spec: { argsAreNums: isNumberSet(rest) } });
  if (rest.length === 0) {
    return 0;
  }
  return rest.reduce((acc, cur) => {
    return acc + cur;
  });
}

/**
 * @param {number} rest
 * @returns {number}
 */
export function sub(...rest) {
  spec({
    func: "subtract",
    spec: { validArgNum: rest.length > 0, argsAreNums: isNumberSet(rest) }
  });
  if (rest.length === 1) {
    return -rest[0];
  }
  return rest.reduce((acc, cur) => {
    return acc - cur;
  });
}

/**
 * @param {number} rest
 * @returns {number}
 */
export function mult(...rest) {
  spec({ func: "mult", spec: { argsAreNums: isNumberSet(rest) } });
  if (rest.length === 0) {
    return 1;
  }
  return rest.reduce((acc, cur) => {
    return acc * cur;
  });
}

/**
 * @param {number} rest
 * @returns {number}
 */
export function div(...rest) {
  spec({ func: "div", spec: { validArgNum: rest.length > 0, argsAreNums: isNumberSet(rest) } });
  if (rest.length === 1) {
    return 1 / rest[0];
  }
  return rest.reduce((acc, cur) => {
    return acc / cur;
  });
}

/**
 * @param {number} num
 * @returns {number}
 */
export function inc(num) {
  spec({ func: "inc", spec: { isInteger: isNumber(num) } });
  return add(num, 1);
}

/**
 * @param {number} num
 * @returns {number}
 */
export function dec(num) {
  spec({ func: "inc", spec: { isInteger: isNumber(num) } });
  return sub(num, 1);
}

/**
 * Returns true if num is greater than zero, otherwise false
 * @param num
 * @returns {boolean}
 */
export function pos$(num) {
  spec({ func: "pos$", spec: { numIsInt: isNumber(num) } });
  return num > 0;
}

/**
 * Returns true if num is less than zero, otherwise false
 * @param num
 * @returns {boolean}
 */
export function neg$(num) {
  spec({ func: "neg$", spec: { numIsInt: isNumber(num) } });
  return num < 0;
}

/**
 * Returns true if num is zero, otherwise false
 * @param num
 * @returns {boolean}
 */
export function zero$(num) {
  spec({ func: "zero$", spec: { numIsInt: Number.isInteger(num) } });
  return eq(num, 0);
}

/**
 * Returns true if num is odd, otherwise false
 * @param num
 * @returns {boolean}
 */
export function odd$(num) {
  spec({ func: "odd$", spec: { numIsInt: Number.isInteger(num) } });
  return notEq(num % 2, 0);
}

/**
 * Returns true if num is odd, otherwise false
 * @param num
 * @returns {boolean}
 */
export function even$(num) {
  spec({ func: "even$", spec: { numIsInt: Number.isInteger(num) } });
  return eq(num % 2, 0);
}

/**
 * @param {number} dividend
 * @param {number} divisor
 * @returns {number}
 */
export function quot(dividend, divisor) {
  spec({
    func: "quot",
    spec: { isDividendInteger: pos$(dividend), isDivisorInteger: pos$(dividend) }
  });
  return Math.trunc(dividend / divisor);
}

/**
 * @param {number} dividend
 * @param {number} divisor
 * @returns {number}
 */
export function remain(dividend, divisor) {
  spec({
    func: "quot",
    spec: { isDividendInteger: pos$(dividend), isDivisorInteger: pos$(dividend) }
  });
  return dividend % divisor;
}

/**
 * @param {number} dividend
 * @param {number} divisor
 * @returns {number}
 */
export function mod(dividend, divisor) {
  spec({
    func: "quot",
    spec: { isDividendInteger: pos$(dividend), isDivisorInteger: pos$(dividend) }
  });
  let mod = dividend % divisor;
  if (mod < 0) {
    mod = divisor < 0 ? mod - divisor : mod + divisor;
  }
  return mod;
}

/**
 * Returns true if nums are in monotonically increasing order,
 * otherwise false.
 * @param {number} rest
 */
export function lt$(...rest) {
  spec({ func: "lt", spec: { isNumberSet: isNumberSet(rest) } });
  return rest.reduce((acc, cur) => {
    return eq(acc, false) ? acc : acc < cur;
  });
}

/**
 * Returns true if nums are in monotonically decreasing order,
 * otherwise false.
 * @param {number} rest
 */
export function gt$(...rest) {
  spec({ func: "gt", spec: { isNumberSet: isNumberSet(rest) } });
  return rest.reduce((acc, cur) => {
    return eq(acc, false) ? acc : acc > cur;
  });
}

/**
 * Determines if a number is a Float
 * @param n
 * @returns {boolean}
 */
export function float$(n) {
  return and(eq(Number(n), n), notEq(n % 1, 0));
}
