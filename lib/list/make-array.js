import { identity, isFunction } from "lodash";
import { spec } from "../spec/spec";

/**
 * @param item
 * @param transform
 * @returns {*|*[]}
 */
export function makeArray(item, transform = identity) {
  spec({
    func: "makeArray",
    spec: {
      isTransformFn: isFunction(transform)
    }
  });
  return Array.isArray(item) ? item.map(transform) : [transform(item)];
}
