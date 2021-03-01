import { pick } from "lodash";
import { isObjectSet } from "../generic/is-object-set";
import { makeArray } from "../list/make-array";
import { spec } from "../spec/spec";

/**
 * @param {{}|{}[]} objects
 * @param {string[]} keys
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'objects' implicitly has an 'any' type.
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
