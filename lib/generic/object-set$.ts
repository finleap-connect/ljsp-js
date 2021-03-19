import { object$ } from "./object$";
import { typedSet$ } from "./internal/typed-set$";

/**
 * @param {[]} set
 * @returns {Boolean}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function objectSet$(set) {
  return typedSet$(set, object$);
}
