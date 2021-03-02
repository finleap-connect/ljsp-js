import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function rest(set) {
  spec({ func: "rest", spec: { setIsArray: Array.isArray(set) } });
  return set.slice(1);
}
