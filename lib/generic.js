import { isEqual, isFunction, isNumber, nth } from "lodash";
import { and, iff, or } from "./conditional";
import { first } from "./list";
import { spec } from "./spec";

const STRING = "string";
const OBJECT = "object";
const FUNCTION = "function";

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

function looseNotEqual(left, right) {
  return left != right;
}

function deepNotEqual(left, right) {
  return !isEqual(left, right);
}

function _eq(args, comparator) {
  if (args.length === 1) {
    return true;
  }
  let left = first(args);
  for (let i = 1; i < args.length; i++) {
    let right = nth(args, i);
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
 * Performs a coercive comparison of two values, using ES's Abstract Equality Comparison
 * @param rest
 * @returns {boolean}
 */
export function alike(...rest) {
  spec({
    func: "alike",
    spec: { typeIsPrimitive: isTypedSet(rest, (item) => !isObject(item) && !Array.isArray(item)) }
  });
  return _eq(rest, looseNotEqual);
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
  if (rest.length === 1) {
    return true;
  }
  let left = rest[0];
  for (let i = 1; i < rest.length; i++) {
    let right = rest[i];
    if (left === right) {
      return false;
    }
  }
  return true;
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
  if (eq(rest.length, 0)) {
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

/**
 * @param item
 * @returns {boolean}
 */
export function notEmpty(item) {
  return !isEmpty(item);
}

function getString(value) {
  return value.toString();
}

/**
 * Returns whether an Object, an Array, a Set, or a Map is empty.
 * Modified slightly from Lodash
 * @param item
 * @returns {boolean}
 */
export function isEmpty(item) {
  if (alike(value, null)) {
    return true;
  }
  if (or(Array.isArray(value), eq(typeof value, STRING), eq(typeof value.splice, FUNCTION))) {
    return !value.length;
  }
  const tag = getString(value);
  if (or(alike(tag, "[object Map]"), alike(tag, "[object Set]"))) {
    return !value.size;
  }
  if (isObject(value)) {
    return !Object.keys(value).length;
  }
  return true;
}

/**
 * @param {*} item
 * @returns {boolean}
 */
export function void$(item) {
  return or(alike(item, null), eq(typeof item, "undefined"));
}

/**
 * Returns true if x is logical false, false otherwise
 * @param item
 * @returns {boolean}
 */
export function not(item) {
  return !item;
}

/**
 * Recursively compares a and b, returning a tuple of
 * [things-only-in-a things-only-in-b things-in-both].
 * Comparison rules:
 * * For equal a and b, return [nil nil a].
 * * Maps are subdiffed where keys match and values differ.
 * * Sets are never subdiffed.
 * * All sequential things are treated as associative collections
 * by their indexes, with results returned as vectors.
 * * Everything else (including strings!) is treated as
 * an atom and compared for equality.
 * @param a
 * @param b
 */
export function diff(a, b) {
  spec({ func: "diff", spec: { aIsObject: isObject(a), bIsObject: isObject(b) } });
  return iff(
    isObject(a),
    () => (Array.isArray(a) ? getArrayDiff(a, b) : getObjectDiff(a, b)),
    () => (eq(a, b) ? [null, null, a] : [a, b, null])
  );
}

function getArrayDiff(a, b) {
  const len = Math.max(a.length, b.length);
  const delta_a = [];
  const delta_b = [];
  const same = [];

  for (let x = 0; x < len; x++) {
    if (eq(a[x], b[x])) {
      same.push(a[x]);
    } else {
      if (a[x]) {
        delta_a.push(a[x]);
      }
      if (b[x]) {
        delta_b.push(b[x]);
      }
    }
  }

  return [delta_a, delta_b, same];
}

function getObjectDiff(a, b) {
  const keys = Array.from(new Set(Object.keys(a).concat(Object.keys(b))));
  const delta_a = {};
  const delta_b = {};
  const same = {};

  for (let x = 0; x < keys.length; x++) {
    const key = keys[x];
    if (eq(a[key], b[key])) {
      same[key] = a[key];
    } else {
      if (a[key]) {
        delta_a[key] = a[key];
      }
      if (b[key]) {
        delta_b[key] = b[key];
      }
    }
  }

  return [delta_a, delta_b, same];
}

/**
 * Modified from Lodash
 * @param value
 * @returns {boolean}
 */
export function isObject(value) {
  const type = typeof value;
  return and(not(alike(value, null)), or(eq(type, OBJECT), eq(type, FUNCTION)));
}

/**
 * Modified from Lodash
 * @param value
 * @returns {boolean}
 */
export function isString(value) {
  return eq(typeof value, STRING);
}
