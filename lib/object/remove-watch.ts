import { isEmpty, isString } from "lodash";
import { spec } from "../spec/spec";
import { watcher } from "./internal/constants";

/**
 * @param {{}} map
 * @param {string} key
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'map' implicitly has an 'any' type.
export function removeWatch(map, key) {
  spec({
    func: "removeWatch",
    spec: {
      mapIsWatched: map.hasOwnProperty(watcher) && Array.isArray(map.keys) && !isEmpty(map.keys),
      keyIsString: isString(key)
    }
  });
  delete map.__watcher.keys[key];
  // @ts-expect-error ts-migrate(2686) FIXME: '_' refers to a UMD global, but the current file i... Remove this comment to see the full error message
  if (_.isEmpty(map.__watcher.keys)) {
    delete map.__watcher;
  }
}
