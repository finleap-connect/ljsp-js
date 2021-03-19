import { get, set } from "lodash";
import { swap } from "./swap";

/**
 * @param {{}} coll
 * @param {string[]} keys
 * @param {Function} fn
 * @param {*} rest
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'coll' implicitly has an 'any' type.
export function updateIn(coll, keys, fn, ...rest) {
  const propertyPath = keys.join(".");
  const updateValue = get(coll, propertyPath);
  const result = fn(updateValue, ...rest);
  return swap(coll, set, propertyPath, result);
}
