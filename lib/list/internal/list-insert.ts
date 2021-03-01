import { findIndex } from "lodash";

/**
 * The insertItem method is an immutable alternative to the
 * Array.prototype.splice method, which mutates the array in place.
 * This method, and its named interfaces, are also more semantic
 * and provide named parameters to improve readability.
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'source' implicitly has an 'any' type.
export function listInsert(source, insert, locator, isBefore) {
  const index = findIndex(source, locator);
  const boundary = isBefore ? index - 1 : index;
  return [
    ...source.slice(0, boundary),
    ...(Array.isArray(insert) ? insert : [insert]),
    ...source.slice(boundary, source.length)
  ];
}
