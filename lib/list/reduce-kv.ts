import { isFunction } from "lodash";
import { isEmpty } from "../generic/is-empty";
import { isObject } from "../generic/is-object";
import { spec } from "../spec/spec";

/**
 * @param {Function} fn
 * @param {*} init
 * @param {{} | []} coll
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'fn' implicitly has an 'any' type.
export function reduceKv(fn, init, coll) {
  spec({
    func: "reduceKv",
    spec: { fnIsFunction: isFunction(fn), collIsArrayOrObj: Array.isArray(coll) || isObject(coll) }
  });
  if (isEmpty(coll)) {
    return init;
  }
  return isObject(coll)
    ? Object.entries(coll).reduce((acc, [k, v]) => fn(init, k, v), init)
    : // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'acc' implicitly has an 'any' type.
      coll.reduce((acc, cur, idx) => fn(acc, idx, cur), init);
}
