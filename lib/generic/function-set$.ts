import { typedSet$ } from "./internal/typed-set$";
import { function$ } from "./function$";

/**
 * @param {[]} set
 * @returns {Boolean}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function functionSet$(set) {
  return typedSet$(set, (item) => function$(item));
}
