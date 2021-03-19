import { eq } from "../generic";

/**
 * Returns true if n is even, throws an exception if n is not an integer
 * @param num
 */
export function even$(num: number): boolean {
  return eq(num, 0) ? false : eq(num % 2, 0);
}
