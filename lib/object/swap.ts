import { cloneDeep } from "lodash";
import { watcher } from "./internal/constants";

/**
 * @param map
 * @param fn
 * @param rest
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'map' implicitly has an 'any' type.
export function swap(map, fn, ...rest) {
  let clone = cloneDeep(map);
  if (map.hasOwnProperty(watcher)) {
    clone = new Proxy(clone, map.__watcher.setHandler);
  }
  return fn(clone, ...rest);
}
