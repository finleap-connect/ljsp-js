// @ts-nocheck
import { spec } from "../spec/spec";
import { watcher } from "./internal/constants";
import { object$ } from "../generic/object$";
import { string$ } from "../generic/string$";
import { cloneDeep } from "../generic/clone-deep";
import { function$ } from "../generic/function$";

export function addWatch(map, key, watchFn) {
  spec(addWatch, {
    mapIsObject: object$(map),
    validKey: string$(key) && key.trim() !== "",
    watchIsFunction: function$(watchFn),
    watchHasFourArgs: watchFn.length === 4
  });
  const keys = map.__watcher && map.__watcher.keys ? { ...map.__watcher.keys, [key]: key } : { [key]: key };

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
    enumberable: false,
    configurable: true
  });

  return proxy;
}
