import { nth } from "./nth";

/**
 * Same as (first (next x))
 * @param set
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function second(set) {
  return nth(set, 1);
}
