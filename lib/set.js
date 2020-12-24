import { cond, ELSE } from "./conditional";
import { isStringSet } from "./generic";
import { spec } from "lib/spec";
import { isPositiveInteger } from "lib/validation";
import chunk from "lodash/chunk";
import compact from "lodash/compact";
import findIndex from "lodash/findIndex";
import isEmpty from "lodash/isEmpty";
import isObject from "lodash/isObject";
import isString from "lodash/isString";

/**
 * @param {[]} set
 * @param {string|number} id
 * @param {string} [idProp="id]
 * @returns {*}
 */
export function findInSetById(set, id, idProp = "id") {
  return set.find((item) => item[idProp] === id);
}

/**
 * @param {[]} set
 * @param {string|number} id
 * @param {string} [idProp="id]
 * @returns {*}
 */
export function removeFromSetById(set, id, idProp = "id") {
  return set.filter((item) => item[idProp] !== id);
}

/**
 * @param {*[]} set
 * @param {object} updateItem
 * @param {string} [id="id"]
 * @returns {*}
 */
export function updateSet(set, updateItem, id = "id") {
  return set.map((element) => {
    return element[id] === updateItem[id] ? updateItem : element;
  });
}

function getSectionIndex(section, sectionSize) {
  return (section - 1) * sectionSize;
}

/**
 * @param {[]} set
 * @param {number} section
 * @param {number} sectionSize
 * @returns {[]}
 */
export function getSectionFromSet(set, section, sectionSize) {
  spec({
    func: "getPage",
    spec: {
      data: Array.isArray(set),
      section: isPositiveInteger(section),
      sectionSize: isPositiveInteger(sectionSize),
      validSection: getSectionIndex(section, sectionSize) <= set.length
    }
  });
  const start = getSectionIndex(section, sectionSize);
  const end = start + sectionSize;
  return set.slice(start, end);
}

/**
 * @param {[]} left
 * @param {[]} right
 * @returns {[]}
 */
export function rightDiff(left, right) {
  return left.filter((x) => !right.includes(x));
}

/**
 * @param {[]} left
 * @param {[]} right
 * @returns {[]}
 */
export function leftDiff(left, right) {
  return right.filter((x) => !left.includes(x));
}

/**
 * Creates an array of elements split into groups the length of size.
 * If the array can't be split evenly, the final chunk will be the remaining elements.
 * A thin wrapper over lodash chunk.
 * @param set
 * @param num
 * @returns {*}
 */
export function part(set, num) {
  return chunk(set, num);
}

/**
 * Returns a new collection with the right param added to the left.
 * @param {[]|{}} set
 * @param {[]|{}} rest
 * @returns {*[]|*|}
 */
export function conj(set, ...rest) {
  return Array.isArray(set) ? [...set, ...compact(rest)] : { ...set, ...rest };
}

/**
 * Returns an Array consisting of the result of applying a function `f` to 0
 * and the first item of coll, followed by applying f to 1 and the second
 * item in coll, etc, until coll is exhausted. Thus function `f` should
 * accept 2 arguments, index and item.
 * @param {Function} fn
 * @param {[]} value
 */
export function mapIndexed(fn, value) {
  spec({
    func: "mapIndexed",
    spec: { validValue: Array.isArray(value) || isObject(value) || isString(value) }
  });
  // prettier-ignore
  const _value = cond(
    () => Array.isArray(value), value,
    () => isObject(value), () => Object.entries(value),
    ELSE, () => value.split("")
  );

  return _value.map((item, index) => {
    return fn(index, item);
  });
}

/**
 * @param {{}} obj
 * @param {string[]} rest
 * @returns {*}
 */
export function dissoc(obj, ...rest) {
  spec({
    func: "dissociate",
    spec: { firstIsObject: isObject(obj), propIsString: isStringSet(rest) }
  });
  return Object.entries(obj).reduce((acc, [key, val]) => {
    if (!rest.includes(key)) {
      acc[key] = val;
    }
    return acc;
  }, {});
}

/**
 * @param {Function} fn
 * @param {*} init
 * @param {{} | []} coll
 */
export function reduceKv(fn, init, coll) {
  if (isEmpty(coll)) {
    return init;
  }
  return isObject(coll)
    ? Object.entries(coll).reduce((acc, [k, v]) => fn(init, k, v), init)
    : coll.reduce((acc, cur, idx) => fn(acc, idx, cur), init);
}

/**
 * The insertItem method is an immutable alternative to the
 * Array.prototype.splice method, which mutates the array in place.
 * This method, and its named interfaces, are also more semantic
 * and provide named parameters to improve readability.
 */
function listInsert(source, insert, locator, isBefore) {
  const index = findIndex(source, locator);
  const boundary = isBefore ? index - 1 : index;
  return [
    ...source.slice(0, boundary),
    ...(Array.isArray(insert) ? insert : [insert]),
    ...source.slice(boundary, source.length)
  ];
}

/**
 * @param {[]} source
 * @param {*} insert
 * @param {*} locator
 * @returns {*}
 */
export function listInsertBefore({ source, insert, locator }) {
  return listInsert(source, insert, locator, true);
}

/**
 * @param {[]} source
 * @param {*} insert
 * @param {*} locator
 * @returns {*}
 */
export function listInsertAfter({ source, insert, locator }) {
  return listInsert(source, insert, locator);
}

/**
 * @param item
 * @returns {*|*[]}
 */
export function makeArray(item) {
  return Array.isArray(item) ? item : [item];
}

/**
 * @param {{}} map
 * @param {string[]} keys
 */
export function selectKeys(map, keys) {
  return reduceKv(
    (acc, key, value) => {
      if (keys.includes(key)) {
        acc[key] = value;
      }
      return acc;
    },
    {},
    map
  );
}
