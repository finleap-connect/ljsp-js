import { listInsert } from "./internal/list-insert";

/**
 * @param {[]} source
 * @param {*} insert
 * @param {*} locator
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'source' implicitly has an 'any' t... Remove this comment to see the full error message
export function insertAfter({ source, insert, locator }) {
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 4 arguments, but got 3.
  return listInsert(source, insert, locator);
}
