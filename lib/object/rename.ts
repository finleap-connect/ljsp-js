import { isObjectLike } from "lodash";
import { and } from "../conditional/and";
import { reduceKv } from "../list/reduce-kv";
import { spec } from "../spec/spec";

/**
 * @param {Object[]} collection
 * @param mapper
 * @return {Object[]}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'collection' implicitly has an 'any' typ... Remove this comment to see the full error message
export function rename(collection, mapper) {
  spec({
    func: "rename",
    spec: {
      collectionIsValid: and(Array.isArray(collection), collection.map(isObjectLike)),
      mapperIsValid: isObjectLike(mapper)
    }
  });

  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'acc' implicitly has an 'any' type.
  function renameProperties(acc, key, value) {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'iff'.
    let newKey = iff(mapper[key], mapper[key], key);
    acc[newKey] = value;
    return acc;
  }

  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'item' implicitly has an 'any' type.
  return collection.map((item) => {
    return reduceKv(renameProperties, {}, item);
  });
}