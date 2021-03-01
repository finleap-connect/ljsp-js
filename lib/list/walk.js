import { flow, identity, isFunction, isObject, map } from "lodash";
import { spec } from "../spec/spec";
import { castEntriesArrayToObject } from "./internal/cast-entries-array-to-object";

/**
 * @param {Function} inner
 * @param {Function} outer
 * @param {[]} set
 */
export function walk(inner, outer, set) {
  spec({
    func: "walk",
    spec: {
      innerIsFunction: isFunction(inner),
      outerIsFunction: isFunction(outer),
      setIsArrayOrObject: Array.isArray(set) || isObject(set)
    }
  });
  const isSetArray = Array.isArray(set);
  const form = isSetArray ? set : Object.entries(set);
  const mapper = flow(map, isSetArray ? identity : castEntriesArrayToObject);
  const preliminaryResult = mapper(form, inner);

  return outer(preliminaryResult);
}
