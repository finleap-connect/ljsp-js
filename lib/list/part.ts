import { chunk } from "lodash";

/**
 * @param set
 * @param num
 * @returns {*}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'set' implicitly has an 'any' type.
export function part(set, num) {
  return chunk(set, num);
}
