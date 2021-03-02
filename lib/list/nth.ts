import { isNonNegativeInt$ } from "../math/is-non-negative-int$";
import { spec } from "../spec/spec";

/**
 * @param set
 * @param index
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function nth(set, index) {
  spec({
    func: "nth",
    spec: { setIsArray: Array.isArray(set), indexIsNonNegativeInt: isNonNegativeInt$(index) }
  });
  return set[index];
}
