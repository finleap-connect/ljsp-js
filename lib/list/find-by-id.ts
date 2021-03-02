import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @param {string|number} id
 * @param {string} [idProp="id]
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function findById(set, id, idProp = "id") {
  spec({ func: "findInSetById", spec: { setIsArray: Array.isArray(set) } });
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
  return set.find((item) => item[idProp] === id);
}
