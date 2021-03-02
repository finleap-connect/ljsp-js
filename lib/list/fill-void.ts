import { isEmpty } from "lodash";
import { iff } from "../conditional/iff";
import { void$ } from "../generic/void$";
import { spec } from "../spec/spec";

/**
 * Fills void values from the second array and returns a new array
 * @param {[]} source
 * @param {[]} template
 * @returns {[]}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'source' implicitly has an 'any' type.
export function fillVoid(source, template) {
  spec({
    func: "fullVoid",
    spec: {
      sourceIsArray: Array.isArray(source),
      templateIsArray: Array.isArray(template),
      templateIsNotEmpty: !isEmpty(template)
    }
  });

  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
  return source.map((value, idx) => iff(void$(value), template[idx], value));
}
