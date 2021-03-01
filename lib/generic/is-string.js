import { eq } from "./eq";

const STRING = "string";

/**
 * @param value
 * @returns {boolean}
 */
export function isString(value) {
  return eq(typeof value, STRING);
}
