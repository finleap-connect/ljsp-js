import { flow, identity, isFunction, map } from "lodash";
import { spec } from "../spec/spec";
import { castEntriesArrayToObject } from "./internal/cast-entries-array-to-object";
import { objectLike$ } from "../generic/object-like$";

/**
 * @param {Function} inner
 * @param {Function} outer
 * @param {[]} set
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'inner' implicitly has an 'any' type.
export function walk(inner, outer, set) {
  spec({
    func: "walk",
    spec: {
      innerIsFunction: isFunction(inner),
      outerIsFunction: isFunction(outer),
      setIsArrayOrObject: objectLike$(set)
    }
  });
  const isSetArray = Array.isArray(set);
  const form = isSetArray ? set : Object.entries(set);
  const mapper = flow(map, isSetArray ? identity : castEntriesArrayToObject);
  const preliminaryResult = mapper(form, inner);

  return outer(preliminaryResult);
}
