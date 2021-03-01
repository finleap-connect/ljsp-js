import { isFunction } from "lodash";
import { spec } from "../spec/spec";

/**
 * @param comp
 * @param set
 */
export function sort(comp, set) {
  spec({
    func: "sort",
    spec: {
      validComp: !set ? Array.isArray(comp) : isFunction(comp),
      validSet: set ? Array.isArray(set) : true
    }
  });
  return Array.isArray(comp) ? comp.slice().sort() : set.slice().sort(comp);
}
