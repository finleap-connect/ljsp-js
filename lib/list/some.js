import { isFunction } from "lodash";
import { spec } from "../spec/spec";

/**
 * @param {Function} pred
 * @param {[]} set
 * @returns {*}
 */
export function some(pred, set) {
  spec({
    func: "includes",
    spec: { setIsArray: Array.isArray(set), predIsFunction: isFunction(pred) }
  });
  return set.find(pred);
}
