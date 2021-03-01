import { spec } from "../spec/spec";

/**
 * @param {*} item
 * @param {[]} set
 * @returns {*[]}
 */
export function cons(item, set) {
  spec({ func: "cons", spec: { setIsArray: Array.isArray(set) } });
  return [item, ...set];
}
