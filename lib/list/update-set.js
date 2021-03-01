import { spec } from "../spec/spec";

/**
 * @param {*[]} set
 * @param {object} updateItem
 * @param {string} [id="id"]
 * @returns {*}
 */
export function updateSet(set, updateItem, id = "id") {
  spec({ func: "updateSet", spec: { setIsArray: Array.isArray(set) } });
  return set.map((element) => {
    return element[id] === updateItem[id] ? updateItem : element;
  });
}
