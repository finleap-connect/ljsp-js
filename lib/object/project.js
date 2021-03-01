import { pick } from "lodash";
import { makeArray } from "../list/make-array";
import { spec } from "../spec/spec";

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
