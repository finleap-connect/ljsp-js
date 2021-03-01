import { isObjectLike } from "lodash";
import { reduceKv } from "../list/reduce-kv";
import { spec } from "../spec/spec";

/**
 * @param {Object[]} collection
 * @param mapper
 * @return {Object[]}
 */
export function rename(collection, mapper) {
  spec({
    func: "rename",
    spec: {
      collectionIsValid: and(Array.isArray(collection), collection.map(isObjectLike)),
      mapperIsValid: isObjectLike(mapper)
    }
  });

  function renameProperties(acc, key, value) {
    let newKey = iff(mapper[key], mapper[key], key);
    acc[newKey] = value;
    return acc;
  }

  return collection.map((item) => {
    return reduceKv(renameProperties, {}, item);
  });
}
