import { isFunction } from "lodash";
import { spec } from "../spec/spec";

/**
 * @param {Function} pred
 * @param {[]} set
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'pred' implicitly has an 'any' type.
export function some(pred, set) {
  spec({
    func: "includes",
    spec: { setIsArray: Array.isArray(set), predIsFunction: isFunction(pred) }
  });
  return set.find(pred);
}
