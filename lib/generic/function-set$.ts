import { isFunction } from "lodash";
import { spec } from "../spec/spec";
import { typedSet$ } from "./internal/typed-set$";

/**
 * @param {[]} set
 * @returns {Boolean}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function functionSet$(set) {
  spec({ func: "isFunctionSet", spec: { setIsArray: Array.isArray(set) } });
  return typedSet$(set, (item) => isFunction(item));
}
