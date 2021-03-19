import { first } from "./first";

/**
 * @param {[]} set
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function cycle(set) {
  let count = 0;
  return function sequence() {
    if (count < set.length) {
      let value = set[count];
      count += 1;
      return value;
    } else {
      count = 1;
      return first(set);
    }
  };
}
