import { isFunction, isObject, isString } from "lodash";
import { spec } from "../spec/spec";
import { watcher } from "./internal/constants";
import { cloneDeep } from "../generic/clone-deep";

/**
 * @param {{}} map
 * @param {string} key
 * @param {Function} watchFn
 * @returns {boolean|*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'map' implicitly has an 'any' type.
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
  const keys = map.__watcher && map.__watcher.keys ? { ...map.__watcher.keys, [key]: key } : { [key]: key };

  const watchedMap = cloneDeep(map);

  const setHandler = {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'obj' implicitly has an 'any' type.
    set(obj, prop, value) {
      if (watchedMap.__watcher.keys[prop]) {
        watchFn(prop, watchedMap, watchedMap[prop], value);
      }
      // @ts-expect-error ts-migrate(2556) FIXME: Expected 3-4 arguments, but got 0 or more.
      return Reflect.set(...arguments);
    }
  };

  const proxy = new Proxy(watchedMap, setHandler);

  // Create a non-standard, non-serialisable property to mark this object as being watched
  Object.defineProperty(proxy, watcher, {
    value: { setHandler, keys },
    writable: false,
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ value: { setHandler: { set(obj... Remove this comment to see the full error message
    enumberable: false
  });

  return proxy;
}
