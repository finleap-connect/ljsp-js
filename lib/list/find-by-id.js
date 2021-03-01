import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @param {string|number} id
 * @param {string} [idProp="id]
 * @returns {*}
 */
export function findById(set, id, idProp = "id") {
  spec({ func: "findInSetById", spec: { setIsArray: Array.isArray(set) } });
  return set.find((item) => item[idProp] === id);
}
