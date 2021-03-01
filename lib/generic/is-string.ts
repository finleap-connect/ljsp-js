import { eq } from "./eq";

const STRING = "string";

/**
 * @param value
 * @returns {boolean}
 */
// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
export function isString(value) {
  return eq(typeof value, STRING);
}
