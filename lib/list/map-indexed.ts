import { cond, ELSE } from "../conditional/cond";
import { isObject } from "../generic/is-object";
import { isString } from "../generic/is-string";
import { spec } from "../spec/spec";

/**
 * @param {Function} fn
 * @param {[]} value
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'fn' implicitly has an 'any' type.
export function mapIndexed(fn, value) {
  spec({
    func: "mapIndexed",
    spec: { validValue: Array.isArray(value) || isObject(value) || isString(value) }
  });
  // prettier-ignore
  const _value = cond(
    () => Array.isArray(value), value,
    () => isObject(value), () => Object.entries(value),
    ELSE, () => value.split("")
  );

  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
  return _value.map((item, index) => {
    return fn(index, item);
  });
}