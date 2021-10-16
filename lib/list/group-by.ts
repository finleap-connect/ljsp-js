// @ts-nocheck
import { objectSet$ } from "../generic/object-set$";
import { string$ } from "../generic/string$";
import { and } from "../conditional/and";
import { spec } from "../spec";

/**
 * Returns a map of the elements of coll keyed by the result of
 * f on each element. The value at each key will be a vector of the
 * corresponding elements, in the order they appeared in coll.
 */
export function groupBy(fn: Function | string, coll: Array<any>) {
  spec(groupBy, { keyWordHasObjectColl: string$(fn) ? objectSet$(coll) : true });
  const isProp = and(objectSet$(coll), string$(fn));

  return coll.reduce((result, value, key) => {
    key = isProp ? value[fn] : fn(value);
    if (result.hasOwnProperty(key)) {
      result[key].push(value);
    } else {
      result[key] = [value];
    }
    return result;
  }, {});
}
