import { chunk } from "lodash";
import { spec } from "../spec/spec";

/**
 * @param set
 * @param num
 * @returns {*}
 */
export function part(set, num) {
  spec({ func: "part", spec: { setIsArray: Array.isArray(set), numIsInt: Number.isInteger(num) } });
  return chunk(set, num);
}
