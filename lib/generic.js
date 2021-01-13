import { isNumber, isString, isEqual, isFunction, isObject } from "lodash";
import { spec } from "./spec";

/**
 * @param {[]} set
 * @param {Function} fn
 * @returns {Boolean}
 */
export function isTypedSet(set, fn) {
  return set.every((item) => fn(item));
}

/**
 * @param {[]} set
 * @returns {Boolean}
 */
export function isStringSet(set) {
  spec({ func: "isStringSet", spec: { setIsArray: Array.isArray(set) } });
  return isTypedSet(set, isString);
}

/**
 * @param {[]} set
 * @returns {Boolean}
 */
export function isObjectSet(set) {
  spec({ func: "isObjectSet", spec: { setIsArray: Array.isArray(set) } });
  return isTypedSet(set, isObject);
}

/**
 * @param {[]} set
 * @returns {Boolean}
 */
export function isFunctionSet(set) {
  spec({ func: "isFunctionSet", spec: { setIsArray: Array.isArray(set) } });
  return isTypedSet(set, (item) => isFunction(item));
}

/**
 * @param {[]} set
 * @returns {Boolean}
 */
export function isArraySet(set) {
  spec({ func: "isArraySet", spec: { setIsArray: Array.isArray(set) } });
  return isTypedSet(set, (item) => Array.isArray(item));
}

/**
 * @param {[]} set
 * @returns {Boolean}
 */
export function isNumberSet(set) {
  return isTypedSet(set, isNumber);
}

function simpleNotEqual(left, right) {
  return left !== right;
}

function deepNotEqual(left, right) {
  return !isEqual(left, right);
}

function _eq(args, comparator) {
  if (args.length === 1) {
    return true;
  }
  let left = args[0];
  for (let i = 1; i < args.length; i++) {
    let right = args[i];
    if (comparator(left, right)) {
      return false;
    }
    left = right;
  }
  return true;
}

/**
 * @param {*} rest
 * @returns {boolean}
 */
export function eq(...rest) {
  spec({
    func: "eq",
    spec: { typeIsPrimitive: isTypedSet(rest, (item) => !isObject(item) && !Array.isArray(item)) }
  });
  return _eq(rest, simpleNotEqual);
}

/**
 * @param {*} rest
 * @returns {boolean}
 */
export function notEq(...rest) {
  spec({
    func: "eq",
    spec: { typeIsPrimitive: isTypedSet(rest, (item) => !isObject(item) && !Array.isArray(item)) }
  });
  return !_eq(rest, simpleNotEqual);
}

/**
 * @param {[] | object} rest
 * @returns {boolean}
 */
export function deepEq(...rest) {
  spec({
    func: "eq",
    spec: { typeIsStructural: isTypedSet(rest, (item) => isObject(item) || Array.isArray(item)) }
  });
  return _eq(rest, deepNotEqual);
}

/**
 * @param {Function} rest
 * @returns {*}
 */
export function doWork(...rest) {
  spec({ func: "doWork", spec: { typeIsFunction: isFunctionSet(rest) } });
  if (rest.length === 0) {
    return undefined;
  }
  return rest.reduce((acc, cur) => {
    return cur();
  });
}

/**
 * @param rest
 * @returns {boolean}
 */
export function areDistinct(...rest) {
  const map = {};
  return rest.every((arg) => {
    // eslint-disable-next-line
    return map.hasOwnProperty(arg) ? false : ((map[arg] = arg), true);
  });
}
