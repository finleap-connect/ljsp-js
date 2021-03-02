import { chunk } from "lodash";
import { spec } from "../spec/spec";

/**
 * @param set
 * @param num
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function part(set, num) {
  spec({ func: "part", spec: { setIsArray: Array.isArray(set), numIsInt: Number.isInteger(num) } });
  return chunk(set, num);
}
