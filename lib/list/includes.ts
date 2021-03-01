import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @param {*} rest
 * @returns {*[]}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function includes(set, ...rest) {
  spec({ func: "includes", spec: { setIsArray: Array.isArray(set) } });
  return rest.every((item) => set.includes(item));
}
