import { cond, ELSE } from "../conditional/cond";
import { object$ } from "../generic/object$";
import { TCollection } from "../types/t-collection";

/**
 * @param {Function} fn
 * @param {[]} coll
 */
export function mapIndexed(fn: Function, coll: TCollection) {
  // prettier-ignore
  const _value = cond(
    () => Array.isArray(coll), coll,
    () => object$(coll), () => Object.entries(coll),
    // @ts-ignore
    ELSE, () => coll.split("")
  );

  return _value.map((item: any, index: number) => {
    return fn(index, item);
  });
}
