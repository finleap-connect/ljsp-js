import { and } from "../conditional/and";
import { eq } from "../generic/eq";
import { notEq } from "../generic/not-eq";

export function float$(num: number): boolean {
  return and(eq(Number(num), num), notEq(num % 1, 0));
}
