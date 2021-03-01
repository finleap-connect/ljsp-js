import { spec } from "../spec/spec";
import { listInsert } from "./internal/list-insert";

/**
 * @param {[]} source
 * @param {*} insert
 * @param {*} locator
 * @returns {*}
 */
export function insertBefore({ source, insert, locator }) {
  spec({ func: "listInsertBefore", spec: { sourceIsArray: Array.isArray(source) } });
  return listInsert(source, insert, locator, true);
}
