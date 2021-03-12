import { empty$ } from "./empty$";
import { not } from "./not";

/**
 * @param item
 * @returns {boolean}
 */
export function notEmpty$(item: any) {
  return not(empty$(item));
}
