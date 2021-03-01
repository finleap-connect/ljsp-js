import { clone } from "lodash";
import { spec } from "../spec/spec";

/**
 * @param {[]} set
 */
export function butLast(set) {
  spec({ func: "butLast", spec: { setIsArray: Array.isArray(set) } });

  const list = clone(set);
  list.pop();
  return list;
}
