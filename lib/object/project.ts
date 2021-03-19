import { pick } from "lodash";
import { makeArray } from "../list/make-array";

/**
 * @param {{}|{}[]} objects
 * @param {string[]} keys
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'objects' implicitly has an 'any' type.
export function project(objects, keys) {
  const set = makeArray(objects);
  return set.map((item) => {
    return pick(item, keys);
  });
}
