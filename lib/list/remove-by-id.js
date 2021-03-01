import { spec } from "../spec/spec";

/**
 * @param {[]} set
 * @param {string|number} id
 * @param {string} [idProp="id]
 * @returns {*}
 */
export function removeById(set, id, idProp = "id") {
  spec({ func: "removeFromSetById", spec: { setIsArray: Array.isArray(set) } });
  return set.filter((item) => item[idProp] !== id);
}
