import { isNumberSet } from "./generic";
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
  spec({ func: "subtract", spec: { validArgNum: rest.length > 0, argsAreNums: isNumberSet(rest) } });
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
  spec({ func: "inc", spec: { isInteger: Number.isInteger(num) } });
  return add(num, 1);
}

/**
 * @param {number} num
 * @returns {number}
 */
export function dec(num) {
  spec({ func: "inc", spec: { isInteger: Number.isInteger(num) } });
  return sub(num, 1);
}

function isNonZero(num) {
  return Number.isInteger(num) && num > 0;
}

/**
 * @param {number} dividend
 * @param {number} divisor
 * @returns {number}
 */
export function quot(dividend, divisor) {
  spec({
    func: "quot",
    spec: { isDividendInteger: isNonZero(dividend), isDivisorInteger: isNonZero(dividend) }
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
    spec: { isDividendInteger: isNonZero(dividend), isDivisorInteger: isNonZero(dividend) }
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
    spec: { isDividendInteger: isNonZero(dividend), isDivisorInteger: isNonZero(dividend) }
  });
  let mod = dividend % divisor;
  if (mod < 0) {
    mod = divisor < 0 ? mod - divisor : mod + divisor;
  }
  return mod;
}
