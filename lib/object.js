import cloneDeep from "lodash/cloneDeep";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import isFunction from "lodash/isFunction";
import isObject from "lodash/isObject";
import isString from "lodash/isString";
import set from "lodash/set";
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
  debugger;
  if (_.isEmpty(map.__watcher.keys)) {
    delete map.__watcher;
  }
}
