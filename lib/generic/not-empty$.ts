import { empty$ } from "./empty$";

/**
 * @param item
 * @returns {boolean}
 */
export function notEmpty$(item: any) {
  return !empty$(item);
}
