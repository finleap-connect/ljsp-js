import { spec } from "../spec/spec";

/**
 * @param {*} item
 * @param {[]} set
 * @returns {*[]}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
export function cons(item, set) {
  spec({ func: "cons", spec: { setIsArray: Array.isArray(set) } });
  return [item, ...set];
}
