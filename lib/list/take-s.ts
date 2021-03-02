import { isPositiveInt$ } from "../math/is-positive-int$";
import { spec } from "../spec/spec";

/**
 * @param {number} count
 * @param {sequence} sequence
 * @returns {[]|Function}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'count' implicitly has an 'any' type.
export function takeS(count, sequence) {
  spec({ func: "takeS", spec: { countIsPositiveInt: isPositiveInt$(count) } });
  const limit = count;
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'sequence' implicitly has an 'any' type.
  function run(sequence) {
    const result = [];
    for (let i = 0; i < limit; i++) {
      const item = sequence();
      if (item) {
        result.push(item);
      } else {
        return result;
      }
    }
    return result;
  }
  if (!sequence) {
    return run;
  } else {
    return run(sequence);
  }
}
