import { spec } from "../spec";
import { object$ } from "../generic/object$";
import { and } from "../conditional/and";
import { iff } from "../conditional/iff";
import { or } from "../conditional/or";
import { first } from "./first";
import { number$ } from "../generic/number$";
import { second } from "./second";
import { void$ } from "../generic/void$";
import { eq } from "../generic/eq";
import { objectSet$ } from "../generic/object-set$";
import { cloneDeep } from "../generic/clone-deep";

/**
 * assoc[iate]. When applied to a map, returns a new map of the
 * same (hashed/sorted) type, that contains the mapping of key(s) to
 * val(s). When applied to an Object is the same as Object.assign
 */
export function assoc(map: Object | Array<any>, ...set: Array<any>) {
  const _set = cloneDeep(set);
  const mapOrIndex = first(_set);
  const isArray = number$(mapOrIndex);
  const _map = void$(map) ? {} : cloneDeep(map);
  spec({
    func: "assoc",
    spec: {
      setTypesMatch: or(and(Array.isArray(_map), Array.isArray(_set)), and(object$(_map), objectSet$(_set))),
      arrayArgsIsTwo: iff(isArray, eq(_set.length, 2), true)
    }
  });
  return iff(
    isArray,
    () => {
      // @ts-ignore
      _map[mapOrIndex] = second(_set);
      return _map;
    },
    () => Object.assign(_map, mapOrIndex)
  );
}
