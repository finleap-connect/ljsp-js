import { spec } from "../spec/spec";

/**
 * @param {*[]} set
 * @param {object} updateItem
 * @param {string} [id="id"]
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function updateSet(set, updateItem, id = "id") {
  spec({ func: "updateSet", spec: { setIsArray: Array.isArray(set) } });
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'element' implicitly has an 'any' type.
  return set.map((element) => {
    return element[id] === updateItem[id] ? updateItem : element;
  });
}
