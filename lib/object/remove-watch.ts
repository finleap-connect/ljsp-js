import { spec } from "../spec/spec";
import { watcher } from "./internal/constants";
import { notEmpty$ } from "../generic/not-empty$";
import { string$ } from "../generic/string$";
import { TAnyObject } from "../types/t-any-object";
import { empty$ } from "../generic/empty$";

export function removeWatch(map: TAnyObject, key: string) {
  spec({
    func: "removeWatch",
    spec: {
      mapIsWatched: map.hasOwnProperty(watcher) && Array.isArray(map.keys) && notEmpty$(map.keys),
      keyIsString: string$(key)
    }
  });
  // @ts-ignore
  delete map.__watcher.keys[key];
  // @ts-ignore
  if (empty$(map.__watcher.keys)) {
    delete map.__watcher;
  }
}
