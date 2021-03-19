import { identity } from "lodash";

/**
 * @param item
 * @param transform
 * @returns {*|*[]}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
export function makeArray(item, transform = identity) {
  return Array.isArray(item) ? item.map(transform) : [transform(item)];
}
