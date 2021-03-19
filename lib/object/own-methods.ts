import { isFunction } from "lodash";

/**
 * Returns all the own methods obj in an Array
 * @param {{}} obj
 * @returns {Function[]}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'obj' implicitly has an 'any' type.
export function ownMethods(obj) {
  return Object.values(obj).filter((item) => isFunction(item));
}
