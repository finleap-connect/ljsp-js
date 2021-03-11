import { isObject } from "lodash";
import { stringSet$ } from "../generic/string-set$";
import { spec } from "../spec/spec";
import { reduceKv } from "./reduce-kv";

/**
 * @param {{}} map
 * @param {string[]} keys
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'map' implicitly has an 'any' type.
export function selectKeys(map, keys) {
  spec({
    func: "selectKeys",
    spec: { mapIsObject: isObject(map), keysIsStringArray: stringSet$(keys) }
  });
  return reduceKv(
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'acc' implicitly has an 'any' type.
    (acc, key, value) => {
      if (keys.includes(key)) {
        acc[key] = value;
      }
      return acc;
    },
    {},
    map
  );
}
