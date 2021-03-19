import { clone } from "lodash";

/**
 * @param {[]} set
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function butLast(set) {
  const list = clone(set);
  list.pop();
  return list;
}
