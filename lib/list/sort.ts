import { function$ } from "../generic/function$";
import { spec } from "../spec/spec";

/**
 * @param comp
 * @param set
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'comp' implicitly has an 'any' type.
export function sort(comp, set) {
  spec(sort, {
    validComp: !set ? Array.isArray(comp) : function$(comp),
    validSet: set ? Array.isArray(set) : true
  });
  return Array.isArray(comp) ? comp.slice().sort() : set.slice().sort(comp);
}
