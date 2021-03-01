import { isEmpty, isString } from "lodash";
import { spec } from "../spec/spec";
import { watcher } from "./internal/constants";

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
