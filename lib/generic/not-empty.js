import { isEmpty } from "./is-empty";

/**
 * @param item
 * @returns {boolean}
 */
export function notEmpty(item) {
  return !isEmpty(item);
}
