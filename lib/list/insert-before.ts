import { listInsert } from "./internal/list-insert";

/**
 * @param {[]} source
 * @param {*} insert
 * @param {*} locator
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'source' implicitly has an 'any' t... Remove this comment to see the full error message
export function insertBefore({ source, insert, locator }) {
  return listInsert(source, insert, locator, true);
}
