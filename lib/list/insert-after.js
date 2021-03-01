import { spec } from "../spec/spec";
import { listInsert } from "./internal/list-insert";

/**
 * @param {[]} source
 * @param {*} insert
 * @param {*} locator
 * @returns {*}
 */
export function insertAfter({ source, insert, locator }) {
  spec({ func: "listInsertAfter", spec: { sourceIsArray: Array.isArray(source) } });
  return listInsert(source, insert, locator);
}
