import { and } from "../conditional/and";
import { eq } from "../generic/eq";
import { notEq } from "../generic/not-eq";

export function float$(n: number): boolean {
  return and(eq(Number(n), n), notEq(n % 1, 0));
}
