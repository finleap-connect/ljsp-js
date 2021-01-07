import {
  chunk,
  compact,
  findIndex,
  first,
  isEmpty,
  isObject,
  isString,
  isFunction,
  flatten
} from "lodash";
import { cond, ELSE } from "./conditional";
import { isArraySet, isStringSet } from "./generic";
import { spec } from "./spec";
import { isPositiveInt } from "./validation";

/**
 * @param {[]} set
 * @param {string|number} id
 * @param {string} [idProp="id]
 * @returns {*}
 */
export function findInSetById(set, id, idProp = "id") {
  spec({ func: "findInSetById", spec: { setIsArray: Array.isArray(set) } });
  return set.find((item) => item[idProp] === id);
}

/**
 * @param {[]} set
 * @param {string|number} id
 * @param {string} [idProp="id]
 * @returns {*}
 */
export function removeFromSetById(set, id, idProp = "id") {
  spec({ func: "removeFromSetById", spec: { setIsArray: Array.isArray(set) } });
  return set.filter((item) => item[idProp] !== id);
}

/**
 * @param {*[]} set
 * @param {object} updateItem
 * @param {string} [id="id"]
 * @returns {*}
 */
export function updateSet(set, updateItem, id = "id") {
  spec({ func: "updateSet", spec: { setIsArray: Array.isArray(set) } });
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
      section: isPositiveInt(section),
      sectionSize: isPositiveInt(sectionSize),
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
  spec({
    func: "rightDiff",
    spec: { leftIsArray: Array.isArray(left), rightIsArray: Array.isArray(right) }
  });
  return left.filter((x) => !right.includes(x));
}

/**
 * @param {[]} left
 * @param {[]} right
 * @returns {[]}
 */
export function leftDiff(left, right) {
  spec({
    func: "leftDiff",
    spec: { leftIsArray: Array.isArray(left), rightIsArray: Array.isArray(right) }
  });
  return right.filter((x) => !left.includes(x));
}

/**
 * @param set
 * @param num
 * @returns {*}
 */
export function part(set, num) {
  spec({ func: "part", spec: { setIsArray: Array.isArray(set), numIsInt: Number.isInteger(num) } });
  return chunk(set, num);
}

/**
 * @param {[]|{}} set
 * @param {[]|{}} rest
 * @returns {*[]|*|}
 */
export function conj(set, ...rest) {
  if (Array.isArray(set)) {
    const addition = first(compact(rest));
    return set.concat(addition);
  } else {
    return rest.reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, set);
  }
}

/**
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
  spec({
    func: "reduceKv",
    spec: { fnIsFunction: isFunction(fn), collIsArrayOrObj: Array.isArray(coll) || isObject(coll) }
  });
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
  spec({ func: "listInsertBefore", spec: { sourceIsArray: Array.isArray(source) } });
  return listInsert(source, insert, locator, true);
}

/**
 * @param {[]} source
 * @param {*} insert
 * @param {*} locator
 * @returns {*}
 */
export function listInsertAfter({ source, insert, locator }) {
  spec({ func: "listInsertAfter", spec: { sourceIsArray: Array.isArray(source) } });
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
  spec({
    func: "selectKeys",
    spec: { mapIsObject: isObject(map), keysIsStringArray: isStringSet(keys) }
  });
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

/**
 * @param {[]} rest
 * @returns {*}
 */
export function minLenList(...rest) {
  spec({ func: "minLenList", spec: { argsAreArrays: isArraySet(rest) } });
  return rest.reduce((acc, cur) => {
    // prettier-ignore
    return cond(
      () => acc === -1, () => cur,
      () => acc.length < cur.length, acc,
      ELSE, cur
    )
  }, -1);
}

/**
 * @param {[]} rest
 * @returns {*}
 */
export function interleave(...rest) {
  if (!isEmpty(rest)) {
    spec({ func: "interleave", spec: { argsAreArrays: isArraySet(rest) } });
  }
  // prettier-ignore
  return cond(
    () => isEmpty(rest), () => undefined,
    () => rest.length === 1, first(rest),
    ELSE, () => {
      // find the shortest list
      const maxIterations = minLenList(...rest).length;
      // get the first list
      const base = first(rest);
      let temp = [];

      return base.reduce((acc, cur, idx) => {
        if(idx < maxIterations) {
          temp = [];
          for(let i = 1; i < rest.length; i++) {
            temp.push(rest[i][idx]);
          }
          acc = [...acc, cur, ...temp]
        }
        return acc
      }, [])
    }
  )
}

/**
 * @param {[]} set
 * @param {[]} subset
 * @returns {*}
 */
export function subset(set, subset) {
  spec({
    func: "subset",
    spec: { setIsArray: Array.isArray(set), subsetIsArray: Array.isArray(subset) }
  });
  return subset.every((item) => set.includes(item));
}

/**
 * @param {[]} to
 * @param {[]|Function}from
 * @param {[]} xFrom
 * @returns {*}
 */
export function into(to, from, xFrom) {
  spec({ func: "into", spec: { toIsArray: to ? Array.isArray(to) : true } });
  // prettier-ignore
  return cond(
    () => !to, () => [],
    () => !from, () => to,
    () => !xform, () => conj(to, from),
    ELSE, () => {
      const result = from(xFrom);
      return conj(to, result);
    }
  )
}

/**
 * @param {[]} set
 * @returns {*}
 */
export function frequencies(set) {
  spec({ func: "frequencies", spec: { setIsArray: Array.isArray(set) } });
  return set.reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur)) {
      acc[cur] = acc[cur] + 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
}

/**
 * @param {[]} set
 * @returns {*}
 */
export function rest(set) {
  spec({ func: "rest", spec: { setIsArray: Array.isArray(set) } });
  return set.slice(1);
}

/**
 * @param {*} item
 * @param {[]} set
 * @returns {*[]}
 */
export function cons(item, set) {
  spec({ func: "cons", spec: { setIsArray: Array.isArray(set) } });
  return [item, ...set];
}

/**
 * @param comp
 * @param set
 */
export function sort(comp, set) {
  spec({
    func: "sort",
    spec: {
      validComp: !set ? Array.isArray(comp) : isFunction(comp),
      validSet: set ? Array.isArray(set) : true
    }
  });
  return Array.isArray(comp) ? comp.slice().sort() : set.slice().sort(comp);
}

/**
 * @param {[{}]} tree
 * @returns {*}
 */
export function flattenChildTree(tree) {
  spec({ func: "flattenChildTree", spec: { setIsArray: Array.isArray(tree) } });
  return flatten(
    tree.map((node) => {
      return isEmpty(node.children) ? node : flatten(cons(node, flattenChildTree(node.children)));
    })
  );
}
