import { iff } from "../conditional/iff";
import { void$ } from "../generic/void$";

/**
 * Fills void values from the second array and returns a new array
 * @param {[]} source
 * @param {[]} template
 * @returns {[]}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'source' implicitly has an 'any' type.
export function fillVoid(source, template) {
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
  return source.map((value, idx) => iff(void$(value), template[idx], value));
}
