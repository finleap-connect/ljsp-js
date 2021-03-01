import { clone } from "lodash";
import { spec } from "../spec/spec";

/**
 * @param {[]} set
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function butLast(set) {
  spec({ func: "butLast", spec: { setIsArray: Array.isArray(set) } });

  const list = clone(set);
  list.pop();
  return list;
}
