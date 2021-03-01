import { spec } from "../spec/spec";
import { first } from "./first";

/** Same as (first (first x))
 * @param set
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function ffirst(set) {
  spec({ func: "ffirst", spec: { setIsArray: Array.isArray(set) } });
  return first(first(set));
}
