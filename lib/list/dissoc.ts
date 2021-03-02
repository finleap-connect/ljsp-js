import { isObject } from "../generic/is-object";
import { isStringSet } from "../generic/is-string-set";
import { spec } from "../spec/spec";

/**
 * @param {{}} obj
 * @param {string[]} rest
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'obj' implicitly has an 'any' type.
export function dissoc(obj, ...rest) {
  spec({
    func: "dissociate",
    spec: { firstIsObject: isObject(obj), propIsString: isStringSet(rest) }
  });
  return Object.entries(obj).reduce((acc, [key, val]) => {
    if (!rest.includes(key)) {
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      acc[key] = val;
    }
    return acc;
  }, {});
}
