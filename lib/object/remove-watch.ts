// @ts-nocheck
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
      mapIsWatched: map.hasOwnProperty(watcher),
      keyIsString: string$(key)
    }
  });
  delete map.__watcher.keys[key];
  if (empty$(map.__watcher.keys)) {
    delete map.__watcher;
  }
}
