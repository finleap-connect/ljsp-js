import { spec } from "../spec/spec";
import { first } from "./first";

/** Same as (first (first x))
 * @param set
 */
export function ffirst(set) {
  spec({ func: "ffirst", spec: { setIsArray: Array.isArray(set) } });
  return first(first(set));
}
