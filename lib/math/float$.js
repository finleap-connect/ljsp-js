import { and } from "../conditional/and";
import { eq } from "../generic/eq";
import { notEq } from "../generic/not-eq";

/**
 * Determines if a number is a Float
 * @param n
 * @returns {boolean}
 */
export function float$(n) {
  return and(eq(Number(n), n), notEq(n % 1, 0));
}
