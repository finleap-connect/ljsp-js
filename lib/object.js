import {
  cloneDeep,
  get,
  isEmpty,
  isFunction,
  isObject,
  isObjectLike,
  isString,
  pick,
  set
} from "lodash";
import { and, iff } from "./conditional";
import { isObjectSet } from "./generic";
import { makeArray, reduceKv } from "./list";
import { spec } from "./spec";

const watcher = "__watcher";

/**
 * @param map
 * @param fn
 * @param rest
 * @returns {*}
 */
export function swap(map, fn, ...rest) {
  spec({
    func: "swap",
    spec: { mapIsObject: isObject(map) && !isFunction(map), fnIsFunction: isFunction(fn) }
  });
  let clone = cloneDeep(map);
  if (map.hasOwnProperty(watcher)) {
    clone = new Proxy(clone, map.__watcher.setHandler);
  }
  return fn(clone, ...rest);
}

/**
 * @param {{}} coll
 * @param {string[]} keys
 * @param {Function} fn
 * @param {*} rest
 * @returns {*}
 */
export function updateIn(coll, keys, fn, ...rest) {
  spec({
    func: "updateIn",
    spec: {
      collIsObject: isObject(coll),
      fnIsFunction: isFunction(fn),
      keysIsArray: Array.isArray(keys),
      keysIsNotEmpty: !isEmpty(keys)
    }
  });
  const propertyPath = keys.join(".");
  const updateValue = get(coll, propertyPath);
  const result = fn(updateValue, ...rest);
  return swap(coll, set, propertyPath, result);
}

/**
 * @param {{}} map
 * @param {string} key
 * @param {Function} watchFn
 * @returns {boolean|*}
 */
export function addWatch(map, key, watchFn) {
  spec({
    func: "addWatch",
    spec: {
      mapIsObject: isObject(map),
      validKey: isString(key) && key.trim() !== "",
      watchIsFunction: isFunction(watchFn),
      watchHasFourArgs: watchFn.length === 4
    }
  });
  const keys =
    map.__watcher && map.__watcher.keys ? { ...map.__watcher.keys, [key]: key } : { [key]: key };

  const watchedMap = cloneDeep(map);

  const setHandler = {
    set(obj, prop, value) {
      if (watchedMap.__watcher.keys[prop]) {
        watchFn(prop, watchedMap, watchedMap[prop], value);
      }
      return Reflect.set(...arguments);
    }
  };

  const proxy = new Proxy(watchedMap, setHandler);

  // Create a non-standard, non-serialisable property to mark this object as being watched
  Object.defineProperty(proxy, watcher, {
    value: { setHandler, keys },
    writable: false,
    enumberable: false
  });

  return proxy;
}

/**
 * @param {{}} map
 * @param {string} key
 */
export function removeWatch(map, key) {
  spec({
    func: "removeWatch",
    spec: {
      mapIsWatched: map.hasOwnProperty(watcher) && Array.isArray(map.keys) && !isEmpty(map.keys),
      keyIsString: isString(key)
    }
  });
  delete map.__watcher.keys[key];
  if (_.isEmpty(map.__watcher.keys)) {
    delete map.__watcher;
  }
}

/**
 * @param {{}} first
 * @param {{}[]}rest
 * @returns {*}
 */
export function merge(first, ...rest) {
  const target = cloneDeep(first);

  return rest.reduce((acc, cur) => {
    const source = cloneDeep(cur);
    acc = Object.assign(target, source);
    return acc;
  }, target);
}

/**
 * @param {{}|{}[]} objects
 * @param {string[]} keys
 */
export function project(objects, keys) {
  const set = makeArray(objects);
  spec({
    func: "project",
    spec: {
      invalidKeys: Array.isArray(keys) && keys.length > 0,
      validObjects: isObjectSet(objects)
    }
  });
  return set.map((item) => {
    return pick(item, keys);
  });
}

/**
 * @param {Object[]} collection
 * @param mapper
 * @return {Object[]}
 */
export function rename(collection, mapper) {
  spec({
    func: "rename",
    spec: {
      collectionIsValid: and(Array.isArray(collection), collection.map(isObjectLike)),
      mapperIsValid: isObjectLike(mapper)
    }
  });

  function renameProperties(acc, key, value) {
    let newKey = iff(mapper[key], mapper[key], key);
    acc[newKey] = value;
    return acc;
  }

  return collection.map((item) => {
    return reduceKv(renameProperties, {}, item);
  });
}

/**
 * Returns all the own methods obj in an Array
 * @param {{}} obj
 * @returns {Function[]}
 */
export function ownMethods(obj) {
  spec({ func: "ownMethods", spec: { objIsObject: isObject(obj) } });
  return Object.values(obj).filter((item) => isFunction(item));
}
